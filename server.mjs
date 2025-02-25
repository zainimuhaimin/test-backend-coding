import express from "express";
import route from "./routes/route.mjs";
import "dotenv/config";
const app = express();
// set port
const PORT = process.env.PORT || 8087;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});

// catch request body json
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// use route
app.use(route);
