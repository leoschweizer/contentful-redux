const { makeActions } = require('../actions');

describe('action creators', () => {

	const actions = makeActions({
		space: 'SPACE_ID'
	});

	test('sync action creator', () => {
		expect(actions.sync()).toMatchSnapshot();
	});

});
