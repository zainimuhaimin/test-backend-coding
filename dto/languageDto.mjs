export default class languageDto {
	constructor(
		language,
		appeared,
		created,
		functional,
		objectOriented,
		relation,
		influencedBy,
		influences
	) {
		this._language = language;
		this._appeared = appeared;
		this._created = created;
		this._functional = functional;
		this._objectOriented = objectOriented;
		this._relation = {
			influencedBy: influencedBy,
			influences: influences,
		};
	}

	//getter
	get language() {
		this._language;
	}

	get appeared() {
		this._appeared;
	}

	get created() {
		this._created;
	}

	get functional() {
		this._functional;
	}

	get objectOriented() {
		this._objectOriented;
	}

	get relation() {
		this._relation;
	}

	//setter
	set language(language) {
		this._language = language;
	}

	set appeared(appeared) {
		this._appeared = appeared;
	}

	set created(created) {
		this._created = created;
	}

	set functional(functional) {
		this._functional = functional;
	}

	set objectOriented(objectOriented) {
		this._objectOriented = objectOriented;
	}

	set relation(relation) {
		this._relation = relation;
	}

	toJSON() {
		console.log("start convert to json and to kebab case");

		const result = {};
		for (const key in this) {
			//parsing setiap key ke kebab case
			if (this.hasOwnProperty(key)) {
				const kebabKey = patternKebabCase(key.replace(/^_/, ""));
				if (typeof this[key] === "object" && !Array.isArray(this[key])) {
					result[kebabKey] = this.convertNestedObject(this[key]);
				} else {
					result[kebabKey] = this[key];
				}
			}
		}
		return result;
	}

	/**
	 * function untuk mengkonversi jika value key object dan perlu convert ke kebab case
	 * @param {*} obj
	 * @returns
	 */
	convertNestedObject(obj) {
		console.log("start convert to kebab case for nested object");

		const result = {};

		for (const key in obj) {
			if (obj.hasOwnProperty(key)) {
				const kebabKey = patternKebabCase(key);
				result[kebabKey] = obj[key];
			}
		}
		return result;
	}
}

//pattern untuk kebab case
function patternKebabCase(str) {
	return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
