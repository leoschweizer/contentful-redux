const constants = require('./constants');

const makeMiddleware = options => store => {

	const client = options.createClient({
		space: options.space,
		accessToken: options.accessToken
	});

	return next => async action => {

		const result = next(action);

		if (action.type === constants.SYNC && action.space === options.space) {
			store.dispatch({ type: constants.SYNC_PENDING });
			try {
				const [space, contentTypes, syncResult] = await Promise.all([
					client.getSpace(),
					client.getContentTypes({ limit: 1000 }),
					client.sync({ initial: true, resolveLinks: false })
				]);
				store.dispatch({
					type: constants.SYNC_FINISHED,
					space,
					contentTypes: contentTypes.toPlainObject().items,
					...syncResult.toPlainObject()
				});
			} catch (err) {
				store.dispatch({
					type: constants.SYNC_FAILED,
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
