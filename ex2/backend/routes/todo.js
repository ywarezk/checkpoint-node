const express = require('express');

const todoRouter = express.Router()

todoRouter.use('', passport.authenticate('jwt', {session: false}));
todoRouter.get('', function(req, res) {
    res.json([
        {id: 1, title: 'aaa'},
        {id: 2, title: 'bbb'},
        {id: 3, title: 'ccc'},
        {id: 4, title: 'ddd'},
        {id: 5, title: 'eee'},
    ])
})

module.exports = todoRouter;