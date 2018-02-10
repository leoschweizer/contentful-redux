const constants = require('./constants');

const middleware = (options = {}) => store => {

	const client = options.createClient({
		space: options.space,
		accessToken: options.accessToken
	});

	return next => async action => {

		const result = next(action);

		if (action.type === constants.SYNC) {
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
					error: err
				});
			}
		}

		return result;

	};

};

module.exports = {
	middleware,
	default: middleware
};
