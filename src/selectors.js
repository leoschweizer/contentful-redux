const { createSelector } = require('reselect');

const makeSelectors = ({ contentful }) => {

	const contentTypes = createSelector(
		contentful,
		contentful => contentful.contentTypes
	);

	const model = createSelector(
		contentTypes,
		contentTypes => {
			return contentTypes.reduce((result, contentType) => {
				const modelClass = function (backingData) {
					this.__meta__ = {
						backingData
					};
				};
				contentType.fields.forEach(field => {
					const propertyName = field.__meta__.propertyName;
					Object.defineProperty(modelClass.prototype, propertyName, {
						get() {
							return this.__meta__.backingData[propertyName];
						}
					});
				});
				return {
					...result,
					[contentType.__meta__.className]: modelClass
				};
			}, {});
		}
	);

	return {
		contentTypes,
		model
	};

};

module.exports = {
	makeSelectors
};
