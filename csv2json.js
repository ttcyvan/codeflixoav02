let fs = require('fs');
let path = require('path');

function csv2json(filename) {
    const ext = path.extname(filename)
    const firt = path.basename(filename, ext);

    const newFile = `${firt}.json`;

    let read = fs.createReadStream(firt)
    let copie = fs.createWriteStream(newFile)

    read.pipe(copie)


    copie.on('finish', () => {
        console.log('fichier finis')
    })

    return JSON.stringify(filename)
}

module.exports = {
    csv2json
}