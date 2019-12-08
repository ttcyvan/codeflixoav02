const { csv2json } = require('./csv2json.js');
const argv = process.argv.slice(2);

csv2json(argv[0]);