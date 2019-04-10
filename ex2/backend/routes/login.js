
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');


const loginRouter = express.Router();

// /api/login/
loginRouter.post('', 
    passport.authenticate('local', {session: false}), 
    function(req, res, next) {
        res.json({
            token: jwt.sign({userId: req.user.id}, 'secret')
        })
    }
)

module.exports = loginRouter;