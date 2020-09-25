$(function(){
    let btn = $("#btn1");
    btn.click(function(){
        exibirConteudos();
    });
});

function exibirConteudos(){
    //acessando pelo nome da tag, podemos ter várias tags iguais
    let paragrafos = $("p"); //captura todos os parágrafos, vetor    
    console.log(paragrafos);//temos que acessar cada posição do vetor para acessar o innetHTML

    //acessando pelo ID, temos somente um ID por elemento
    let art = $("#artigo");
    console.log(art.html());

    //acessando pela class, podemos ter várias tags com a mesma class
    let caixas = $(".caixa"); //captura todas as cxs, vetor
    console.log(caixas);//temos que acessar cada posição do vetor para acessar o innetHTML
}