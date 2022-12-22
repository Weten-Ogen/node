const eventEmitter = require('events');

const customEmitter = new eventEmitter();

customEmitter.on('response',() =>{
    console.log(`data received `)
})

customEmitter.on('response',() =>{
    console.log(`data received `)
})
customEmitter.on('response',() =>{
    console.log(`data  is received `)
})
customEmitter.on('response',() =>{
    console.log(`data are received `)
})
customEmitter.on('response',() =>{
    console.log(`data  `)
})
customEmitter.on('response',(n,i) =>{
    console.log(`data  on received ${n, i} `)
})
customEmitter.on('response',(n) =>{
    console.log(`data  you received ${n}`)
})


customEmitter.emit('response', "John",35)


const http = require('http')

const server = http.createServer()

server.on('request',(res,req) => {
res.end('Welcome')
})

server.listen(4003)