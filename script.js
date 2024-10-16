const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', (event) => {
    console.log('Подключение установлено!');
});

socket.addEventListener('close', (event) => {
    console.log('Соединение закрыто:', event.reason);
});

socket.addEventListener('error', (event) => {
    console.error('Ошибка WebSocket:', event);
});

socket.addEventListener('message', (event) => {
    console.log('Получено сообщение:', event.data);
    document.getElementById('dice').textContent = `🎲 ${event.data}`;
});


function rollDice() {
    if (socket.readyState === WebSocket.OPEN) {
        console.log('Кнопка нажата, отправка запроса на бросок кубика...');
        socket.send('roll');
    }
    else
    {
        console.error('WebSocket не открыт. Текущий статус:', socket.readyState);
    }
}