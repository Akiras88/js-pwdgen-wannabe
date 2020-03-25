// 1 - user name input
var name = prompt('Qual è il tuo nome?');
console.log(name);

// 2 - user surname input
var surname = prompt('Qual è il tuo cognome?');
console.log(surname);

// 3 - user favorite color
var color = prompt('Qual è il tuo colore preferito?');
console.log(color);

// 4 - genetation casual number 
var number = Math.floor( Math.random()*100);
console.log(number);

// 5 - print password
document.getElementById('password').innerHTML = name + surname + color + number;
 