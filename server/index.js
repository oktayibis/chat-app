const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 5000;
const router = require("./router");
// Setup socket io
const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Connecting socket io
io.on("connection", (socket)=>{
    console.log("We have a new connection");

    // Disconnect from Socket.io
    socket.on("disconnect", ()=> {
        console.log("User had left");
    });
});

// Middleware
app.use(router);

// Server Running
server.listen(PORT, ()=> console.log(`Server has started on port ${PORT} `));
