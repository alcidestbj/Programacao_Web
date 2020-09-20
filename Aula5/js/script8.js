let elemento1 = document.querySelector("#txtv1");
let elemento2 = document.querySelector("#txtv2");

elemento1.onkeypress = validaValor;	
elemento2.onkeypress = validaValor;	

function validaValor(event){
	return ((event.charCode >= 48 && event.charCode <= 57) || event.charCode == 46)?true:false;	
}

let soma = (v1,v2) => { return v1+v2; };

document.querySelector("#btn1").addEventListener("click", function(){
	let valor1 = Number(elemento1.value);
	let valor2 = Number(elemento2.value);
	document.querySelector("#resultado").value = soma(valor1,valor2);
});
