const constants = require('./constants');

const middleware = (options = {}) => store => {

	const client = options.createClient({
		space: options.space,
		accessToken: options.accessToken
	});

	return next => async action => {

		if (action.type === constants.SYNC) {
			store.dispatch({ type: constants.SYNC_PENDING });
			try {
				const [space, contentTypes, syncResult] = await Promise.all([
					client.getSpace(),
					client.getContentTypes(),
					client.sync({ initial: true, resolveLinks: false })
				]);
				console.log(space, contentTypes, syncResult);
			} catch (err) {
				console.log(err);
			}
		}

		return next(action);

	};

};

module.exports = {
	middleware,
	default: middleware
};
