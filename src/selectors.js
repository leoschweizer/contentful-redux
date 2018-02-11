const { createSelector } = require('reselect');
const { Entry } = require('./model');

const mapifyModels = (modelArray, idExtractor = model => model.sys.id) => {
	return modelArray.reduce((result, model) => {
		return {
			...result,
			[idExtractor(model)]: model
		};
	}, {});
};

const isLink = object => {
	return object && object.sys && object.sys.type === 'Link';
};

const getLink = (lookupTable, link) => {
	const candidate = lookupTable[link.sys.id];
	if (!candidate || candidate.sys.type !== link.sys.linkType) {
		return null;
	}
	return candidate;
};

const walkMutate = (input, predicate, mutator) => {

	if (predicate(input)) {
		return mutator(input);
	}

	if (input && typeof input === 'object') {
		for (const key in input) {
			if (Object.prototype.hasOwnProperty.call(input, key)) {
				input[key] = walkMutate(input[key], predicate, mutator);
			}
		}
		return input;
	}

	return input;

};

const resolveLinksMutating = (entries, lookupTable) => {
	walkMutate(entries, isLink, link => (getLink(lookupTable, link) || link));
	return entries || [];
};

const makeSelectors = ({ stateSelector, localeSelector }) => {

	const space = createSelector(
		stateSelector,
		state => state.space
	);

	const locales = createSelector(
		space,
		space => space.locales || []
	);

	const defaultLocale = createSelector(
		locales,
		locales => locales.find(locale => locale.default)
	);

	const preferredLocaleCode = createSelector(
		localeSelector, defaultLocale,
		(locale, defaultLocale) => {
			if (locale) {
				return locale;
			}
			if (defaultLocale) {
				return defaultLocale.code;
			}
			return null;
		}
	);

	const rawContentTypes = createSelector(
		stateSelector,
		state => state.contentTypes
	);

	const rawAssets = createSelector(
		stateSelector,
		state => state.assets
	);

	const rawEntries = createSelector(
		stateSelector,
		state => state.entries
	);

	const contentTypes = createSelector(
		rawContentTypes,
		rawContentTypes => mapifyModels(rawContentTypes)
	);

	const flatAssets = createSelector(
		rawAssets, localeSelector, defaultLocale,
		(rawAssets, locale, defaultLocale) => {
			return rawAssets.map(rawAsset => {
				return Object.keys(rawAsset.fields).reduce((previous, current) => {
					return {
						[current]: rawAsset.fields[current][locale] || rawAsset.fields[current][defaultLocale],
						...previous
					};
				}, {
					sys: rawAsset.sys,
					fields: rawAsset.fields
				});
			});
		}
	);

	const localizedEntries = createSelector(
		rawEntries, contentTypes, preferredLocaleCode, defaultLocale,
		(rawEntries, contentTypes, preferredLocaleCode, defaultLocale) => {
			return rawEntries.map(rawEntry => {
				const contentType = contentTypes[rawEntry.sys.contentType.sys.id];
				const localizedFields = contentType.fields.reduce((result, field) => {
					const currentValue = rawEntry.fields[field.id];
					if (!currentValue) {
						return {
							...result,
							[field.id]: null
						};
					}
					return {
						...result,
						[field.id]: field.localized ? currentValue[preferredLocaleCode] : currentValue[defaultLocale.code]
					};
				}, {});
				return {
					localizedFields,
					fields: rawEntry.fields,
					sys: rawEntry.sys
				};
			});
		}
	);

	const entries = createSelector(
		localizedEntries, rawAssets,
		(localizedEntries, rawAssets) => {
			const deepClonedEntries = JSON.parse(JSON.stringify(localizedEntries)).map(each => {
				return new Entry(each);
			});
			const entryMap = mapifyModels(deepClonedEntries, each => each.id);
			const assetMap = mapifyModels(rawAssets);
			return resolveLinksMutating(deepClonedEntries, { ...entryMap, ...assetMap });
		}
	);

	return {
		space,
		locales,
		defaultLocale,
		contentTypes,
		localizedEntries,
		flatAssets,
		entries
	};

};

module.exports = {
	makeSelectors
};
