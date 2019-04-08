// we want to create express app

const express = require('express');
const passport = require('passport');
const PassportLocal = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();



const users = [
    {id: 1, email: 'yariv@nerdeez.com', password: '12345678'},
    {id:2, email: 'yariv@nerdeez.com1', password: '123456781'},
    {id:3, email: 'yariv@nerdeez.com2', password: '123456782'},
    {id:4, email: 'yariv@nerdeez.com3', password: '123456783'}
]

passport.use(new PassportLocal(function verifyFunction(email, password, next) {
    // let encryptedPassword = bcrypt(password);
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
        next(null, user);
    } else {
        next(null, false);
    }
}))

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
  
passport.deserializeUser(function(id, done) {
    const user = users.find((user) => user.id === id);
    if (user) {
        done(null, user);
    } else {
        done(null, false);
    }
});

app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({
    secret: 'sadfsdf'
}));
app.use(passport.initialize());
app.use(passport.session());

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
    .post(passport.authenticate('local', {session: true}), function(req, res) {
        
        // in here we need to authenticate the user
        // req.user => {id: 1, email: 'yariv@nerdeez.com', password: '12345678'}
        res.send(req.user.id.toString());
    })

app.get('/admin', function(req, res) {
    // go to this route
    // only if im authenticated with the session
    if (req.user){
        res.send('you are authenticated');
    } else {
        res.status(401).send('Unauthorized');
    }
        
});

app.listen(3000, '0.0.0.0', function() {
    console.log('i am now listening on port 3000');
});