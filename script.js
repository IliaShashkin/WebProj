const socket = new WebSocket('ws://localhost:8080'); // Подключение к WebSocket-серверу

// Обновление кубика при получении данных от сервера
socket.onmessage = function(event) {
    document.getElementById('dice').innerHTML = `🎲 ${event.data}`;
};

// Функция для отправки запроса на бросок кубика
function rollDice() {
    socket.send('rollDice');
}
