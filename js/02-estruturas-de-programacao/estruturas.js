// Estruturas de Programação em JavaScript

// Variáveis

let nome = "João"; // let permite reatribuição
console.log("Olá, " + nome + "!"); // Saída: Olá, João!
nome = "Maria"; // Reatribuindo a variável nome
console.log("Olá, " + nome + "!"); // Saída: Olá, Maria!

const sobrenome = "Silva"; // const não permite reatribuição
console.log("Sobrenome:", sobrenome);
// sobrenome = "Santos"; // Isso causará um erro, pois const não pode ser reatribuída

// Funções nativas de JavaScript

// Exemplo de função nativa: console.log
console.log("Este é um exemplo de função nativa: console.log");
// Saída: Este é um exemplo de função nativa: console.log

// Exemplo de função nativa: prompt (em ambientes de navegador)
// let idade = prompt("Digite sua idade:");
// console.log("Sua idade é: " + idade); 
// Saída: Sua idade é: [idade digitada pelo usuário]

// Exemplo de função nativa: alert (em ambientes de navegador)
// alert("Esta é uma mensagem de alerta!"); 
// Isso exibirá um alerta com a mensagem "Esta é uma mensagem de alerta!"

// Exemplo de função nativa: Math
let numero = 16;
let raizQuadrada = Math.sqrt(numero);

console.log("A raiz quadrada de " + numero + " é " + raizQuadrada); 
// Saída: A raiz quadrada de 16 é 4

// Exemplo de função nativa: Date
let dataAtual = new Date();
console.log("Data atual:", dataAtual); 
// Saída: Data atual: [data e hora atual]

// Funções do método console

// console.log - já demonstrado acima
console.log("Este é um exemplo de console.log");

// console.error
console.error("Este é um exemplo de console.error");
// Saída: Este é um exemplo de console.error (em vermelho, indicando um erro)

// console.warn
console.warn("Este é um exemplo de console.warn");
// Saída: Este é um exemplo de console.warn (em amarelo, indicando um aviso)

// console.table
let pessoas = [
    { nome: "Alice", idade: 30 },
    { nome: "Bob", idade: 25 },
    { nome: "Charlie", idade: 35 }
];
console.table(pessoas);

// console.time e console.timeEnd
console.time("Tempo de execução");

// Simulando uma operação demorada
for (let i = 0; i < 1000000; i++) {
    // Apenas um loop para consumir tempo
}

console.timeEnd("Tempo de execução");
// Saída: Tempo de execução: [tempo gasto para executar o loop] ms

// console.group e console.groupEnd
console.group("Grupo de mensagens");
console.log("Mensagem 1");
console.log("Mensagem 2");
console.groupEnd();

// Saída:
// Grupo de mensagens
//     Mensagem 1
//     Mensagem 2

// console.count
console.count("Contagem");
console.count("Contagem");

// Saída:
// Contagem: 1
// Contagem: 2

// console.assert
console.assert(1 === 1, "Isso não será exibido, pois a condição é verdadeira");
console.assert(1 === 2, "Isso será exibido, pois a condição é falsa");
// Saída: Isso será exibido, pois a condição é falsa 
// (em vermelho, indicando uma falha de asserção)

// Estruturas de controle

// Estrutura condicional if
let idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você não é maior de idade.");
}

// Estrutura condicional switch
let diaDaSemana = 3;

switch (diaDaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia da semana inválido");
}

// Estrutura de repetição for
for (let i = 0; i < 5; i++) {
    console.log("Contagem: " + i);
}

// Estrutura de repetição while
let contador = 0;
while (contador < 5) {
    console.log("Contagem: " + contador);
    contador++;
}

// Estrutura de repetição do...while
let contadorDoWhile = 0;
do {
    console.log("Contagem: " + contadorDoWhile);
    contadorDoWhile++;
} while (contadorDoWhile < 5);