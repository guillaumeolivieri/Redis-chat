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
1. Install Redis:
You would typically install Redis using the package manager of the OS you are using. For Ubuntu, you would use the following commands:
   ```bash
   sudo apt-get update
   sudo apt-get install redis-server

2. Start Redis:
Once installed, you can start the Redis server with the command:

   ```bash
   redis-server

Verify Redis Installation:
In a new terminal, you can verify that Redis is running using the command:

   ```bash
   redis-cli ping
```

If Redis is running, this will return PONG.

1. Start the Redis server:
   ```bash
   redis-server
   
2. In a new terminal, navigate to the project directory and start the server:
   ```bash
   node server.js

### Exposing the Local Server using Ngrok:

In order to allow remote access to your chat application, you can use Ngrok to expose your local server to the internet.

#### Prerequisites:

1. Ngrok account
2. Ngrok installed on your machine

Setup:

Authenticate Ngrok:
After signing up for an Ngrok account, authenticate your Ngrok CLI with your Authtoken:

bash
ngrok authtoken YOUR_NGROK_AUTH_TOKEN
Start Ngrok:
Start Ngrok to tunnel traffic to your local server (assuming your server is running on port 3000):
   
   ```bash
   ngrok http 3000
   ```
Accessing the Application:
Ngrok will provide a public URL (http and https) that you can share with your friend. They can use this URL to access the chat application from their web browser.

### Architecture Overview:

The chat application consists of the following components:

1. Client: Simple HTML/CSS/JavaScript frontend using Socket.io for real-time communication.
2. Server: Node.js application using Express for HTTP handling and Socket.io for real-time communication.
3. Redis: Redis is used to persist chat messages and manage session data.

### Usage:

Open a web browser and navigate to http://localhost:3000.
Type a message into the input field and click "Send" to send a message.
Messages will appear in the chat window as they are sent and received.


