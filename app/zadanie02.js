//Twój kod
const fs = require('fs');

fs.readdir('./data/zadanie02/', (error, files) => {
    if (error === null) {
        console.log('Lista plików:');
        files.forEach(file => {
            console.log(file);
            fs.readFile(`./data/zadanie02/${file}`, 'utf8', (error, data) => {
                if (error === null) {
                    console.log('Zawartość pliku: ', data);
                } else {
                    console.log('Błąd podczas odczytu pliku!', error);
                }
            });
        });
    } else {
        console.log('Błąd podczas listowania katalogu!', error);
    }
});
