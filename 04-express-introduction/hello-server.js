// we want to create express app

const express = require('express');

const app = express();

app.get("/", function(req, res) {
    res.send('hello homepage');
});

app.get("/about", function(req, res) {
    res.send('hello about page');
});

app.listen(3000, function() {
    console.log('i am now listening on port 3000');
});