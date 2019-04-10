const assert = require('assert');
const app = require('../app.js');
const Task = require('../models').task;
const axios = require('axios');
const jwt = require('jsonwebtoken');
// var mocha = require('mocha')
// var describe = mocha.describe;

// function zogiAssert(value) {
//     if (value % 2 === 1) {
//         throw assert.AssertionError();
//     } 
// }

describe('todo api', function() {
    let server;

    // before(function() {...});
    // after(function() {...});
    // beforeEach(function() {...});
    // afterEach(function() {...});

    // activate my rest server
    before(function(next) {
        server = app.listen(3001, function() {
            console.log('listening on port 3000');
            next();
        });
    });

    // remove all rows from the table
    beforeEach(async function() {
        await Task.destroy({
            where: {}
        });
    })

    // place 3 rows in the table
    beforeEach(async function() {
        await Task.bulkCreate([
            {id: 1, title: 'aaa', when: new Date()},
            {id: 2, title: 'aaa', when: new Date()},
            {id: 3, title: 'aaa', when: new Date()},
        ]);
    })

    it("hello world", function() {
        assert.strictEqual('hello world', 'hello world');
    });
    
    // we want to test the todo api
    it('test that our authentication is working', async function() {
        try {
            const response = await axios.get('http://localhost:3001/api/task/');
            assert.strictEqual(response.status, 401);
        } catch(err) {
            assert.strictEqual(err.response.status, 401);
        }
    });

    it('with jwt i get response', async function() {
        const token = jwt.sign({
            userId: 1
        }, 'secret');
        const response = await axios.get('http://localhost:3001/api/task/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        assert.strictEqual(response.status, 200);
    });

    after(function(next) {
        server.close(function() {
            next();
        })
    })

})


