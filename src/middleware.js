const constants = require('./constants');

const makeMiddleware = options => store => {

	const client = options.createClient({
		space: options.space,
		accessToken: options.accessToken
	});

	return next => async action => {

		const result = next(action);

		if (action.type === constants.SYNC && action.spaceId === options.space) {
			store.dispatch({ type: constants.SYNC_PENDING, spaceId: options.space });
			try {
				const [space, contentTypes, syncResult] = await Promise.all([
					client.getSpace(),
					client.getContentTypes({ limit: 1000 }),
					client.sync({ initial: true, resolveLinks: false })
				]);
				store.dispatch({
					type: constants.SYNC_FINISHED,
					spaceId: options.space,
					space,
					contentTypes: contentTypes.toPlainObject().items,
					...syncResult.toPlainObject()
				});
			} catch (err) {
				store.dispatch({
					type: constants.SYNC_FAILED,
					spaceId: options.space,
					error: err.toString()
				});
			}
		}

		return result;

	};

};

module.exports = {
	makeMiddleware
};
