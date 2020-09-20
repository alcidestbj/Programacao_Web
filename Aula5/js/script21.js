function sorteia(){
	document.querySelector("#numero").innerHTML = Math.round(Math.random()*100);
}

function stopIntervalo(){
	clearInterval(id_intervalo);
}

let id_intervalo = setInterval(sorteia,500);
setTimeout(stopIntervalo,3000);
