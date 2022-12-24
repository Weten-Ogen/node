const http = require('http')
const { readFileSync } = require('fs')


// Get all the files 
const homePage  = readFileSync('./navbar/index.html')
const aboutPage = readFileSync('./navbar/about.html')
const styles = readFileSync('./navbar/styles.css')


const server = http.createServer((req, res) => {

        const url = req.url
        if(url === '/'){
            res.writeHead(200,{'content-type':'text/html'})
            res.write(homePage)
            res.end()
        }
        else if(url === '/about'){
            res.writeHead(200,{'content-type': 'text/html'})
            res.write(aboutPage)
            res.end()
        }
        else if(url === '/styles.css'){
            res.writeHead(200,{'content-type': 'text/css'})
            res.write(styles)
            res.end()
        }
        else{
            res.writeHead(404,{'content-type': 'text/html'})
            res.write("<h1>Page Not found</h1>")
            res.end()
        }
    }
)
server.listen(5000)