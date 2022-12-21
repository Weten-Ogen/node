const path = require('path')

const filepath = path.join('context', '/subfolder/','text.txt')

console.log(filepath)
const pp = path.resolve(__dirname,'context','subfolder','text')
console.log(pp)