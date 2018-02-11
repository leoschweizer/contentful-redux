const isLink = object => {
	return object && object.sys && object.sys.type === 'Link';
};

const getLink = (lookupTable, link) => {
	const candidate = lookupTable[link.sys.id];
	if (!candidate || candidate.sys.type !== link.sys.linkType) {
		return null;
	}
	return candidate;
};

const walkMutate = (input, predicate, mutator) => {

	if (predicate(input)) {
		return mutator(input);
	}

	if (input && typeof input === 'object') {
		for (const key in input) {
			if (Object.prototype.hasOwnProperty.call(input, key)) {
				input[key] = walkMutate(input[key], predicate, mutator);
			}
		}
		return input;
	}

	return input;

};

const resolveLinksMutating = (entries, lookupTable) => {
	walkMutate(entries, isLink, link => (getLink(lookupTable, link) || link));
	return entries || [];
};

module.exports = {
	resolveLinksMutating
};
