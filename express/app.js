const http = require('http')

const server = http.createServer((req, res) => {
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1> hello this is the home page</h2>')
        res.end()
    }
)
server.listen(5000)