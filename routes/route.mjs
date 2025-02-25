import express from "express";
import {
	getLanguage,
	postLanguage,
	deleteGlobalSlice,
	updateGlobalSlice,
} from "../controller/language.controller.mjs";
import { validatePalindromText } from "../controller/palindrom.controller.mjs";

const app = express.Router();

//function untuk handle method tidak di perbolehkan
function methodNotAllowed(req, res) {
	res.status(405).set("Allow", "GET").json("Method Not Allowed");
}
app
	.route("/language")
	.get(getLanguage)
	.post(postLanguage)
	.all(methodNotAllowed);

app
	.route("/language/:id")
	.get(getLanguage)
	.delete(deleteGlobalSlice)
	.patch(updateGlobalSlice)
	.all(methodNotAllowed);

app.get("/", (req, res) => {
	res.status(200).send("Hello Go developers");
});

app.get("/palindrome", validatePalindromText);

app.all("*", (req, res) => {
	res.status(400).json({
		error: "tidak di temukan",
		message: "api yang anda hit tidak di temukan",
	});
});
export default app;
