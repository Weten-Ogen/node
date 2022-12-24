
const getText = (path) =>{
    return new Promise((resolve, reject) =>{
        readFile(path,'utf-8',(err, data)=>{
            if (err){
               reject(err) 
            }
            else{
                resolve(data)
               console.log(data)
            }
       })
    })
}

// getText('./context/second-result.txt').
// then(result => console.log(result))
// .catch(err => console.log(err))
const {readFile , writeFile} = require('fs')
const util = require('util');

const readProm = util.promisify(readFile);
const writeProm = util.promisify(writeFile);



const start = async() => {
    try{
        const first = await readProm('./context/second-result.txt','utf8')
        const second = await readProm('./context/first.txt','utf8')

        await writeProm('./context/app.txt', `THis is awesome ${first} ${second}`,{flag: 'a'})
        console.log('starting async / await')
        console.log(first, second);
    }
   catch(err){
        console.log(err);
   }
    
}

start();