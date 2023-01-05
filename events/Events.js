const EventEmitter = require('events')

const evt = new EventEmitter()

evt.on('test', function(){
    console.log('Im learning Node.js');
})

evt.on('learn', function(){
    console.log('I have learnt');
})

evt.emit('test')
evt.emit('learn')