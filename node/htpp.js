const http = require('http')

const server = http.createServer( (req, res) => {
    if(req.url === '/'){
        res.write('Welcome to my home page\n')
        res.end()
    }
    if(req.url === '/about'){
        res.write('welcome to the about page')
        res.end()
    }
    if(req.url === '/you'){
        res.write ('We are the best \n ')
        res.end()
    }
    else{
        res.end(`
        <h1>OOPs </h1>
        <p> Can't is not found</p>
        <a href="/">back home</a>
        `)
    }
})

server.listen(5000)