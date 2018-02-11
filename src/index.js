const { makeActions } = require('./actions');
const { makeSelectors } = require('./selectors');
const { makeMiddleware } = require('./middleware');
const { reducer } = require('./reducer');

const defaultOptions = {
	localeSelector: () => null
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
