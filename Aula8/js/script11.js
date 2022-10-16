$(function(){
    $("#bt").click(function(){
        mostraDados();
    })
});  
    
function mostraDados(){
    $("#res").html("Nome: "     +$("#txtnome").val()                   +"<br>"+
                    "E-mail: "  +$("#txtemail").val()                  +"<br>"+
                    "Sexo: "    +$("input:radio[name=sexo]:checked").val());
}