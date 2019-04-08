// we want to create express app

const express = require('express');
const passport = require('passport');
const PassportLocal = require('passport-local').Strategy;
const PassportJwt = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();

const users = [
    {id: 1, email: 'yariv@nerdeez.com', password: '12345678', role: 'guest'},
    {id:2, email: 'yariv@nerdeez.com1', password: '123456781', role: 'user'},
    {id:3, email: 'yariv@nerdeez.com2', password: '123456782', role: 'admin'},
    {id:4, email: 'yariv@nerdeez.com3', password: '123456783', role: 'guest'}
]

passport.use(new PassportLocal(function verifyFunction(email, password, next) {
    // let encryptedPassword = bcrypt(password);
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
        next(null, user);
    } else {
        next(null, false);
    }
}));

passport.use(new PassportJwt({
    secretOrKey: 'some secret text usually in process.env',
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}, function(payload, done) {
    const userId = payload.userId;
    const user = users.find((user) => user.id === userId);
    done(null, user);
}));

app.use(bodyParser.urlencoded());
app.use(passport.initialize());

function myAuthorizationMiddleware(roles) {
    return function(req, res, next) {
        if (roles.indexOf(req.user.role) === -1) {
            res.status(403).send('unauthorized');
        } else {
            next();
        }
    }
}

app.get('/api/users/', 
    passport.authenticate('jwt', {session: false}) ,
    myAuthorizationMiddleware(['user', 'admin']),
    function(req, res) {
        res.json(users);
    }
);

app.route('/login')
    .get(function(req, res) {
        res.send(`
            <form method="post" action="/login">
                <input type="email" name="username" placeholder="email" />
                <input type="password" name="password" placeholder="password" />
                <button type="submit">Login</button>
            </form>
        `)
    })
    .post(passport.authenticate('local', {session: false}), function(req, res) {
        
        // in here we need to authenticate the user
        // req.user => {id: 1, email: 'yariv@nerdeez.com', password: '12345678'}

        // we want to create JWT token
        const token = jwt.sign({
            userId: req.user.id
        }, 'some secret text usually in process.env')
        res.send(token);
    });

app.listen(3000, function() {
    console.log('i am now listening on port 3000');
});