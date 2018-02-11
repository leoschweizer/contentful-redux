const constants = require('./constants');

const initialState = {
	space: {},
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
				space: action.space,
				contentTypes: action.contentTypes,
				assets: action.assets,
				entries: action.entries
			};

		default:
			return state;

	}

};

module.exports = {
	initialState,
	reducer
};
