/**
 * Grab the user model
 * CRUD from the table
 */

const User = require('./models').user;

async function crudTutorial() {
    // create
    const user1 = await User.create({firstName: 'Yariv', lastName: 'Katz'});

    // update
    user1.firstName = 'foo bar';
    await user1.save();

    // find
    let users = await User.findAll();

    // delete
    await user1.destroy();

    // find again
    users = await User.findAll();
}

crudTutorial();