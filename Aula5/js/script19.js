function alteraTamanho(){
	document.querySelector("#texto").style.fontSize = document.querySelector("#tam").value+"pt";
}

function mudaCor(cor){
	document.querySelector("#texto").style.color = cor;
}

function mudaFundo(cor){
	document.querySelector("#texto").style.backgroundColor = cor;
}

function alteraTamanhoDiv(){
	document.querySelector("#texto").style.width = document.querySelector("#comp").value;
}

let obj1 = document.querySelector("#btn1");
let obj2 = document.querySelector("#btn2");
let obj3 = document.querySelector("#btn3");
let obj4 = document.querySelector("#btn4");
let obj5 = document.querySelector("#btn5");
let obj6 = document.querySelector("#btn6");
						
obj1.addEventListener("click",alteraTamanho);

obj2.addEventListener("click",function(){
	mudaCor('red');
});
    
obj3.addEventListener("click",function(){
	mudaCor('blue');
});

obj4.addEventListener("click",function(){
	mudaFundo('black');
});

obj5.addEventListener("click",function(){
	mudaFundo('yellow');
});

obj6.addEventListener("click",alteraTamanhoDiv);

