
// learn to write async code professionally

const fs = require('fs');

try {
    fs.readFile('hellosdfsdf.txt', function(err, data) {
        if (err) {
            //throw err;
        } else {
            console.log('finished reading');
            console.log(data.toString());
        }
        
    });
} catch(err) {
    console.log(err.message);
}


console.log('we will go out of the try catch');

// error first callback

function myAsyncFunction(msg, cb) {
    setTimeout(function() {
        cb(new Error('something happend'));
        cb(null, msg.length);
    } , 1000);
}

// solve async problems => Promise

function myAsyncFunction2(msg) {
    
    const myTimerPromise = new Promise(
        function(resolve, reject) {
        // my async code will be in this function
            setTimeout(function() {
                // resolve(msg);
                reject(new Error('something happend'))
            }, 1000)
        }
    );
    return myTimerPromise;
}

const myMessagePromise = myAsyncFunction2('hello promise');

// newPromise : Promise<number | boolean>
const newPromise = myMessagePromise.then(
    function(msg) {
        return msg.length;
    },
    function(err) {
        console.log(err.message);
        //return true;
        throw new TypeError('invalid type');
    }
);

newPromise.then(function(numberOrBoolean) {

}, function(err) {
    // will this be called? 
})





myMessagePromise
    .then(function() {

    })
    .catch(function(err) {

    })
    .then(function() {

    })
    .then(function() {

    })
    .catch(function(err) {

    })

async function myAsyncFunction3() {
    try {
        const msg = await myMessagePromise;
        const anotherPromise = await anotherPromise;
    } catch(err) {

    }
    return 10;
    
}

// stam : Promise<number>
const stam = myAsyncFunction3();

function myAsyncService(myArgs) {
    return new Promise(...)
}

const fsPromise = require('fs').promises;

const promiseWithContentOfFile = fsPromise.readFile('hello.txt');

promiseWithContentOfFile.then((data) => {

})

// return Promise
// await promise
async function readPromise() {
    const contentOfFile = await promiseWithContentOfFile;
    fs.readFile
}

const util = require('util');

const readFileTheReturnsPromise = util.promisify(fs.readFile)


























































