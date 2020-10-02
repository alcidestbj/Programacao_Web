x = alunos.length;
for (i = 0; i < x; i++) {
    $("#dados").append("RGM: " + alunos[i].rgm +
        "<br>Nome: " + alunos[i].nome +
        "<br>Idade: " + alunos[i].idade + "<hr>");
}