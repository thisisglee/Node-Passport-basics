const EventEmitter = require('events')

// create class
class MyEmitter extends EventEmitter {}

//init object
const myEmitter = new MyEmitter()

//Event listener
myEmitter.on('event', () => console.log('Event Fired!'))
myEmitter.on('event2', () => console.log('Event 2 Fired!'))

//init event
myEmitter.emit('event')
myEmitter.emit('event2')
myEmitter.emit('event')
myEmitter.emit('event2')