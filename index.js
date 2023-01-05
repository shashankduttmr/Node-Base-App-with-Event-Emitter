const http = require('http')

const request = http.createServer(function(req, res){
    switch(req.url){
        case '/':
            res.end('You are surfing Home Page')
            break
        case '/about':
            res.end('You are surfing About Page')
            break
        case '/contact':
            res.end('This is a Contact app')
            break
        case '/sponsors':
            res.end('This is a Sponsors page')
    }
})
    .listen(9500, function(){
        console.log('Server is running');
    })
