//create web server
const express = require('express');
const app = express();
//create server
const http = require('http');
const server = http.createServer(app);
//create socket
const io = require('socket.io')(server);

//create a connection
io.on('connection', (socket) => {
    //display the connection
    console.log('socket connected');
    //display the disconnection
    socket.on('disconnect', () => {
        console.log('socket disconnected');
    });
    //receive message
    socket.on('message', (data) => {
        console.log(data);
        //send message
        io.emit('message', data);
    });
});

//display the port
server.listen(3000, () => {
    console.log('server running on port 3000');
});