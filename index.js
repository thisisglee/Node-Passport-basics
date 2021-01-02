// console.log("hello from Node.js...")
// const Person = require('./Person')

// Person1 = new Person('Gurleen Singh', 22)

// Person1.greeting();

////////////////////////////////////////////////////////////////////
// const Logger = require('./logger')

// const logger = new Logger()

// logger.on('message', data => console.log('Called Listene', data))

// logger.log('Hello World')

////////////////////////////////////////////////////////////////////
const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
    // if(req.url === '/'){
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if(err) throw err
    //         res.writeHead(200, {'Content-Type': 'text/html'})
    //         res.end(content)
    //     })        
    // }
    // if(req.url === '/about'){
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if(err) throw err
    //         res.writeHead(200, {'Content-Type': 'text/html'})
    //         res.end(content)
    //     })        
    // }
    // if(req.url === '/api/users'){
    //     const users = [
    //         { name: 'Bob Smith', age: 40},
    //         { name: 'Will Smith', age: 44},
    //         { name: 'Jaden Smith', age: 20},
    //     ]  
    //     res.writeHead(200, {'Content-Type': 'application/json'})
    //     res.end(JSON.stringify(users))  
    // }

    //Build filepath dynamic
    let filePath = path.join(__dirname,'public', req.url === '/' ? 'index.html' : req.url)

    // console.log(filePath)
    // res.end()

    //Extension of file
    let extname = path.extname(filePath)

    //Inital content Type
    let contentType = 'text/html'

    //check ext and set content type
    switch(extname){
        case '.js':
            contentType = 'text/javascript'
            break
        case '.css':
            contentType = 'text/css'
            break
        case '.json':
            contentType = 'application/json'
            break
        case '.png':
            contentType = 'image/png'
            break
        case '.jpg':
            contentType = 'image/jpg'
            break
    }

    // Check if contentType is text/html but no .html file extension
    if (contentType == "text/html" && extname == "") filePath += ".html";

     // log the filePath
    console.log(filePath);

    // Read file
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code = 'ENOENT'){
                //Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err,content) => {
                    res.writeHead(404, {'Content-Type': 'text/html'})
                    res.end(content, 'utf8')
                } )
            } else {
                // some server error
                res.writeHead(500)
                res.end(`Server Error: ${err.code}`)
            }
        } else {
            // Successful response
            res.writeHead(200, {'Content-Type': contentType})
            res.end(content, 'utf8')

        }
    })
})


const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))