const { EventEmitter } = require('events');

function withArgs(Arrnames) {
    let monevent = new EventEmitter();

    monevent.on('newFellow', (names) => {
        if (typeof names == 'string') {
            console.log(`Here come's on new pirate ->> ${names}`)
        } else if (Array.isArray(names)) {
            for (const arr of names) {
                console.log(`Here come's on new pirate ->> ${arr}`)
            }

        } else {
            console.log(`Here sorry c'est un ${typeof names}`)
        }
    });

    monevent.emit('newFellow', Arrnames)
}

module.exports = {
    withArgs
}