const p = new Promise((res,rej) => {
   const success = true; 
    if(success){
        res("pass");
    }else{
        rej("failed")
    }
});

p.then((value) =>{
    console.log(value);
}).catch(e =>{
    console.log(e);
});