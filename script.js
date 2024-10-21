function rollDice() {
    const diceValue = Math.floor(Math.random() * 20) + 1;
    const diceImage = document.getElementById('dice');

    diceImage.src = `dice${diceValue}.png`;


    document.getElementById('result').innerHTML = `Result: ${diceValue}`;
}
