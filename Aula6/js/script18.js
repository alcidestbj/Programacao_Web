function alteraTitulo(){
	document.querySelector("#tit").innerHTML = document.querySelector("#titulo").value;
	document.querySelector("#tit").style.color="blue";
	document.querySelector("#tit").style.fontSize="50pt";	
}

function criaTabela(){
	linhas = document.querySelector("#linha").value
	colunas = document.querySelector("#coluna").value
	conteudo="";
	conteudo += "<table border='1'>";
	for (i=1;i<=linhas;i++){
		conteudo += "<tr>";
		for (j=1; j<=colunas;j++){
			conteudo += "<td>Linha: "+i+" - Coluna:" + j +"</td>";
		}			
		conteudo += "</tr>";
	}	
	conteudo += "</table>";
	document.querySelector("#tab").innerHTML=conteudo;
}


let obj1 = document.querySelector("#button");
let obj2 = document.querySelector("#button2");
obj1.onclick = alteraTitulo;
obj2.onclick =  criaTabela;
