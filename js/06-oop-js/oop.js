// Orientação a Objetos em Javascript

// Criando um objeto literal
const pessoa = {

    nome: 'Adam',

    idade: 10,

    falar: function() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    },

    getNome: function() {
        return this.nome;
    }

};

pessoa.falar();
console.log(pessoa.getNome());

// Criando uma função construtora - Função como classe
// function Pessoa(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
// }

// Pessoa.prototype.falar = function() {
//     console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
// }

// const pessoa1 = new Pessoa('Eve', 20);
// pessoa1.falar();

// console.log(Object.getPrototypeOf(pessoa1));

// Classes básicas em Javascript
const cachorro = {
    latir: function() {
        console.log(`${this.nome} está latindo!`);
    }
};

const pastorAlemao = Object.create(cachorro);
// pastorAlemao.__proto__ = cachorro; // Outra forma de definir o protótipo
// Herda as propriedades e métodos do objeto cachorro devido ao protótipo

pastorAlemao.nome = 'Rex';
pastorAlemao.latir();

// ES6 - Classes em Javascript
class Cachorro {
    constructor(nome) {
        this.nome = nome;
    }

    latir() {
        console.log(`${this.nome} está latindo!`);
    }
}

const labrador = new Cachorro('Buddy');
labrador.latir();

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    falar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

Pessoa.prototype.nome = 'Desconhecido';
console.log(Pessoa.prototype.nome); // Acessa o nome do protótipo, pois não tem um nome próprio

const pessoa2 = new Pessoa('Charlie', 30);
pessoa2.falar();

// Verificando a cadeia de protótipos
console.log(pessoa2.__proto__ === Pessoa.prototype);

// Criando uma classe que herda de outra
class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    falar() {
        console.log(`${this.nome} faz um som.`);
    }
}

class Gato extends Animal {
    falar() {
        console.log(`${this.nome} diz: Miau!`);
    }
}

const gato = new Gato('Nhoque');
gato.falar();

// Verificando a instância
console.log(gato instanceof Gato); // true
console.log(gato instanceof Animal); // true

// Getters e Setters
class Quadrado {
    constructor(lado) {
        this.lado = lado;
    }
    // Calcula a área de um novo quadrado a partir do valor do lado
    get area() {
        return Math.pow(this.lado, 2);
    }

    // Retorna o valor do lado a partir da área informada diretamente
    set area(valor) {
        this.lado = Math.sqrt(valor);
    }
}

const quadrado = new Quadrado(4);
console.log(quadrado.area);

quadrado.area = 16;
console.log(quadrado.lado);

quadrado.area = 121;
console.log(quadrado.lado);

const quadrado2 = new Quadrado(5);
console.log(quadrado2.area);