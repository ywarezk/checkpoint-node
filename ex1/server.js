const express = require('express');
const todoService = require('./todo.service');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// /api/task/

// ?key=value&key2=hello
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(
    '/assets', 
    express.static(path.resolve(__dirname, 'assets'))
);

app.route('/api/task/')
    .get(async function(req, res) {
        const todoArray = await todoService.getTasks();
        res.json(todoArray);
    })
    .post(async function(req, res) {
        // {key: value}
        const todo = await todoService.addTask(req.body);
        res.json(todo);
    });

// app.get('/api/task/', function() {...})
// app.post('/api/task/', function() {...})

app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'assets/index.html'));
})







app.listen(3000, function() {
    console.log('we are now listening on port 3000');
})