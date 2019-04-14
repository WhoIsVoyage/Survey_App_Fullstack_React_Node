const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send({ res: "Hello, World!" });
});

app.listen(5000);
