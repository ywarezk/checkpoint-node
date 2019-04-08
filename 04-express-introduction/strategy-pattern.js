// we want to create express app

const express = require('express');
const session = require('express-session');
const SessionStore = require('session-file-store');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const bodyParser = require('body-parser');

const app = express();
var csrfProtection = csrf({ cookie: true })


app.use(bodyParser.urlencoded());
// Strategy pattern

class AbstractStrategy {
    log(req) {
        throw new Error('not implemented');    
    }
}

class OurLogStrategy extends AbstractStrategy {
    log(req) {
        console.log(req.path);
    }
}

function ourLogMiddleware(strategy) {
    return function(req, res, next) {
        strategy.log(req);
        next()
    }
}

app.use(cookieParser());

// app.use(ourLogMiddleware(new OurLogStrategy()));

app.use(session({
    secret: 'some secret usually stored in process.env',
    // i should change that on production
    // store: new SessionStore()
}));

// app.get('/', function(req, res) {
//     req.session.message = 'hello from session';
//     res.send('hello session');
// })

app.get('/login', function(req, res) {
    req.session.isLoggedIn = true;
    res.send('you are now logged in');
})

app.get('/admin', csrfProtection, function(req, res) {
    if (!req.session.isLoggedIn) {
        res.status(401).send('you are not logged in');
        return;
    }
    // i will send secret token in the cookies
    res.send(`
        <form method="post" action="/process">
            <h1>some sort of secret form that has to be submitted from my site</h1>
            <input name="message" placeholder="message" />
            <input type="hidden" name="_csrf" value="${req.csrfToken()}" />
        </form>
    `);
    // res.send(`hello session message ${req.session.message}`);
})

app.post('/process', csrfProtection, function(req, res) {
    // i want to verify that the request
    // i got here is from my server and not from evil.com
    res.send('processed');
})

app.get('/stam', function(req, res, next) {
    next();
}, function(req, res, next) {
    next()
}, function(req, res, next) {

});

//app.get('/stam', [function() {}, function() {}])

app.listen(3000, function() {
    console.log('i am now listening on port 3000');
});