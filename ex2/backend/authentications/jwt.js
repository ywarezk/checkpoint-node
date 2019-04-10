const passport = require('passport');
const PassportJwt = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt

passport.use(new PassportJwt({
    secretOrKey: 'secret',
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken() 
}), function(payload, next) {
    // ... take the users array and find the proper user
    // payload.userId
});