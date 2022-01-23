const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = process.env.PORT || 3000
const path = require('path')
const socketio = require('socket.io')
const io = socketio(server)

const publicDirectoryPath = path.join(__dirname,'/public')

app.use(express.static(publicDirectoryPath))

let count = 0;

io.on('connection',(socket)=>{
    console.log('a user connected');

    socket.emit('countUpdated',count)
    socket.emit('countDecrement', count)


    socket.on('increment',()=>{
        count++
        io.emit('countUpdated',count)
    })


    socket.on('decrement',()=>{
        count--;
        io.emit('countDecrement',count)
    })
})

server.listen(port, () => {
    console.log(`listening on ${port}`);
});