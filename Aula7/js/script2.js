$.getJSON("dados/dados.json", function(data){          
    for(let opc of data.opcoes){
        $("#menu").append(opc.id + "-" + opc.nome + "<br>");
    } 
}); 