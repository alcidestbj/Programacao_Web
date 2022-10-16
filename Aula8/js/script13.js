$("#button1").click(gravarCookie);
$("#button2").click(carregarCookie);
$("#button3").click(apagarCookie);

let conf={
    expires: 10, 
    sameSite: 'strict', 
    domain: ''
};

function gravarCookie(){   
    Cookies.set("rgm",$("#rgm").val(),conf);
    Cookies.set("nome",$("#nome").val(),conf);
    Cookies.set("profissao",$("#profissao").val(),conf);
    Cookies.set("cpf",$("#cpf").val(),conf);
    alert("Dados gravados");
    limparCampos();
}
  
function carregarCookie(){
    if (Cookies.get("rgm") != null){
        $("#rgm").val(Cookies.get("rgm"));
        $("#profissao").val(Cookies.get("profissao"));
        $("#nome").val(Cookies.get("nome"));
        $("#cpf").val(Cookies.get("cpf"));
    }else{
        alert("Nenhum Cookie encontrado");
    }
}
  
function apagarCookie(){    
    if (Cookies.get("rgm") != null){
        Cookies.remove("rgm");	
        Cookies.remove("profissao");	
        Cookies.remove("nome");
        Cookies.remove("cpf");	
    }else{
        alert("Nenhum Cookie encontrado");
    }
    limparCampos();
}
  
function limparCampos(){
    $("#rgm").val("");
    $("#profissao").val("");
    $("#nome").val("");
    $("#cpf").val("");
}
