function rollDice() {
    diceValue = Math.floor(Math.random() * 20) + 1;
    document.getElementById('dice').innerHTML = `🎲 ${diceValue}`;
}
