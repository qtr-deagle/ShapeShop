const express = require("express");
const app = express();
const port = 3333;

const cors = require("cors");
const bodyParser = require("body-parser");
const { sqlconnect } = require("./models/db");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log("Attempting to connect to the database...");
    sqlconnect()
        .then(() => console.log("Connected to the database"))
        .catch((err) => console.error("Database connection failed:", err));
});