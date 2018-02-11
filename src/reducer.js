const constants = require('./constants');

const initialState = {
	space: {},
	contentTypes: [],
	assets: [],
	entries: [],
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

		case constants.SYNC_FINISHED:
			return {
				...state,
				space: action.space,
				contentTypes: action.contentTypes,
				assets: merge(state.assets, action.assets, action.deletedAssets),
				entries: merge(state.entries, action.entries, action.deletedEntries),
				nextSyncToken: action.nextSyncToken
			};

		default:
			return state;

	}

};

module.exports = {
	initialState,
	reducer
};
