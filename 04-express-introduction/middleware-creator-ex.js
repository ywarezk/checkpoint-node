// we want to create express app

const express = require('express');

const app = express();

// middleware creator

// I have middleware that i need to reuse in many express apps
// function(req, res, next) {
//     // dynamic variable    
// }

// middleware creator
// function that returns a middleware
function myMiddleware(dynamicArgs) {
    return function(req, res, next) {
        // I can use dynamicArgs
    }
}

app.get("/about", myMiddleware("hello"));

// middleware that returns response msg


function myMessageMiddleware(msg) {
    return function(req, res, next) {
        res.send(message);
    }
}

app.get("/message", myMessageMiddleware("send this message"));

app.get("/about", myMessageMiddleware("another message"));






app.listen(3000, function() {
    console.log('i am now listening on port 3000');
});