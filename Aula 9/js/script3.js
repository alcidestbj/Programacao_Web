function carregaJSON(url){	
    criaObjetoXHR();      
    xhr.open('GET', url, true); 
    xhr.responseType = 'json';
    xhr.withCredentials = true;
    xhr.send(null);
    xhr.onload = function() {
        exibir(xhr.response);
    };   
}

function exibir(json){
    let div = document.querySelector("#menu");
    for(let opc of json.opcoes){
        div.innerHTML += `${opc.id} - ${opc.nome}<br>`;
    }       
}

carregaJSON("json/dados.json");