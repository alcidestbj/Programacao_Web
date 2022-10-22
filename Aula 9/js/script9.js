let url = "../xml/alunos.xml";

fetch(url)
    .then((resp) => resp.text())
    .then(str => (new DOMParser().parseFromString(str, "text/xml")))
    .then(function(data) {
        let div = document.querySelector("#lista");
        div.innerHTML = "";
        console.log(data);
        let alunos = data.querySelectorAll("aluno");        
        alunos.forEach(function(aluno){
            div.innerHTML += `RGM: ${aluno.getAttribute("rgm")} - 
                              Nome: ${aluno.childNodes[0].childNodes[0].nodeValue}<br>`
        });
    })
    .catch(function(error) {
        console.log(error);
    });