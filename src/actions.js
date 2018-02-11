const constants = require('./constants');

const makeActions = options => {

	const sync = () => ({
		type: constants.SYNC,
		spaceId: options.space
	});

	return {
		sync
	};

};

module.exports = {
	makeActions
};
