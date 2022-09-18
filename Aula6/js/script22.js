function mostraHoras(){
	let hora = new Date();
    document.querySelector("#horas").value = hora.getHours()+":"+
                                             hora.getMinutes()+":"+
                                             hora.getSeconds();
}

setInterval(mostraHoras , 1000);
