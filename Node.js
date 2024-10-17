const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

let diceValue = Math.floor(Math.random() * 20) + 1;

server.on('connection', (ws) => {
    ws.send(diceValue);

    ws.on('message', (message) => {
        if (message === 'rollDice') {
            diceValue = Math.floor(Math.random() * 20) + 1;
            server.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(diceValue);
                }
            });
        }
    });
});

console.log('WebSocket сервер запущен на порту 8080');
