//const empty = require('./eventbox.js');
const { empty } = require('./eventbox.js');
const { withArgs } = require('./withargs.js');
const { MyEventEmitter } = require('./myeventemiter.js');
const em = new MyEventEmitter();

empty();
withArgs("bondddd");
withArgs(444);
withArgs(["bon", "dddd"]);

em.on('hi', (firt, last) => {
    console.log(`hi, ${firt} ${last} `);
})
em.on('deux', () => {
    console.log('hello world');
})

const unsusbcribe = em.on('deux', () => {
    console.log('hello world');
})

em.emit('deux')

em.emit('hi', 'firt', 'last');

em.emit('unknown');
unsusbcribe();