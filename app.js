// bring in things we need
const http = require('http');
const fs = require('fs');


// recieve things
const server = http.createServer(function(request, response){
    // handle things
    // console.log(request);
    if(request.url === '/'){
        console.log('1')
        fs.readFile('index.html', 'utf-8', function(errors, contents){
            if(errors){
                console.log(errors);
                response.writeHead(20, {'Content-Type': 'text/html'});
                response.write("u gooft");
                response.end()
            } else{
                response.writeHead(200,{'Content-Type': 'text/html'});
                response.write(contents);
                response.end()
            }
        })
    }
    else if(request.url === '/ninjas'){
        console.log('2')
        fs.readFile('ninjas.html', 'utf-8', function(errors, contents){
            if(errors){
                console.log(errors);
                response.writeHead(20, {'Content-Type': 'text/html'});
                response.write("u gooft");
                response.end()
            } else{
                response.writeHead(200,{'Content-Type': 'text/html'});
                response.write(contents);
                response.end()
            }
        })
    }
    else if(request.url === '/dojos/new'){
        console.log('3')
        fs.readFile('dojos.html', 'utf-8', function(errors, contents){
            if(errors){
                console.log(errors);
                response.writeHead(20, {'Content-Type': 'text/html'});
                response.write("u gooft");
                response.end()
            } else{
                response.writeHead(200,{'Content-Type': 'text/html'});
                response.write(contents);
                response.end()
            }
        })
    }
    else{
        console.log('4')
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write("Hello Yo");
        response.end();
    }
})

// start listening
server.listen(6789);
console.log('doing things!');
