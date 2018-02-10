const constants = require('./constants');

const fetchData = () => ({
	type: constants.FETCH_DATA
});

module.exports = {
	fetchData
};
