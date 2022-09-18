//Objeto Math
console.log(Math.PI);

//ler um valor e fazer o mesmo elevado ao quadrado
let v = Number(prompt("Digite um valor: "));
console.log(Math.pow(v,2));
//ou
console.log(v**2);

//valor absoluto
console.log(Math.abs(5));
console.log(Math.abs(-5));

//raiz quadrada
console.log(Math.sqrt(4));

//arredondando valores
let valor = 3.5;
console.log("Round: "+ Math.round(valor));
console.log("Floor: "+ Math.floor(valor));
console.log("Ceil: "+ Math.ceil(valor));

//valor randomicos de 0 - 1
console.log(Math.random());

//valores inteiros de 0 - 10
console.log(Math.round(Math.random() * 10));