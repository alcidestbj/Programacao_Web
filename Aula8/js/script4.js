import { titulo, user, setTitulo, exibirTitulo, exibirUser  } from './dados.js';

let campo = document.querySelector("#saida");

alert(titulo);
setTitulo("Título alterado");
exibirTitulo();
console.log(user);
exibirUser(campo);