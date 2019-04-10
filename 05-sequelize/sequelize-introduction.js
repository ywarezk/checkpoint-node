


const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL);

sequelize.authenticate().then(function () {
    console.log('we are connected to the database');
}, function () {
    console.log('Failed to connect!');
});

// model that will map the tasks

const path = require('path');

// const Task = sequelize.import(path.resolve(__dirname, 'task.js'));


// async function someQueries() {

//     // run some queries on the database
//     await Task.sync({ force: true });

//     const task = await Task.create({ title: 'hello', description: 'foo bar', time: new Date() });
//     const task1 = await Task.create({ title: 'hello1', description: 'foo bar2', time: new Date() });
//     const task2 = await Task.create({ title: 'hello2', description: 'foo bar3', time: new Date() });

//     const tasks = await Task.findAll();
// }

// someQueries();

const Task = sequelize.import(path.resolve(__dirname, 'task.js'));
const User = sequelize.import(path.resolve(__dirname, 'user.js'));
const UserSettings = sequelize.import(path.resolve(__dirname, 'user-settings.js'));
const Tag = sequelize.import(path.resolve(__dirname, 'tag.js'));
const TagTask = sequelize.import(path.resolve(__dirname, 'tag-task.js'));
const Comment = sequelize.import(path.resolve(__dirname, 'comment.js'));


//User.hasOne()

// tasks table => userId
// User.hasMany(Task);
// Task.belongsTo(User)

// async function createUserAndSettings() {
//     // in user settings table => userId
//     UserSettings.belongsTo(User);

//     await sequelize.sync({ force: true });

//     const user = await User.create({ firstName: 'yariv', lastName: 'katz' });
//     const userSettings = await UserSettings.create({ isEmail: true });
//     await userSettings.setUser(user);

//     const catchTheUser = await UserSettings.findOne({
//         where: {
//             id: 1
//         }
//     });
//     debugger;
// }

// createUserAndSettings();




// async function m2mExample() {


//     Task.belongsToMany(Tag, {
//         through: {
//             model: TagTask
//         }

//     });
//     Tag.belongsToMany(Task, {
//         through: {
//             model: TagTask
//         }
//     });

//     await sequelize.sync({ force: true });

//     const task = await Task.create({ title: 'hello', description: 'foo bar', time: new Date() });

//     const tag1 = await Tag.create({ title: 'cooking' });
//     const tag2 = await Tag.create({ title: 'cleaning' });

//     // tag1.setTasks([])
//     await task.setTags([tag1, tag2]);
//     debugger;
// }

// m2mExample()


async function genericForeignKey() {

    // Comment.belongsToMany(User, {
    //     through: {
    //         model: CommentUserTask,
    //         scope: {

    //         }
    //     }
    // })

    // userId
    Comment.belongsTo(User, {
        foreignKey: 'userOrTaskId',
        constraints: false,
    });

    User.hasMany(Comment, {
        foreignKey: 'userOrTaskId',
        constraints: false,
        scope: {
            tableName: 'user'
        }
    })

    // taskId
    Comment.belongsTo(Task, {
        foreignKey: 'userOrTaskId',
        constraints: false,
    });

    Task.hasMany(Comment, {
        foreignKey: 'userOrTaskId',
        constraints: false,
        scope: {
            tableName: 'task'
        }
    })

    await sequelize.sync({ force: true });

    const user = await User.create({ firstName: 'yariv', lastName: 'katz' });

    await user.createComment({ title: 'asfdsdf' });

    debugger;

}

genericForeignKey();
