// we want to create express app

const express = require('express');
const userRouter = require('./users-router');

const app = express();

// app.get('/users', ...)
// app.get('/users/login', ...)
// app.get('/users/register', ...)

app.use('/users', userRouter);

app.listen(3000, function() {
    console.log('i am now listening on port 3000');
});