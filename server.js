import express from 'express';
import http from 'http';
import socketio from 'socket.io';

const app = express();
const port = 3000;
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(__dirname + '/src'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(port, () => { console.log(`listening on *:${port}`); });