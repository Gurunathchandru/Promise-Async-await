const fs = require('fs');
const superagent = require('superagent');

const readfilePro = file => {
       return new Promise((resolve,reject) => {
        fs.readFile(file,(err,data) => {
            
            if(err) reject("i could not read from the file");
            resolve(data);
        })
       })
    }

 const writeFilePro =  (file,result ) =>{
    return new Promise((resolve,reject ) => {
        fs.writeFile(file,result,err=>{
            if(err) reject("could not wirte");
            resolve("success");
        })
    })
 };




readfilePro(`${__dirname}/dog.txt`)
       .then(data => {
        console.log(`Breed:${data}`);
        return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
        })
        .then(res => {
            console.log(res.body.message);
            return writeFilePro('dog-img.txt',res.body.message);
        })
        .then(() =>{
            console.log('random dog imag is saved to file');
        })
        .catch(error =>{
            console.log(error);
        });
