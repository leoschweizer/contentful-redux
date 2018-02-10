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

		case constants.FETCH_DATA_PENDING:
			return {
				...state,
				isFetchingData: true,
				error: null
			};

		case constants.FETCH_DATA_FULFILLED:
			return {
				...state,
				isFetchingData: false,
				didFetchData: true,
				contentTypes: action.payload[0].items,
				assets: action.payload[1].assets,
				entries: action.payload[1].entries
			};

		case constants.FETCH_DATA_REJECTED:
			return {
				...state,
				isFetchingData: false,
				error: action.payload
			};

		default:
			return state;

	}

};

module.exports = {
	initialState,
	reducer,
	default: reducer
};
