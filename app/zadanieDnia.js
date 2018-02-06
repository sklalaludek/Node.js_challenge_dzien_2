//Twój kod
const fs = require('fs');

let fileName = process.argv.slice(2);

fs.readFile(`${fileName[0]}`, 'utf8', (error, data) => {
    if (error === null) {
        let newData = data.split('').map((char, i) => i % 2 === 0 ? char.toUpperCase() : char.toLowerCase());
        newData = newData.join('');
        fs.writeFile(`${fileName[0]}`, newData, error => {
            if (error === null) {
                console.log('Poprawnie zapisano i odczytano plik.', newData);
            } else {
                console.log('Błąd podczas zapisu pliku!', error);
            }
        });
    } else {
        console.log('Błąd podczas odczytu pliku!', error);
    }
});
