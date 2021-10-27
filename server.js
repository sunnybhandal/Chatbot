var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

var io = require('socket.io')(server);

// io.on('connection', function (socket) {
//     socket.on('initials', function (msg) {
//         io.emit('initials', msg);
//     });
// });

io.on('connection', function (socket) {
    socket.on('message', function (msg) {
        io.emit('message', msg);
    });
    socket.on('initials', function (msg) {
        io.emit('initials', msg);
    });
});

server.listen(8080, function() {
    console.log('Chat server running');
});


