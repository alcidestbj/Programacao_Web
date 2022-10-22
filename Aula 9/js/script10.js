let url = "../json/alunos.json";

fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        let div = document.querySelector("#lista");
        div.innerHTML = "";

        let alunos = (data.alunos);
        console.log(alunos);

        alunos.forEach(function(aluno){
            div.innerHTML += `RGM: ${aluno.rgm},
                              Nome: ${aluno.nome}<br>`;
        });      
    })
    .catch(function(error) {
        console.log(error);
    });