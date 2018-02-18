const { makeSelectors } = require('../selectors');
const stateAfterSync = require('./__fixtures__/stateAfterSync');

describe('selectors', () => {

	const selectors = makeSelectors({
		stateSelector: state => state,
		localeSelector: () => null
	});

	test('assets selector', () => {
		expect(selectors.assets(stateAfterSync)).toMatchSnapshot();
	});

	test('contentTypes selector', () => {
		expect(selectors.contentTypes(stateAfterSync)).toMatchSnapshot();
	});

	test('defaultLocale selector', () => {
		expect(selectors.defaultLocale(stateAfterSync)).toMatchSnapshot();
	});

	test('entries selector', () => {
		expect(selectors.entries(stateAfterSync)).toMatchSnapshot();
	});

	test('isSyncing selector', () => {
		expect(selectors.isSyncing(stateAfterSync)).toMatchSnapshot();
	});

	test('lastSync selector', () => {
		expect(selectors.lastSync(stateAfterSync)).toMatchSnapshot();
	});

	test('locales selector', () => {
		expect(selectors.locales(stateAfterSync)).toMatchSnapshot();
	});

	test('space selector', () => {
		expect(selectors.space(stateAfterSync)).toMatchSnapshot();
	});

});
