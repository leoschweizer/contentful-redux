const createClient = require('contentful');

module.exports = options => store => {

	const clientFactory = options.createClient || createClient;

	const client = clientFactory({
		space: options.space,
		accessKey: options.accessKey
	});

	return next => action => {
		client.foo();
		return next(action);
	}

};
