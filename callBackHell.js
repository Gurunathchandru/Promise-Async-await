const fs = require('fs');
const superagent = require('superagent');

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
    if (err) return console.log(err.message);
    const breed = data.toString().trim(); // Convert Buffer to string and trim any extra whitespace
    console.log(`Breed : ${breed}`);

    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
    .end((err, res) => {
        if (err) return console.log(err.message);
        console.log(res.body);

        fs.writeFile('dog-img.txt', res.body.message, err => {
            if (err) return console.log(err.message);
            console.log(res.body.message);
        });
    });
});
