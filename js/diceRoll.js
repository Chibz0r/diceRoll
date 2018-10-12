var d20
var result = document.getElementById('result')
var button = document.querySelector('button')

button.onclick = function() {
	var d20 = Math.floor(Math.random () * 20) + 1;
	result.textContent = 'You rolled a ' + d20
}
