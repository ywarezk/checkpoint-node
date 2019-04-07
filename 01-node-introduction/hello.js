
function sayHello(msg) {
    debugger;
    console.log(msg);
}

sayHello('hello world in function');



setTimeout(function() {
    console.log('hello timer');
}, 1000);

// performance
// https://medium.com/@mihaigeorge.c/web-rest-api-benchmark-on-a-real-life-application-ebb743a5d7a3