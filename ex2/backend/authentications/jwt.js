const passport = require('passport');
const PassportJwt = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt

const users = [
    {id: 1, email: 'yariv@nerdeez.com', password: '12345678'},
    {id:2, email: 'yariv@nerdeez.com1', password: '123456781'},
    {id:3, email: 'yariv@nerdeez.com2', password: '123456782'},
    {id:4, email: 'yariv@nerdeez.com3', password: '123456783'}
]

passport.use(new PassportJwt({
    secretOrKey: 'secret',
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken() 
}, function(payload, next) {
    // ... take the users array and find the proper user
    // payload.userId
    const user = users.find((user) => user.id === payload.userId);
    if (user) {
        next(null, user);
    } else {
        next(null, false);
    }
}));