const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const Redis = require('ioredis');
const redis = new Redis();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Route to handle requests to the root URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  
  socket.on('chat message', (msg) => {
    redis.rpush('chat', msg);  // Store message in Redis
    io.emit('chat message', msg);  // Broadcast message to all connected clients
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
