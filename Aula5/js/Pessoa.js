class Pessoa { 
    constructor(nome, idade, altura) { 
        this.nome = nome; 
        this.idade = idade;
        this.altura = altura;
    } 
    toString(){
        return `Nome: ${this.nome}, Idade: ${this.idade}, Altura: ${this.altura}`;
    }
} 