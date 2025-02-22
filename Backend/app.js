const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000

app.get("/", (req, res) => res.send("Working!"));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));