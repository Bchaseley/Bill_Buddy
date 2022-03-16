const express = require('express');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const app = express();
const port = process.env.PORT || 8000;

global.Models = require("./models");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', `http://localhost:${port}`);
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});
app.use(express.static("./client/build"));
app.use(cors({ credentials: true, origin: "http://localhost:8000/" }));

app.get("/", (req, res) => {
    res.sendFile("./client/build/index.html");
});

require('./routes/app.routes')(app);


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});