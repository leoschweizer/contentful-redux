const constants = require('./constants');

const makeActions = options => {

	const sync = () => ({
		type: constants.SYNC,
		space: options.space
	});

	return {
		sync
	};

};

module.exports = {
	makeActions
};
