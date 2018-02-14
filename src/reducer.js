const constants = require('./constants');

const initialState = {
	space: {},
	contentTypes: [],
	assets: [],
	entries: [],
	lastSync: null,
	isSyncing: false,
	nextSyncToken: null
};

const merge = (entities, newEntities, deletedEntities) => {
	return entities
		.filter(each => newEntities.every(newEntity => each.sys.id !== newEntity.sys.id))
		.filter(each => deletedEntities.every(deletedEntity => each.sys.id !== deletedEntity.sys.id))
		.concat(newEntities);
};

const reducer = (state = initialState, action) => {

	switch (action.type) {

		case constants.SYNC:
			return {
				...state,
				isSyncing: true
			};

		case constants.SYNC_FINISHED:
			return {
				...state,
				space: action.space,
				contentTypes: action.contentTypes,
				assets: merge(state.assets, action.assets, action.deletedAssets),
				entries: merge(state.entries, action.entries, action.deletedEntries),
				lastSync: {
					didSucceed: true,
					addedEntries: action.entries,
					deletedEntries: action.deletedEntries,
					addedAssets: action.assets,
					deletedAssets: action.deletedAssets,
					date: action.date.toUTCString()
				},
				isSyncing: false,
				nextSyncToken: action.nextSyncToken
			};

		case constants.SYNC_FAILED:
			return {
				...state,
				lastSync: {
					didSucceed: false,
					date: action.date.toUTCString(),
					error: action.error
				},
				isSyncing: false
			};

		default:
			return state;

	}

};

module.exports = {
	initialState,
	reducer
};
