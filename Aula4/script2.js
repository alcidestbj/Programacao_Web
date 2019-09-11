var qtdAlunos=parseInt(prompt("Qtd de aluno:"));

function validaConceito(notaFinal){
    if (notaFinal>= 6)
        return "APROVADO";
    else
        return "REPROVADO";
}

function imprimir(texto){
    document.write(texto);
}

var conteudo="Lista de Alunos<br>";
conteudo += "<table border='1'>";
for (let i=1; i <= qtdAlunos; i++){
    let nome = prompt("Digite seu nome");
    let nota = parseFloat(prompt("Digite a nota final"));
    conteudo +=  "<tr>";
    conteudo +=     "<td>"+nome+"</td>";
    conteudo +=     "<td>"+nota+"</td>";
    conteudo +=     "<td>"+validaConceito(nota)+"</td>";
    conteudo +=  "</tr>";
}
conteudo += "</table>";
imprimir(conteudo);


