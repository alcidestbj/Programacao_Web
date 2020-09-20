let campo_div = document.querySelector("#data_atual");

function getDiaSemana(v){
    switch(v){
        case 0: return "Domingo";
        case 1: return "Segunda-feira";
        case 2: return "Terça-feira";
        case 3: return "Quarta-feira";
        case 4: return "Quinta-feira";
        case 5: return "Sexta-feira";
        case 6: return "Sábado";
    }
}

function getMes(v){
    switch(v){
        case 0: return "Janeiro";
        case 1: return "Fevereiro";
        case 2: return "Março";
        case 3: return "Abril";
        case 4: return "Maio";
        case 5: return "Junho";
        case 6: return "Julho";
        case 7: return "Agosto";
        case 8: return "Setembro";
        case 9: return "Outubro";
        case 10: return "Novembro";
        case 11: return "Dezembro";
    }
}

let data_hora = new Date();
campo_div.innerHTML = `<h1>${getDiaSemana(data_hora.getDay())}</h1>`;
campo_div.innerHTML += "São Paulo, " + data_hora.getDate() +
                       " de " + getMes(data_hora.getMonth()) + 
                       " de " + data_hora.getFullYear();
