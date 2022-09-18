let campo = document.querySelector("#res");

let meses = ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"];
campo.innerHTML = "For normal<br>";
for (let i = 0; i < meses.length; i++) { 
    campo.innerHTML += meses[i] + "<br>"; 
}

campo.innerHTML += "<hr>"; 
campo.innerHTML += "For..of<br>"; 
for (let mes of meses) { 
    campo.innerHTML += mes + "<br>";  
}
