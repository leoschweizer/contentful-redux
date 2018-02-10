const actions = require('../actions');

test('sync action creator', () => {
	expect(actions.sync()).toMatchSnapshot();
});
