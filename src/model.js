
class Entry {

	constructor(rawData) {
		this.__meta__ = {
			...rawData.sys
		};
		Object.assign(this, rawData.localizedFields);
	}

	get id() {
		return this.__meta__.id;
	}

	get sys() {
		return this.__meta__;
	}

}

module.exports = {
	Entry
};
