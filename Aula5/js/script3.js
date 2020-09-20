document.querySelector("#btn1").addEventListener("click", function(){
    let valor_texto = document.querySelector("#texto").value;
    metodosString(valor_texto);
});

function metodosString(txt){
    let campo_div = document.querySelector("#res");
    let qtd_letras = txt.length;
    let letra_inicio = txt[0];
    let maiusculas = txt.toUpperCase();
    let minusculas = txt.toLowerCase();
    let posi_a = txt.indexOf("a"); //se digitarmos Java aqui retorna 1
    let posl_a = txt.lastIndexOf("a"); //se digitarmos Java aqui retorna 3
    let txt2 = txt.substring(1,3);

    campo_div.innerHTML = "";
    campo_div.innerHTML += `Tamanho da string digitada: ${qtd_letras}<br>`;
    campo_div.innerHTML += `Primeira letra: ${letra_inicio}<br>`;
    campo_div.innerHTML += `Texto maiúsculo: ${maiusculas}<br>`;
    campo_div.innerHTML += `Texto minúsculo: ${minusculas}<br>`;
    campo_div.innerHTML += `Primeira ocorrência de uma string (letra a por exemplo): ${posi_a}<br>`;
    campo_div.innerHTML += `Última ocorrência de uma string (letra a por exemplo): ${posl_a}<br>`;
    campo_div.innerHTML += `Substring: ${txt2}`;

    campo_div.innerHTML += "<br>";
    //percorrendo cada caratere da string
    for(let i=0;i<txt.length;i++){
        campo_div.innerHTML += `Letra ${i} = ${txt[i]}<br>`;
    }
}