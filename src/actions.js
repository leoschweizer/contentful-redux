const constants = require('./constants');

const sync = () => ({
	type: constants.SYNC
});

module.exports = {
	sync
};
