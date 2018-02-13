const constants = require('./constants');

const handleContentfulAction = async (client, action, state, dispatch, options) => {

	if (action.type === constants.SYNC) {
		dispatch({ type: constants.SYNC_PENDING, spaceId: options.space });
		try {
			const [space, contentTypes, syncResult] = await Promise.all([
				client.getSpace(),
				client.getContentTypes({ limit: 1000 }),
				client.sync({ initial: Boolean(!state.nextSyncToken), nextSyncToken: state.nextSyncToken, resolveLinks: false })
			]);
			dispatch({
				type: constants.SYNC_FINISHED,
				spaceId: options.space,
				space,
				contentTypes: contentTypes.toPlainObject().items,
				date: new Date(),
				...syncResult.toPlainObject()
			});
		} catch (err) {
			dispatch({
				type: constants.SYNC_FAILED,
				spaceId: options.space,
				error: err.toString()
			});
		}
	}

};

const makeMiddleware = options => store => {

	const client = options.createClient({
		space: options.space,
		accessToken: options.accessToken
	});

	const relevantActions = [constants.SYNC];

	return next => async action => {
		const state = options.stateSelector(store.getState());
		const result = next(action);
		if (relevantActions.includes(action.type) && action.spaceId === options.space) {
			return handleContentfulAction(client, action, state, store.dispatch, options);
		}
		return result;
	};

};

module.exports = {
	makeMiddleware
};
