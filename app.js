const path = require('path')
const fs = require('fs');
const http = require('http');
const url = require('url')

const server = http.createServer((request, response) => {
    if(request.url == '/'){
        let filepath = path.join(__dirname, 'public', 'index.html')
        fs.readFile(filepath, 'utf8', (err, data) => {
            response.writeHead(200, {'Content_Type': 'text/html'})
            response.end(data)
        })
    }

        if(request.url == '/index.html'){
            let filepath = path.join(__dirname, 'public', 'index.html')
            fs.readFile(filepath, 'utf8', (err, data) => {
                response.writeHead(200, {'Content_Type': 'text/html'})
                response.end(data)
            })
    }
    if(request.url == '/about.html'){
        let filepath = path.join(__dirname, 'public', 'about.html')
        fs.readFile(filepath, 'utf8', (err, data) => {
            response.writeHead(200, {'Content_Type': 'text/html'})
            response.end(data)
        })
    }

    if(request.url == '/contact.html'){
        let filepath = path.join(__dirname, 'public', 'contact.html')
        fs.readFile(filepath, 'utf8', (err, data) => {
            response.writeHead(200, {'Content_Type': 'text/html'})
            response.end(data)
        })
    }
   
    
})

const port= 5000

server.listen(port, ()=> {
    console.log('server is running on port 5000')
})

