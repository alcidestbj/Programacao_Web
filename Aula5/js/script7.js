let elemento = document.body; //eventos de teclado atendidos para o corpo do documento
elemento.onkeydown =  trataEvento1;
elemento.onkeyup = trataEvento1;	
elemento.onkeypress = trataEvento2;	

function trataEvento1(event){
	document.querySelector("#box1").innerHTML = "keyCode<br>"+event.keyCode;	
}
function trataEvento2(event){
	document.querySelector("#box2").innerHTML = "charCode<br>"+event.charCode;
}
