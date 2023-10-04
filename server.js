const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const Redis = require('ioredis');
const redis = new Redis();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let userCount = 0;  // Variable to keep track of the number of connected users

// Emit status of Redis and Socket.IO when a client connects
io.on('connection', (socket) => {
  let userId = 'user' + Math.floor(Math.random() * 10000);  // Temporarily identify users by a random number
  socket.emit('user id', userId);  // Send userId to the client
  userCount++;  // Increment user count
  io.emit('user count', userCount);  // Broadcast updated user count

  socket.on('chat message', (msgObj) => {
      let message = { userId: msgObj.userId, text: msgObj.text };  // Use userId from msgObj
      if (!message.text) {
        console.error('Message text is undefined:', msgObj);
        return;
      }
      redis.rpush('chat', JSON.stringify(message));  // Store message object in Redis

    // Broadcast message object to all connected clients with the updated style
      io.emit('chat message', message);  // Emit the message object
    });
    
  socket.on('disconnect', () => {
    console.log('user disconnected');
    userCount--;  // Decrement user count
    io.emit('user count', userCount);  // Broadcast updated user count
  });

  socket.on('typing', (isTyping) => {
    socket.broadcast.emit('typing', isTyping);
  });
});  // <-- These were missing

// Route to handle requests to the root URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
