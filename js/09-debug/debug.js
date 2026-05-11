"use strict"; // O modo estrito é uma forma de optar por um comportamento mais rigoroso do JavaScript, 
// ajudando a evitar erros comuns e melhorando a segurança do código.

// opa = "ó eu sou um debug"; //opa = "ó eu sou um debug"; // isso é um erro, opa não foi declarado
// console.log(opa);

// Forma Correta:
let opa2 = "ó eu sou um debug";
console.log(opa2);

// Console é uma ferramenta de depuração que permite exibir informações no console do navegador ou do ambiente de desenvolvimento.
// Ele é comumente usado para exibir mensagens, variáveis, erros e outros dados úteis durante o processo de desenvolvimento e 
// depuração de código. 
// O console é uma parte essencial do processo de depuração, 
// permitindo que os desenvolvedores monitorem o comportamento do código e identifiquem problemas.

// A palavra-chave "debugger" é usada para pausar a execução do código em um ponto específico, 
// permitindo que o desenvolvedor inspecione o estado do programa e identifique problemas.
// Quando o código atinge a linha com "debugger", a execução é interrompida, e o desenvolvedor pode usar as ferramentas de 
// depuração do navegador para examinar variáveis, pilha de chamadas e outros aspectos do programa. 
// Isso é útil para identificar erros, entender o fluxo do código e otimizar o desempenho.

// Tratamento de Dados por função:
function processarDados(dados) {
    console.log("Processando dados:", dados);
    // Aqui você pode adicionar lógica para processar os dados conforme necessário
}

let dadosExemplo = { nome: "João", idade: 30 };
processarDados(dadosExemplo);

// Exceptions

// let numero = 10;

// if (numero > 5) {
//     throw new Error("O número é maior que 5!"); // A palavra-chave "throw" é usada para lançar uma exceção, ou seja, 
//     // um erro que interrompe o fluxo normal do programa.
// }

// Try catch

 let valor1 = 10;

try {
    const resultado = valor1 + valor2;
    console.log("Resultado:", resultado);
} catch (error) {
    console.error("Ocorreu um erro:", error.message);
} finally {
    console.log("Bloco finally executado.");
}