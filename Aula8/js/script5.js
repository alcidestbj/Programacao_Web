import { Bolinha } from './Bolinha.js';

let bola = new Bolinha("blue",10,20,30);
alert (bola.bcor); // get bcor, retorna a cor da bola
bola.bcor = "red";  //set bcor, configura a cor da bola

console.log(bola);

//a classe Pessoa foi carregada no próprio HTML
let p = new Pessoa("Alcides", 40, 1.69);
console.log(p.toString());