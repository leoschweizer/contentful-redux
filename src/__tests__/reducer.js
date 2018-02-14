const { reducer, initialState } = require('../reducer');
const constants = require('../constants');

describe('reducer', () => {

	const makeEntity = id => ({ sys: { id } });

	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual(initialState);
	});

	it('should handle an initial sync correctly ', () => {
		const syncResult = {
			space: { id: 'SPACE_ID' },
			contentTypes: [makeEntity('c1')],
			entries: [makeEntity('e1'), makeEntity('e2')],
			assets: [makeEntity('a1'), makeEntity('a2')],
			deletedEntries: [],
			deletedAssets: [],
			nextSyncToken: 'SYNC_TOKEN',
			date: new Date('Wed, 14 Jun 2017 07:00:00 GMT')
		};
		const action = { type: constants.SYNC_FINISHED, ...syncResult };
		expect(reducer(initialState, action)).toEqual(expect.objectContaining({
			space: syncResult.space,
			contentTypes: syncResult.contentTypes,
			entries: syncResult.entries,
			assets: syncResult.assets,
			nextSyncToken: syncResult.nextSyncToken
		}));
	});

	it('should handle an incremental sync correctly', () => {
		const state = {
			...initialState,
			entries: [makeEntity('e1'), makeEntity('e2')],
			assets: [makeEntity('a1'), makeEntity('a2')]
		};
		const syncResult = {
			space: { id: 'SPACE_ID' },
			contentTypes: [makeEntity('c1')],
			entries: [makeEntity('e3')],
			assets: [makeEntity('a3')],
			deletedEntries: [makeEntity('e1')],
			deletedAssets: [makeEntity('a2')],
			nextSyncToken: 'SYNC_TOKEN',
			date: new Date('Wed, 14 Jun 2017 07:00:00 GMT')
		};
		const action = { type: constants.SYNC_FINISHED, ...syncResult };
		expect(reducer(state, action)).toEqual(expect.objectContaining({
			entries: [makeEntity('e2'), makeEntity('e3')],
			assets: [makeEntity('a1'), makeEntity('a3')]
		}));
	});

	it('should handle a sync failure correctly', () => {
		const state = {
			...initialState,
			entries: [makeEntity('e1')],
			assets: [makeEntity('a1')]
		};
		const action = {
			type: constants.SYNC_FAILED,
			error: "This didn't work",
			date: new Date('Wed, 14 Jun 2017 07:00:00 GMT')
		};
		expect(reducer(state, action)).toEqual(expect.objectContaining({
			lastSync: expect.objectContaining({
				didSucceed: false,
				error: action.error,
				date: action.date.toUTCString()
			})
		}));
	});

});
