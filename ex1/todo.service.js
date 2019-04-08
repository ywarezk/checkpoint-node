/**
 * singleton
 * class get tasks from file
 * add task to file
 */

const path = require('path')
const fs = require('fs');
const promisify = require('util').promisify

class TodoService {
    constructor() {
        this._pathToFile = path.resolve(__dirname, 'todo.json');
    }

    /**
     * get the tasks from the file
     * @returns {Promise<any[]>}
     */
    async getTasks() {
        const readFileAsPromise = promisify(fs.readFile);
        const todoBuffer = await readFileAsPromise(this._pathToFile);
        const todoString = todoBuffer.toString();
        const myArrayAsObjects = JSON.parse(todoString);
        return myArrayAsObjects;
    }

    /**
     * 
     * @param {Promise<any>} todo 
     */
    async addTask(todo) {
        const currentTasksInFile = await this.getTasks();
        currentTasksInFile.push(todo);
        const arrayAsString = JSON.stringify(currentTasksInFile);
        const writeFileAsPromise = promisify(fs.writeFile);
        await writeFileAsPromise(this._pathToFile, arrayAsString);
        return todo;
    }
}

const todoService = new TodoService();

module.exports = todoService;