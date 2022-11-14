/* eslint-disable consistent-return */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import express from "express";

const PORT = 4000;
const app = express();

const logger = (req, res, next) => {
	console.log(` ${req.method} : ${req.url}`);
	next();
};

// const privateMiddleware = (req, res, next) => {
// 	const url = req.url;
// 	if (url === "/protected") {
// 		return res.send("<h1>Not Allowed</h1>");
// 	}
// 	console.log("Allowed, you may continue. ");
// 	next();
// };

const handleHome = (req, res) => {
	return res.send("I love middleware");
};

// const handleProtected = (req, res) => {
// 	return res.send("Welcom to the private lounge.");
// };

// app.use() : global middlewares
// app.use(logger);
// app.use(privateMiddleware);

app.get("/", logger, handleHome);
// app.get("/protected", handleProtected);

const handleListening = () => {
	console.log("Server listening on port http://localhost:4000");
};

app.listen(PORT, handleListening);
