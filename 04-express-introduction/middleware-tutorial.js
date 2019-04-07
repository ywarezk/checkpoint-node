// we want to create express app

const express = require('express');

const app = express();

// app.get("/", function(req, res) {
//     res.send('hello homepage');
// });

// app.get("/about", function(req, res) {
//     res.send('hello about page');
// });

// app.get("/home")

// /home
// /home/hello/foo/bar
app.use('/home', function() {

});

// /home
app.all('/home', function() {

})

app.get('/about/:id', function(req, res, next) {
    const id = req.params.id;
    res.send(id);
});

app.get(/[0-9]+/, function(req, res) {
    res.send('you entered a number in the url');
});

app.get(["/about", /[a-z]+/], function() {

});

app.all("*", function(req, res) {
    res.status(404).send('no such page');
})














app.listen(3000, function() {
    console.log('i am now listening on port 3000');
});