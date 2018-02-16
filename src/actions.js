const constants = require('./constants');

const makeActions = options => {

	const sync = (spaceId = options.space) => ({
		type: constants.SYNC,
		spaceId
	});

	return {
		sync
	};

};

module.exports = {
	makeActions
};
