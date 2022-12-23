const express = require('express');
const path = require('path')


const app = express()


// app.use

app.use(express.static('./public'))
// app.get
app.get('/',(req,res) =>{
    res.sendFile(path.resolve(__dirname, './navbar/index.html'))
})

app.get('/about', (req,res) =>{
    res.status(200).send('about page')
})

// app.listen
// app.put
// app.delete
// app.all
app.all("*",(req,res) =>{
    res.status(404).send("<h1>the resource doesn't exit or you entered a wrong url </h1>")
})
// app.post

app.listen(5000, () => {
    console.log('the server is listenning ... ')
})