function visualizar(mensagem, vet) {
    campo.innerHTML+=mensagem;
    for (i = 0; i < vet.length; i++) {
        campo.innerHTML+=vet[i] + "  ";
    }
    campo.innerHTML+="<br>";
}

function mostraExemplos() {
    campo.innerHTML="<h2>Exemplos: utilizando métodos com vetores</h2>";
    let vetor1 = ["México", "Brasil", "Itália", "Espanha", "Argentina"];
    let vetor2 = ["Chile", "Costa Rica"];
    let vetor3 = [6, 4, 7, 2, 12, 8];

    visualizar("vetor1 inicialmente: ", vetor1);
    visualizar("vetor2 inicialmente: ", vetor2);
    let vetor4 = vetor1.concat(vetor2);
    visualizar("concatenamos os dois vetores anteriores: ", vetor4);
    visualizar("vetor1 continua sendo: ", vetor1);

    visualizar("vetor1 invertido: ", vetor1.reverse());
    //ou também assim:
    //let vetor5 = vetor1.reverse();
    //visualizar("vetor1 invertido: ", vetor5);			
    visualizar("vetor1 ordenado: ", vetor1.sort());
    visualizar("vetor1 agora ficou: ", vetor1);

    visualizar("vetor3: ", vetor3);
    visualizar("vetor3 numérico ordenado: ", vetor3.sort());
    visualizar("vetor3 toString: ", vetor3.toString());
    visualizar("vetor3 continua sendo: ", vetor3);

    campo.innerHTML+="Resumindo: concat(...) e toString() não alteram o vetor inicial, mas reverse() e sort() sim.";
}

let campo = document.querySelector("#res");
mostraExemplos();
