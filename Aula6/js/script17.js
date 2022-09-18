let vetor1 = ["México", "Brasil", "Itália", "Espanha", "Argentina", "Chile", "Costa Rica"];

vetor1.forEach(alert);

let campo = document.querySelector("#res");
vetor1.forEach( (item, index) => { 
    campo.innerHTML += `País: ${item} Índice: ${index}<br>`; 
});


