var express = require('express');
var app = express();
 
var bans=[];
var picks=[];
var pickpositions=[];
var currentinfo=0;
var fanvotes=[];
var suggestions={};
var turn=0;

var port = 3700;
 
app.get("/", function(req, res){
    res.send("It works!");
});
 
var io = require('socket.io').listen(app.listen(port));

io.sockets.on('connection', function (socket) {
    //socket.emit('message', { message: 'welcome to the chat' });
    socket.on('send', function (data) {
        io.sockets.emit('message', data);
    });
});

console.log("Listening on port " + port);