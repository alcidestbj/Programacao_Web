let base;
if (localStorage.getItem("base") !== null) {
    base = JSON.parse(localStorage.getItem("base"));
} else {
    base = {
        dados: []
    };
}

$(function () {
    $("#btn1").click(cadastrarDados);
    $("#btn2").click(listarDados);
});

function cadastrarDados() {
    base.dados.push({
                    nome: $("#nome").val(),
                    email: $("#email").val()
                    });
    localStorage.setItem('base', JSON.stringify(base));
}

function listarDados() {
    base = JSON.parse(localStorage.getItem("base"));
    for (let i = 0; i < base.dados.length; i++) {
        $("#rel").append(base.dados[i].nome+"<br>");
    }
}