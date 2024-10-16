const WebSocket = require('ws');
const server = new WebSocket.server({ port: 8080 });

let diceValue = Math.floor(Math.random() * 20) + 1;


server.on('connection', (socket) => {
    console.log('Новое соединение установлено.');

    socket.on('message', (message) => {
        console.log('Получено сообщение:', message);
            // Генерация случайного числа от 1 до 20 для кубика
        const diceRoll = Math.floor(Math.random() * 20) + 1;
            // Отправка результата обратно клиенту
        socket.send(diceRoll.toString());
    });

    socket.on('close', () => {
        console.log('Соединение закрыто.');
    });
});
console.log('Сервер WebSocket запущен на ws://localhost:8080/');