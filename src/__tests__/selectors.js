const { makeSelectors } = require('../selectors');
const { initialState } = require('../reducer.js');
const stateAfterSync = require('./__fixtures__/stateAfterSync');

describe('selectors', () => {

	const selectors = makeSelectors({
		stateSelector: state => state,
		localeSelector: () => null
	});

	const selectorsWithCustomLocale = makeSelectors({
		stateSelector: state => state,
		localeSelector: () => 'en-US'
	});

	test('assets selector', () => {
		expect(selectors.assets(initialState)).toHaveLength(0);
		expect(selectors.assets(stateAfterSync)).toMatchSnapshot();
	});

	test('contentTypes selector', () => {
		expect(selectors.contentTypes(initialState)).toEqual({});
		expect(selectors.contentTypes(stateAfterSync)).toMatchSnapshot();
	});

	test('defaultLocale selector', () => {
		expect(selectors.defaultLocale(stateAfterSync)).toMatchSnapshot();
	});

	test('entries selector', () => {
		expect(selectors.entries(initialState)).toHaveLength(0);
		expect(selectors.entries(stateAfterSync)).toMatchSnapshot();
	});

	test('entries selector with custom locale', () => {
		expect(selectorsWithCustomLocale.entries(stateAfterSync)).toMatchSnapshot();
	});

	test('isSyncing selector', () => {
		expect(selectors.isSyncing(initialState)).toBeFalsy();
		expect(selectors.isSyncing(stateAfterSync)).toMatchSnapshot();
	});

	test('lastSync selector', () => {
		expect(selectors.lastSync(initialState)).toBe(null);
		expect(selectors.lastSync(stateAfterSync)).toMatchSnapshot();
	});

	test('locales selector', () => {
		expect(selectors.locales(initialState)).toHaveLength(0);
		expect(selectors.locales(stateAfterSync)).toMatchSnapshot();
	});

	test('space selector', () => {
		expect(selectors.space(initialState)).toEqual({});
		expect(selectors.space(stateAfterSync)).toMatchSnapshot();
	});

});
