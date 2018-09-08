const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    console.log(req.body);
});

app.listen(3000, (err) => {
    if (err) {
        return console.log("Error!");
    }
    console.log("Server has started");
});

module.exports = app;
