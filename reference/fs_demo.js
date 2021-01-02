const fs = require('fs')
const path = require('path')

//Create Folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log('Folder Created...')
// })

// create files using open method, or to write while creating use write file
// fs.writeFile(path.join(__dirname, '/test','hello.txt'), 'Hello World', err => {
//     if(err) throw err;
//     console.log('File written to....')
//     fs.appendFile(path.join(__dirname, '/test','hello.txt'), '  first Call back added ||  ', err => {
//         if(err) throw err;
//         console.log('File written using call back to....')
//     })
// })


// // add stuff into existing file
// fs.appendFile(path.join(__dirname, '/test','hello.txt'), ' BYE BYE ', err => {
//     if(err) throw err;
//     console.log('File written last time to....')
// })


// read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data)
// })

//Rename a file
fs.rename(path.join(__dirname, '/test', 'hello.txt'),path.join(__dirname, '/test', 'helloworld.txt'), (err) => {
    if(err) throw err;
    console.log("File renamed...")
})
