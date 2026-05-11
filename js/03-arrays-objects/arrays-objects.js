// Arrays em JavaScript
const frutas = ["maçã", "banana", "laranja"];
console.log(frutas[0]); // Saída: "maçã"

// Objetos em JavaScript
const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};
console.log(pessoa.nome); // Saída: "João"

// Arrays de objetos
const pessoas = [
    { nome: "Maria", idade: 25 },
    { nome: "Carlos", idade: 35 },
    { nome: "Ana", idade: 28 }
];
console.log(pessoas[1].nome); // Saída: "Carlos"

// Métodos de array
const numeros = [1, 2, 3, 4, 5];
console.log(numeros.length); // Saída: 5
console.log(numeros.includes(3)); // Saída: true
console.log(numeros.indexOf(4)); // Saída: 3
console.log(numeros.push(6)); // Adiciona 6 ao final do array
console.log(numeros); // Saída: [1, 2, 3, 4, 5, 6]
console.log(numeros.pop()); // Remove o último elemento (6)
console.log(numeros); // Saída: [1, 2, 3, 4, 5]

// Métodos de objeto
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
};
console.log(carro.marca); // Saída: "Toyota"
console.log(carro["modelo"]); // Saída: "Corolla"

// Adicionando uma nova propriedade
carro.cor = "preto";
console.log(carro.cor); // Saída: "preto"

// Iterando sobre arrays
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
// Saída:
// "maçã"
// "banana"
// "laranja"

for (const pessoa of pessoas) {
    console.log(pessoa.nome + " tem " + pessoa.idade + " anos.");
}
// Saída:
// "Maria tem 25 anos."
// "Carlos tem 35 anos."
// "Ana tem 28 anos."

// Iterando sobre objetos
for (const chave in carro) {
    console.log(chave + ": " + carro[chave]);
}
// Saída:
// "marca: Toyota"
// "modelo: Corolla"
// "ano: 2020"
// "cor: preto"

// Métodos de array avançados
const numeros2 = [1, 2, 3, 4, 5];
const numerosDobrados = numeros2.map(num => num * 2);
console.log(numerosDobrados); // Saída: [2, 4, 6, 8, 10]
const numerosPares = numeros2.filter(num => num % 2 === 0);
console.log(numerosPares); // Saída: [2, 4]
const soma = numeros2.reduce((total, num) => total + num, 0);
console.log(soma); // Saída: 15

// Métodos de objeto avançados
const chaves = Object.keys(carro);
console.log(chaves); // Saída: ["marca", "modelo", "ano", "cor"]
const valores = Object.values(carro);
console.log(valores); // Saída: ["Toyota", "Corolla", 2020, "preto"]
const entradas = Object.entries(carro);
console.log(entradas); 
// Saída: [["marca", "Toyota"], ["modelo", "Corolla"], ["ano", 2020], ["cor", "preto"]]

// Clonando objetos
const carro2 = { ...carro };
console.log(carro2); // Saída: { marca: "Toyota", modelo: "Corolla", ano: 2020, cor: "preto" }

// Clonando arrays
const numeros3 = [...numeros2];
console.log(numeros3); // Saída: [1, 2, 3, 4, 5]

// Desestruturando arrays
const [primeiro, segundo, ...resto] = numeros2;
console.log(primeiro); // Saída: 1
console.log(segundo); // Saída: 2
console.log(resto); // Saída: [3, 4, 5]

// Desestruturando objetos
const { marca, modelo, ...outrasPropriedades } = carro;
console.log(marca); // Saída: "Toyota"
console.log(modelo); // Saída: "Corolla"
console.log(outrasPropriedades); // Saída: { ano: 2020, cor: "preto" }

// Arrays e objetos são estruturas de dados fundamentais em JavaScript, 
// permitindo armazenar e organizar informações de maneira eficiente. 
// Eles oferecem uma variedade de métodos para manipulação e acesso aos dados, 
// tornando-os essenciais para o desenvolvimento de aplicações web.

// Mutação de arrays e objetos
const arrayOriginal = [1, 2, 3];
const arrayMutado = arrayOriginal;
arrayMutado.push(4);
console.log(arrayOriginal); // Saída: [1, 2, 3, 4]

// Para evitar mutação, podemos criar uma cópia do array
const arrayCopia = [...arrayOriginal];
arrayCopia.push(5);
console.log(arrayOriginal); // Saída: [1, 2, 3, 4]
console.log(arrayCopia); // Saída: [1, 2, 3, 4, 5]

// Por que a mutação pode ser um problema?
// A mutação de arrays e objetos pode levar a bugs difíceis de rastrear, 
// especialmente quando várias partes do código compartilham a mesma referência. 
// Se um array ou objeto for modificado em um lugar, isso pode afetar outras partes do 
// código que dependem dessa estrutura de dados, 
// causando comportamentos inesperados. 
// Por isso, é importante ter cuidado ao manipular arrays e objetos e considerar o 
// uso de cópias para evitar mutações indesejadas.

// Shift e unshift
const numeros4 = [1, 2, 3];
numeros4.unshift(0);

console.log(numeros4); // Saída: [0, 1, 2, 3]
// Remove o primeiro elemento do array
numeros4.shift();

console.log(numeros4); // Saída: [1, 2, 3]
// O método unshift adiciona um ou mais elementos no início do array,
// enquanto o método shift remove o primeiro elemento do array. 
// Ambos os métodos modificam o array original.

// Pop e push
const numeros5 = [1, 2, 3];
numeros5.push(4);
console.log(numeros5); // Saída: [1, 2, 3, 4]
// O método push adiciona um ou mais elementos no final do array,
// enquanto o método pop remove o último elemento do array. 
// Ambos os métodos modificam o array original.
numeros5.pop();
console.log(numeros5); // Saída: [1, 2, 3]
// O método push é usado para adicionar elementos ao final do array,
// enquanto o método pop é usado para remover o último elemento do array. 
// Ambos os métodos alteram o array original, portanto, 
// é importante usá-los com cuidado para evitar mutações indesejadas.