let pessoa1={
    nome: "Fulano da Silva",
    altura: 1.8,
    idade: 32
};

let pessoa2={
    nome: "Maria da Silva",
    altura: 1.65,
    idade: 25
};

let pessoas = [pessoa1, pessoa2];

function listar(){
    let campo = document.querySelector("#rel_pessoas");
    for (let p of pessoas){
        campo.innerHTML += `<h1>Nome: ${p.nome}, Idade: ${p.idade}</h1>`;
    }
    //ou
    /*
    for (let i=0; i < pessoas.length;i++){
        campo.innerHTML += `<h1>Nome: ${pessoas[i].nome}, Idade: ${pessoas[i].idade}</h1>`;
    }
    */
}

listar();
