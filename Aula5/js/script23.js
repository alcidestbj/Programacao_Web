function qtdCaracter(){
	var texto = document.querySelector("#caixa").value; 
	alert(texto.length);
}

function maiusculo(){
	document.querySelector("#caixa").value = document.querySelector("#caixa").value.toUpperCase(); 
}

function minusculo(){
	document.querySelector("#caixa").value = document.querySelector("#caixa").value.toLowerCase(); 
}

function parteTexto(){
	var texto =  document.querySelector("#caixa").value;
	alert(texto.substring(9,17));     
}


let obj1 = document.querySelector("#button");
let obj2 = document.querySelector("#button2");
let obj3 = document.querySelector("#button3");
let obj4 = document.querySelector("#button4");

obj1.addEventListener("click",qtdCaracter);
obj2.addEventListener("click",maiusculo);
obj3.addEventListener("click",minusculo);
obj4.addEventListener("click",parteTexto);

