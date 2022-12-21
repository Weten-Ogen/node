
 export const {readFileSync, writeFileSync} = require('fs')

const file = readFileSync('./context/first.txt', 'utf8')
const filee = readFileSync('./context/second.txt', 'utf8')


const result = writeFileSync('./context/result.txt', 'this is the the result of the writefileSync', {flag : 'a'})

console.log(result)
console.log(file)
console.log(filee)

const readresult = readFile('./context/result.txt', 'utf8',(err, result) => {
    if(err) {
        console.log(err)
        return;
    }
    console.log(result);
    return result;
})


console.log(writeresult)
const {readFile , writeFile } = require('fs')
console.log('Starting ')


const writeresult = readFile('./context/result.txt', 'utf8',(err, result) => {
    if(err) {
        console.log(err)
        return;
    }
    const second = result;
    writeFile('./context/second-result.txt', 'this is my last file', (err,result) => {
        if (err){
            console.log(err);
            return ;
        }
        console.log('Well Done !')
        return result;

    })
})


console.log('Starting the next one')