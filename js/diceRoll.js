var dice
var diceValue
var result = document.getElementById('result')

function diceChoice(value){
	diceValue = value;
	dice = Math.floor(Math.random () * diceValue) + 1;
	result.textContent = 'You rolled a ' + dice;
}
