const { makeMiddleware } = require('../middleware');

describe('middleware', () => {

	const middleware = makeMiddleware({
		space: 'SPACE_ID',
		createClient: jest.fn(),
		stateSelector: state => state
	});

	const doDispatch = jest.fn();
	const doGetState = jest.fn();
	const nextHandler = middleware({ dispatch: doDispatch, getState: doGetState });

	it('should return a function to handle next', () => {
		expect(nextHandler).toBeInstanceOf(Function);
		expect(nextHandler.length).toBe(1);
	});

	it('should pass the intercepted action to next', () => {
		const store = { dispatch: doDispatch, getState: doGetState };
		const next = jest.fn();
		const action = { type: 'FOO' };
		middleware(store)(next)(action);
		expect(next.mock.calls).toHaveLength(1);
		expect(next).toBeCalledWith(action);
	});

});
