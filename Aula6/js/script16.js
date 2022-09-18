let vetor1 = ["México", "Brasil", "Itália", "Espanha", "Argentina", "Chile", "Costa Rica"];
let vetor2 = vetor1.map( (item) => {return item.length; } ); 

let campo = document.querySelector("#res");
campo.innerHTML = vetor1;
campo.innerHTML += "<hr>"+ vetor2;


