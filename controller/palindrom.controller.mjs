export async function validatePalindromText(req, res) {
	console.log("start validate palindrome text");

	try {
		// ambil request parameter
		const request = req.query.text;

		// pattern palindrome tanpa reverse
		const normalText = request.toLowerCase().replace(/[^a-z0-9]/g, "");
		const reverseText = normalText.split("").reverse().join("");

		if (normalText === reverseText) {
			return res.status(200).json("Palindrome");
		} else {
			return res.status(400).json("Not Palindrome");
		}
	} catch (error) {
		console.log(error);

		throw error;
	}
}
