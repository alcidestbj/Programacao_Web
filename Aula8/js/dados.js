export let titulo = 'Módulo ES6';

export let user={
    name: "admin",
    level: 3,
    date: "12/12/2002"
}

export function setTitulo(t) { 
    titulo = t;
}

export function exibirTitulo(){
    alert(titulo); 
}

export function exibirUser(campo){
    campo.innerHTML = `User: ${user.name}, Date: ${user.date}`; 
}
