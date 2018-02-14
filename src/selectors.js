const { createSelector } = require('reselect');
const { ContentType, Asset, Entry } = require('./model');
const { resolveLinksMutating } = require('./utils/resolveLinks');

const mapifyModels = modelArray => {
	return modelArray.reduce((result, model) => {
		return {
			...result,
			[model.id]: model
		};
	}, {});
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

	const rawLastSync = createSelector(
		stateSelector,
		state => state.lastSync
	);

	const lastSync = createSelector(
		rawLastSync,
		rawLastSync => {
			if (!rawLastSync) {
				return null;
			}
			return {
				...rawLastSync,
				date: new Date(rawLastSync.date)
			};
		}
	);

	const isSyncing = createSelector(
		stateSelector,
		state => state.isSyncing
	);

	const contentTypes = createSelector(
		rawContentTypes,
		rawContentTypes => rawContentTypes.map(ContentType.newWithData).reduce((result, contentType) => ({
			...result,
			[contentType.id]: contentType
		}), {})
	);

	const localizedAssets = createSelector(
		rawAssets, localeSelector, defaultLocale,
		(rawAssets, locale, defaultLocale) => {
			return rawAssets.map(rawAsset => {
				const localizedFields = Object.keys(rawAsset.fields).reduce((result, key) => {
					return {
						...result,
						[key]: rawAsset.fields[key][locale] || rawAsset.fields[key][defaultLocale.code]
					};
				}, {});
				return {
					localizedFields,
					fields: rawAsset.fields,
					sys: rawAsset.sys
				};
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

	const assets = createSelector(
		localizedAssets,
		localizedAssets => localizedAssets.map(Asset.newWithData)
	);

	const entries = createSelector(
		localizedEntries, assets, contentTypes,
		(localizedEntries, assets, contentTypes) => {
			const deepClonedEntries = JSON.parse(JSON.stringify(localizedEntries)).map(Entry.newWithData);
			const entryMap = mapifyModels(deepClonedEntries);
			const assetMap = mapifyModels(assets);
			return resolveLinksMutating(deepClonedEntries, { ...entryMap, ...assetMap, ...contentTypes });
		}
	);

	return {
		space,
		locales,
		defaultLocale,
		lastSync,
		isSyncing,
		contentTypes,
		assets,
		entries
	};

};

module.exports = {
	makeSelectors
};
