const camelCase = require('camel-case');
const pascalCase = require('pascal-case');
const { makeActions } = require('./actions');
const { makeSelectors } = require('./selectors');
const { makeMiddleware } = require('./middleware');
const { reducer } = require('./reducer');

const defaultOptions = {
	className: contentType => pascalCase(contentType.name),
	propertyName: field => camelCase(field.name)
};

module.exports = (userOptions = {}) => {
	const options = { ...defaultOptions, ...userOptions };
	return {
		actions: makeActions(options),
		middleware: makeMiddleware(options),
		reducer,
		selectors: makeSelectors(options)
	};
};
