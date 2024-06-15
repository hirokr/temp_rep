const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req )
    if(req.url === "/"){
        res.end('Welcome to our home page')
    }
    
    else if(req.url === "/about"){
        res.end('Hi I am Rahul')
    }
    else{
    res.end(`
        <h1>Oops!</h1>
        <p> Page Not found </p>
        <a href = "/"> Home </a>
    `)}
})

server.listen(5000);