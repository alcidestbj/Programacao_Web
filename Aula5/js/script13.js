let frutas = ["Maça", "Laranja"]; 
console.log(frutas);

frutas.push("Morango");
//podemos inserir mais de 1 elemento
frutas.push("Uva", "Abacaxi");
console.log(frutas);

console.log(frutas.pop()); //remove o último elemento Abacaxi 
console.log(frutas);

console.log(frutas.shift()); //remove o primeiro elemento Maça
console.log(frutas);

frutas.unshift('Melão');  //adiciona no início
//podemos adicionar mais de 1 elemento no início
frutas.unshift("Limão", "Damasco"); 
console.log(frutas);




