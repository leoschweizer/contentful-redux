const { makeActions } = require('./actions');
const { makeSelectors } = require('./selectors');
const { makeMiddleware } = require('./middleware');
const { reducer } = require('./reducer');

module.exports = (options = {}) => {
	return {
		actions: makeActions(options),
		middleware: makeMiddleware(options),
		reducer,
		selectors: makeSelectors(options)
	};
};
