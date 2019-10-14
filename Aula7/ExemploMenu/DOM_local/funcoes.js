// JavaScript Document
var xmlDoc;
var xmlHttp;

function exibeMenu() {
	//carrega os filhos do elemento pai com o nome opcao
	//como existe mais de uma tag com esse nome, é retornado um vetor
	//opc[0], opc[1], opc[2] ...
	opc = xmlDoc.getElementsByTagName("opcao");	
	alert("Qtde. de elementos retornados = " + opc.length);
    var conteudo="";
	for (i=0; i< opc.length; i++){
            conteudo += opc[i].getAttribute("id") + " - " + opc[i].firstChild.nodeValue + "<br>";
            //ou:
            //conteudo += opc[i].getAttribute("id") + " - " + opc[i].childNodes[0].nodeValue + "<br>";
	}	
    document.getElementById("menu").innerHTML = conteudo;	
}

function carregaXML(){	
	url = "menu.xml";
	xmlHttp = false;
    if (window.XMLHttpRequest) { 
       xmlHttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) { //se for alguma versão específica de Internet Explorer
       xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    if(!xmlHttp){
       alert('A solicitação HTTP não poderá ser efetuada!');
	return;
	}	
    //o método open prepara a solicitação ao servidor:
    xmlHttp.open('GET', url, true); //solicitação assíncrona do tipo GET
	xmlHttp.onreadystatechange = retorno; //executará a função retorno
    xmlHttp.send(null); //envia a solicitação http
}

function retorno(){
	if (xmlHttp.readyState == 4) {
    	if (xmlHttp.status == 200) {
			//se a resposta estiver completa e correta:
            xmlDoc = xmlHttp.responseXML; 
			exibeMenu();
		}
	}
}

