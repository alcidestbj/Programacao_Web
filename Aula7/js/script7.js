function buscarRgm(rgm) {
    let pesq = "RGM não existe";
    for (let i = 0; i < alunos.length; i++) {
        if (rgm == alunos[i].rgm) {
            pesq = "RGM: " + alunos[i].rgm +
                    "<br>Nome: " + alunos[i].nome +
                    "<br>Idade: " + alunos[i].idade;
        }
    }    
    $("#resumo").html(pesq);
}


$("#btn").click(function () {
    let r = $("#rgm").val();
    buscarRgm(r)
});       