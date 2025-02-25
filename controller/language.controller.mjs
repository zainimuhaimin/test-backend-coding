import languageDto from "../dto/languageDto.mjs";

const globalSlice = [];

function addToGlobalSlice(req) {
	const lang = req.body.language;
	const appeared = req.body.appeared;
	const created = req.body.created;
	const functional = req.body.functional;
	const objectOriented = req.body.objectOriented;
	const relation = req.body.relation;

	const obj = new languageDto();
	obj.language = lang;
	obj.appeared = appeared;
	obj.created = created;
	obj.functional = functional;
	obj.objectOriented = objectOriented;
	obj.relation = relation;
	globalSlice.push(obj);

	return obj;
}

export async function getLanguage(req, res) {
	console.log("start get language");
	try {
		// di komen karen sudah masuk ke soal post language menggunakan global slice
		// const language = new languageDto();
		// language.language = "C";
		// language.appeared = 1972;
		// language.created = ["Dennis Ritchie"];
		// language.functional = true;
		// language.objectOriented = false;
		// language.relation = {
		// 	influencedBy: ["B", "ALGOL 68", "Assembly", "FORTRAN"],
		// 	influences: [
		// 		"C++",
		// 		"Objective-C",
		// 		"C#",
		// 		"Java",
		// 		"JavaScript",
		// 		"PHP",
		// 		"Go",
		// 	],
		// };
		// console.log(language);
		console.log(globalSlice);
		if (req.params.id != null) {
			const response = globalSlice[req.params.id];
			return res.status(200).send(response);
		} else {
			return res.status(200).send({ globalSlice });
		}
	} catch (error) {
		throw error;
	}
}

export async function postLanguage(req, res) {
	console.log("start get language");
	try {
		const obj = addToGlobalSlice(req);
		return res.status(200).send({ obj });
	} catch (error) {
		throw error;
	}
}

export async function deleteGlobalSlice(req, res) {
	console.log("start delete global slice");
	try {
		const idx = req.params.id;
		const lang = globalSlice[idx];
		if (!lang) {
			return res.status(400).json({
				error: "Request Buruk",
				message: "Tidak ada object yang di temukan",
			});
		}
		globalSlice.splice(idx, 1);
		return res.status(200).json("success menghapus data");
	} catch (error) {
		console.log(error);

		throw error;
	}
}

export async function updateGlobalSlice(req, res) {
	console.log("start update global slice");
	try {
		const idx = req.params.id;
		const lang = globalSlice[idx];
		if (!lang) {
			return res.status(400).json({
				error: "Request Buruk",
				message: "Tidak ada object yang di temukan",
			});
		}
		const newLang = req.body.language;
		const appeared = req.body.appeared;
		const created = req.body.created;
		const functional = req.body.functional;
		const objectOriented = req.body.objectOriented;
		const relation = req.body.relation;

		lang.language = newLang;
		lang.appeared = appeared;
		lang.created = created;
		lang.functional = functional;
		lang.objectOriented = objectOriented;
		lang.relation = relation;

		return res.status(200).json("success update data");
	} catch (error) {
		throw error;
	}
}
