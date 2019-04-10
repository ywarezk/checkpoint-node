
const User = require('./models').user;
const Task = require('./models').task;

async function one2Many() {
    const user1 = await User.create({firstName: 'Yariv', lastName: 'Katz'});

    const task1 = await Task.create({title: 'aaa', when: new Date()});
    const task2 = await Task.create({title: 'bbb', when: new Date()});
    const task3 = await Task.create({title: 'bbb', when: new Date()});

    await user1.setTasks([task1, task2, task3]);
    const tasks = await user1.getTasks();
}

one2Many();