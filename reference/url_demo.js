const url = require('url').URL

const myUrl = new url('http:mywebsite.com:8000/hello.html?id=100&status=active')

// Serialized URl
console.log(myUrl.href.toString())

// just the host or root domain
console.log(myUrl.host)

//hostname- doesnt give port number
console.log(myUrl.hostname)

// path name
console.log(myUrl.pathname)

// serialized query
console.log(myUrl.search)

//to crete object of search, params object
console.log(myUrl.searchParams)

//add param
myUrl.searchParams.append('abc','123')
console.log(myUrl.searchParams)

//loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))