const WebSocket = require('ws');
const http = require('http');
const server = http.createServer();
const wsServer = new WebSocket.Server({ server });

const corsMiddleware = function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
};

server.on('request', corsMiddleware);

wsServer.on('connection', (socket) => {
    console.log('Новое соединение установлено.');

    socket.on('message', (message) => {
        console.log('Получено сообщение:', message);
        const diceRoll = Math.floor(Math.random() * 20) + 1;
        socket.send(diceRoll.toString());
    });

    socket.on('close', () => {
        console.log('Соединение закрыто.');
    });

    socket.on('error', (error) => {
        console.error('Ошибка WebSocket сервера:', error);
    });
});

server.listen(8080, () => {
    console.log('Сервер WebSocket запущен на ws://localhost:8080/');
});