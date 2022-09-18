let flag=0;
function alteraSrc(){
	if (flag == 0){
		document.querySelector("#personagem").src="goku2.jpg";
		flag=1;
	}
	else{
		document.querySelector("#personagem").src="goku.jpg";
		flag=0;
	}
}

function anima(){
    //Math.random() gera número aleatório: 0.0 <= valor < 1.0
	posX = Math.round(Math.random()*800); 
	posY = Math.round(Math.random()*400);
	document.querySelector("#personagem").style.top = posY+"px";
	document.querySelector("#personagem").style.left = posX+"px";	
}


var obj1=document.getElementById("button");
var obj2=document.getElementById("button2");

obj1.addEventListener("click",alteraSrc);
obj2.addEventListener("click",function(){
	setInterval(anima,500);
});
