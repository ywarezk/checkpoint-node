/**
 * create a new user
 * createe user settings
 * associate the user settings with the user
 * grab the user from the user settings instance
 */

const User = require('./models').user;
const UserSettings = require('./models').userSettings;

async function one2One() {
    const user1 = await User.create({firstName: 'Yariv', lastName: 'Katz'});
    const userSettings = await UserSettings.create({isMails: true, userId: user1.id});
    debugger;
}

one2One();