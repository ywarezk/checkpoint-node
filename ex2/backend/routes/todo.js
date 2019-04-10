const express = require('express');
const Task = require('../models').task;
const passport = require('passport');

const todoRouter = express.Router()

todoRouter.use('', passport.authenticate('jwt', {session: false}));

todoRouter.get('', async function(req, res) {
    const tasks = await Task.findAll();
    res.json(tasks);
});

todoRouter.post('', async function(req, res) {
    const task = await Task.create(req.body);
    res.json(task);
});

todoRouter.put('/:id', async function(req, res) {
    const task = await Task.findByPk(req.params.id);
    await task.save(req.body);
    res.json(task);
})

module.exports = todoRouter;