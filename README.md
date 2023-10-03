# Redis-chat

# Real-Time Chat Application

A simple real-time chat application built with Node.js, Express, Socket.io, and Redis.

## Table of Contents

1. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the Application](#running-the-application)
2. [Architecture Overview](#architecture-overview)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [License](#license)

## Getting Started

### Prerequisites

- Node.js
- Redis

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/guillaumeolivieri/Redis-chat.git
   cd chat-application
   
2. Install dependencies:
   ```bash
   npm install
   
### Running the Application:

1. Start the Redis server:
   ```bash
   redis-server
   
2. In a new terminal, navigate to the project directory and start the server:
   ```bash
   node server.js

### Architecture Overview:

The chat application consists of the following components:

1. Client: Simple HTML/CSS/JavaScript frontend using Socket.io for real-time communication.
2. Server: Node.js application using Express for HTTP handling and Socket.io for real-time communication.
3. Redis: Redis is used to persist chat messages and manage session data.

### Usage:

Open a web browser and navigate to http://localhost:3000.
Type a message into the input field and click "Send" to send a message.
Messages will appear in the chat window as they are sent and received.


