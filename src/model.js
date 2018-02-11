
class BaseModel {

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

class ContentType extends BaseModel {

	static newWithData(rawData) {
		return new ContentType(rawData);
	}

	constructor(rawData) {
		const { sys, ...rest } = rawData;
		super({ sys });
		Object.assign(this, rest);
	}

}

class Asset extends BaseModel {

	static newWithData(rawData) {
		return new Asset(rawData);
	}

}

class Entry extends BaseModel {

	static newWithData(rawData) {
		return new Entry(rawData);
	}

	get __contentType__() {
		return this.__meta__.contentType;
	}

}

module.exports = {
	ContentType,
	Asset,
	Entry
};
