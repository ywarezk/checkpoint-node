
const Tag = require('./models').tag;
const Task = require('./models').task;

async function one2Many() {
    const tag1 = await Tag.create({title: 'cleaning'}); // id: 1
    const tag2 = await Tag.create({title: 'buying'}); // 2
    const tag3 = await Tag.create({title: 'piglet'}); //3

    const task1 = await Task.create({title: 'aaa', when: new Date()}); // 1
    const task2 = await Task.create({title: 'bbb', when: new Date()}); // 2
    const task3 = await Task.create({title: 'bbb', when: new Date()}); // 3

    

    await tag1.setTasks([task1, task2]);
    await task1.setTags([tag2, tag3]);
    await task1.setTags([tag1]);
    debugger;

    // tagTask
    // tagId  |  taskId
    //   1          1
    //   1          2
    //   2          1
    //   3          1

    // await user1.setTasks([task1, task2, task3]);
    // const tasks = await user1.getTasks();
}

one2Many();