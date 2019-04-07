
// utitlities for appending the file system
const path = require('path');
const fs = require('fs');

// __dirname => folder
console.log(__dirname + '/README1.md');
// if (linux) {
//     __dirname + '/README1.md'
// } else {
//     __dirname + '\\README1.md'
// }
fs.readFile(path.resolve(__dirname,'README1.md'), function(err, data) {
    console.log(data.toString());
})









