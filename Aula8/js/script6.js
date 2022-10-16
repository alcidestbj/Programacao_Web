window.addEventListener("load", function(){
    let btn = document.querySelector("#btn1");
    btn.addEventListener("click", function(){
        exibirConteudos();
    });
});

function exibirConteudos(){
    //acessando pelo nome da tag, podemos ter várias tags iguais
    //o correto neste caso é querySelectorAll
    let paragrafo = document.querySelector("p"); //captura somente o primeiro parágrafo
    let paragrafos = document.querySelectorAll("p"); //captura todos os parágrafos, vetor
    console.log(paragrafo.innerHTML);
    console.log(paragrafos);//temos que acessar cada posição do vetor para acessar o innetHTML

    //acessando pelo ID, temos somente um ID por elemento
    let art = document.querySelector("#artigo");
    console.log(art.innerHTML);

    //acessando pela class, podemos ter várias tags com a mesma class
    //o correto neste caso é querySelectorAll
    let caixa = document.querySelector(".caixa"); //captura somente a primeira cx
    let caixas = document.querySelectorAll(".caixa"); //captura todas as cxs, vetor
    console.log(caixa.innerHTML);
    console.log(caixas);//temos que acessar cada posição do vetor para acessar o innetHTML
}