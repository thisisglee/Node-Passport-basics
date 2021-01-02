const path = require('path')

// Basename- gets base file name
console.log(path.basename(__filename))

//Directory name
console.log(path.dirname(__filename))

// File extension
console.log(path.extname(__filename))

// Create object  of PAth
console.log(path.parse(__filename).base)

// Concatenate or Join paths
console.log(path.join(__dirname, 'test', 'hello.html'))