$("#button1").click(gravarDados);
$("#button2").click(carregarDados);
$("#button3").click(apagarDados);

function gravarDados() {
    localStorage.setItem("rgm"      , $("#rgm").val()      );
    localStorage.setItem("nome"     , $("#nome").val()     );
    localStorage.setItem("profissao", $("#profissao").val());
    localStorage.setItem("cpf"      , $("#cpf").val()      );
    alert("Dados gravados");
    limparCampos();
}

function carregarDados() {
    if (localStorage.length > 0) {
        $("#rgm").val(localStorage.getItem("rgm"));
        $("#profissao").val(localStorage.getItem("profissao"));
        $("#nome").val(localStorage.getItem("nome"));
        $("#cpf").val(localStorage.getItem("cpf"));
    } else {
        alert("Nenhum registro encontrado");
    }
}

function apagarDados() {
    if (localStorage.length > 0) {
        localStorage.clear();
    } else {
        alert("Nenhum registro encontrado");
    }
    limparCampos();
}

function limparCampos() {
    $("#rgm").val("");
    $("#profissao").val("");
    $("#nome").val("");
    $("#cpf").val("");
} 