// we want to create express app

const express = require('express');

const app = express();

app.use(function(req, res, next) {
    req.message = 'hello world';
    next();
});

app.get('*', function(req, res, next) {
    res.send(req.message);
})

app.listen(3000, function() {
    console.log('i am now listening on port 3000');
});