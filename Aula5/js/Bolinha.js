export class Bolinha { 
    constructor(cor,x,y,raio) { 
        this.cor = cor; 
        this.x = x;
        this.y = y;
        this.raio = raio;  
    } 
    get bcor() { return this.cor;  }     
    set bcor(valor) { this.cor = valor;  } 
} 
