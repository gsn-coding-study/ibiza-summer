require('http').createServer(function (request, response){
    response.writeHead(200, {'Content-Type': 'text.html'});
    response.end('<h1>Hello Web Server with Node.js World</h1>');
}).listen(52273, function(){
    console.log('Server Running at http://localhost:52273');
});

