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
const getDogPic = async () => {
    try{ 
    const data = await readfilePro(`${__dirname}/dog.txt`);
    console.log(`Breed : ${data}`);

    const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    console.log(res.body.message);

    await writeFilePro('dog-img.txt',res.body.message);
    console.log("random dog image saved to the file");
    }catch(error) {
        console.log(error);
    }
}
console.log("1:will get dog pic");
getDogPic();
console.log("2:will get dog pic");
