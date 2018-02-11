const { makeMiddleware } = require('../middleware');
const constants = require('../constants');

describe('middleware', () => {

	const space = 'SPACE_ID';
	const accessToken = 'ACCESS_TOKEN';

	const getSpace = jest.fn();
	const getContentTypes = jest.fn();
	const sync = jest.fn();

	const createClient = jest.fn(() => ({
		getSpace,
		getContentTypes,
		sync
	}));

	const middleware = makeMiddleware({
		space,
		accessToken,
		createClient,
		stateSelector: state => state
	});

	const doDispatch = jest.fn();
	const doGetState = jest.fn(() => ({
		nextSyncToken: null
	}));
	const store = { dispatch: doDispatch, getState: doGetState };

	const nextHandler = middleware(store);

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should return a function to handle next', () => {
		expect(nextHandler).toBeInstanceOf(Function);
		expect(nextHandler.length).toBe(1);
	});

	it('should pass the intercepted action to next', () => {
		const next = jest.fn();
		const action = { type: 'FOO' };
		nextHandler(next)(action);
		expect(next.mock.calls).toHaveLength(1);
		expect(next).toBeCalledWith(action);
	});

	it('should create a client with the given parameters', () => {
		middleware(store);
		expect(createClient.mock.calls).toHaveLength(1);
		expect(createClient.mock.calls[0][0]).toEqual(expect.objectContaining({
			space,
			accessToken
		}));
	});

	it('should invoke the client sync methods when receiving a sync action', async () => {
		const action = { type: constants.SYNC, spaceId: space };
		const next = jest.fn();
		await nextHandler(next)(action);
		expect(getSpace.mock.calls).toHaveLength(1);
		expect(getContentTypes.mock.calls).toHaveLength(1);
		expect(sync.mock.calls).toHaveLength(1);
	});

});
