// (function(module, exports, require, __dirname, __filename) {
    var something = 'sdfsdf';

    function sayHello(msg) {
        console.log(msg);
    }
    
    
    // module.exports = sayHello;
    // module.exports = {}
    // module.exports === exports
    // exports = sayHello;

    // module.exports = {
    //     sayHello: sayHello,
    //     stam: 'foo bar'
    // }

    exports.sayHello = sayHello; // ok
    // exports = sayHello // error!
    //module.exports = sayHello; // good 
    
    const fs = require('fs');
    const fileContent = fs.readFileSync('./README.md');
    //console.log(fileContent.toString());
    
    const lodash = require('lodash')
// })(module, exports, require, __dirname, __filename)



