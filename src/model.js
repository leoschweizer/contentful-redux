
class Asset {

	static newWithData(rawData) {
		return new Asset(rawData);
	}

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

class Entry {

	static newWithData(rawData) {
		return new Entry(rawData);
	}

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
	Asset,
	Entry
};
