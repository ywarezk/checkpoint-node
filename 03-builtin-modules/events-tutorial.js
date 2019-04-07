
// EventEmitter is used to send custom events
const EventEmitter = require('events').EventEmitter;

// every second send hello world
const myHelloEvents = new EventEmitter();

myHelloEvents.on('hello', function(msg, num) {
    console.log(msg);
});

myHelloEvents.on('hello', function(msg) {
    console.log(msg.length);
});

myHelloEvents.on('error', function(err) {
    console.log(err.message);
})

setInterval(function() {
    myHelloEvents.emit('hello', 'hello world'/*new Error('hello')*/)
}, 1000);

setTimeout(function() {
    myHelloEvents.emit('error', new Error('say something'))
}, 3000);

class Chat extends EventEmitter {
    constructor() {
        super();
        this.messages = [];
    }

    /**
     * if the event is chat i want to save the message
     * @param {String} eventName 
     * @param {*} args 
     */
    emit(eventName, ...args) {
        if (eventName === 'chat') {
            this.messages.push(args[0]);
        }
        super.emit(eventName, ...args);
    }

}

















