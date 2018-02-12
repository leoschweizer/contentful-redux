const contentfulRedux = require('../');

describe('the module', () => {

	it('should return a function', () => {
		expect(contentfulRedux).toBeInstanceOf(Function);
	});

	it('should return actions, a reducer, a middleware, and selectors', () => {
		const options = { stateSelector: state => state };
		expect(contentfulRedux(options)).toEqual(expect.objectContaining({
			actions: expect.any(Object),
			reducer: expect.any(Function),
			middleware: expect.any(Function),
			selectors: expect.any(Object)
		}));
	});

});
