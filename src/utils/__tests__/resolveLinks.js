const { resolveLinksMutating } = require('../resolveLinks');

describe('contentful link resolval', () => {

	const entryWithEntry = {
		entryField: {
			sys: {
				type: 'Link',
				linkType: 'Entry',
				id: 'e2'
			}
		},
		sys: {
			type: 'Entry',
			id: 'e1'
		}
	};

	const entryWithAsset = {
		assetField: {
			sys: {
				type: 'Link',
				linkType: 'Asset',
				id: 'a1'
			}
		},
		sys: {
			type: 'Entry',
			id: 'e2'
		}
	};

	it('should resolve links to entries', () => {
		const entries = {
			e1: JSON.parse(JSON.stringify(entryWithEntry)),
			e2: JSON.parse(JSON.stringify(entryWithAsset))
		};
		expect(resolveLinksMutating([entries.e1], { ...entries })).toMatchSnapshot();
	});

	it('should resolve links to assets', () => {
		const asset = {
			sys: {
				type: 'Asset',
				id: 'a1'
			},
			myProperty: 'Hello World'
		};
		const assets = {
			a1: asset
		};
		const entries = {
			e2: JSON.parse(JSON.stringify(entryWithAsset))
		};
		expect(resolveLinksMutating([entries.e2], { ...entries, ...assets })).toMatchSnapshot();
	});

});
