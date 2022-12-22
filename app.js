const {createReadStream} = require('fs');

const stream = createReadStream('./context/big.txt',{highWaterMark:90000})

stream.on('data', (result) =>{
    console.log(result);
})