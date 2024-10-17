function rollDice() {
    const diceValue = Math.floor(Math.random() * 20) + 1;
    const diceImage = document.getElementById('dice');

    // Обновляем картинку кубика в зависимости от выпавшего значения
    diceImage.src = `dice${diceValue}.png`;

    // Также можно обновить текст с результатом (необязательно)
    document.getElementById('result').innerHTML = `Результат: ${diceValue}`;
}
