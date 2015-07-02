var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);
console.log('listening on localhost:3000');

app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log("someone connected!");

    socket.on('insert feature', function(msg){
        io.emit('insert feature', msg);
        console.log(msg);
    });
});

