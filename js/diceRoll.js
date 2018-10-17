var dice
var result = document.getElementById('result');

// Roll dice and return random number
function diceRoll() {
	var diceValue = this.value;
	dice = Math.floor(Math.random () * diceValue) + 1;
	result.textContent = 'Rolling D' + diceValue + ' ... you rolled a ' + dice;
}

// Listen for when a button is clicked and trigger dice roll
var button = document.querySelectorAll('button');

for (var i=0; i < button.length ; i++) {
	button[i].addEventListener('click', diceRoll);
}