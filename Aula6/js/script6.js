let elemento1;
let elemento2;

window.addEventListener("load", function(){
	elemento1 = document.querySelector("#box1");
	elemento1.onclick 		= trataEventos1;
	elemento1.ondblclick 	= trataEventos1;
	
	elemento2 = document.querySelector("#box2");
	elemento2.onmouseover	= trataEventos2;
	elemento2.onmousedown	= trataEventos2;
	elemento2.onmouseup		= trataEventos2;
	elemento2.onmouseout	= trataEventos2;
	elemento2.onmousemove	= trataEventos2;
});

function trataEventos1(event)
{
	switch(event.type){
		case "click": 		elemento1.style.backgroundColor = "green";
							break;
		case "dblclick":	elemento1.style.backgroundColor = "blue";
							break;
					
	}
}

function trataEventos2(event)
{
	switch(event.type){
		case "mouseover": 	elemento2.style.backgroundColor = "red";
							break;
		case "mousedown":	elemento2.style.backgroundColor = "black";
							break;
		case "mouseup":		elemento2.style.backgroundColor = "white";
							break;
		case "mouseout":	elemento2.style.backgroundColor = "yellow";
							break;
		case "mousemove":	elemento2.innerHTML="x:"+event.clientX+", y:"+event.clientY;
							break;					
	}
}

