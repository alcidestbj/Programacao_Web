// JavaScript Document
let xhrDoc;
let xhr;

function criaObjetoXHR(){
    if (window.XMLHttpRequest) { 
        xhr = new XMLHttpRequest();
     }
     else {
        alert('A solicitação HTTP não poderá ser efetuada!');     
     }	
}

function carregaXML(){	
    url = "xml/menu.xml";
    xhr.open('GET', url, true); 
    xhr.onreadystatechange = processaRetorno; 
    xhr.responseType = 'document';
    xhr.withCredentials = true;
    xhr.send(null); 
}

function processaRetorno(){
	if (xhr.readyState == 4) {
    	if (xhr.status == 200) {			
            xhrDoc = xhr.response; 
			exibirMenu();
		}
	}
}

function exibirMenu() {
	//carrega os filhos do elemento pai com o nome opcao
	//como existe mais de uma tag com esse nome, é retornado um vetor
	//opc[0], opc[1], opc[2] ...
	opc = xhrDoc.querySelectorAll("opcao");	
	alert("Qtde. de elementos retornados = " + opc.length);
    let conteudo="";
	for (let i=0; i< opc.length; i++){
            conteudo += opc[i].getAttribute("id") + " - " + opc[i].childNodes[0].nodeValue + "<br>";
	}	
    document.querySelector("#menu").innerHTML = conteudo;	
}

criaObjetoXHR();
carregaXML();