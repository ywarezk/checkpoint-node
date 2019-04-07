// we want to create express app

const express = require('express');

const app = express();

const path = require("path");
app.use(
    "/public", 
    express.static(path.resolve(__dirname, "assets"))
);

// /public/logo.jpg

app.listen(3000, function() {
    console.log('i am now listening on port 3000');
});