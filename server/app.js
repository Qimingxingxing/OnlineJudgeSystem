const express = require("express");
const app = express();
const indexRouter = require("./router/index");
const restRouter = require("./router/rest");
const path = require('path');
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/test', { useMongoClient: true });

app.use(express.static(path.join(__dirname, '../public/')));

app.use("/", indexRouter);
app.use("/api/v1", restRouter);
app.use(function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, '../public')});
});
const http = require('http');
const socketIO = require('socket.io');
const io = socketIO();

const editorSocketService = require('./services/editorSocketService.js')(io);
const server = http.createServer(app);
io.attach(server);
server.listen(3000);