//Twój kod
const fs = require('fs');

fs.readFile('./data/zadanie01/input.json', 'utf8', (error, data) => {
    if (error === null) {
        const txt = JSON.parse(data).reduce((a,b) => {
            return a + b;
        });
        fs.writeFile('./data/zadanie01/sum.txt', txt, error => {
            if (error === null) {
                console.log('Poprawnie zapisano i odczytano plik.', txt);
            } else {
                console.log('Błąd podczas odczytu pliku!', error);
            }
        });
    } else {
        console.log('Błąd podczas odczytu pliku!', error);
    }
});
