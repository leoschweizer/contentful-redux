const constants = require('./constants');

const initialState = {
	contentTypes: [],
	assets: [],
	entries: [],
	isFetchingData: false,
	didFetchData: false,
	error: null
};

const reducer = (state = initialState, action) => {

	switch (action.type) {

		case constants.SYNC_FINISHED:
			return {
				...state,
				contentTypes: action.contentTypes
			};

		default:
			return state;

	}

};

module.exports = {
	initialState,
	reducer
};
