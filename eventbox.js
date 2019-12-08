//var event = require('events');
const { EventEmitter } = require('events'); // on appelle la methode eventemitter de la function

function empty() {
    //const myemmitter = new event();
    const myemmitter = new EventEmitter(); // on instancie le eventemitter

    myemmitter.on('hi', function() {
        console.log('hello world')
    });

    myemmitter.emit('hi');
}

module.exports = {
    //empty : test,
    empty
};