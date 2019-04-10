const passport = require('passport');
const PassportLocal = require('passport-local').Strategy;

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