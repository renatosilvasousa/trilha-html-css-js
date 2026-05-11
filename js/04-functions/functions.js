// Funções em JavaScript

// Funcões são blocos de código reutilizáveis que realizam uma tarefa específica. 
// Elas podem ser definidas pelo usuário ou serem funções nativas do JavaScript.

// Exemplo de função definida pelo usuário
function saudacao(nome) {
    return "Olá, " + nome + "!";
}

// Função dentro de uma variável (função anônima)
const despedida = function(nome) {
    return "Adeus, " + nome + "!";
};

// Função de seta (arrow function)
const multiplicar = (a, b) => a * b;

// Função de seta com corpo de função
const dividir = (a, b) => {
    if (b === 0) {
        return "Erro: divisão por zero!";
    }
    return a / b;
};

// Função de seta sem parâmetros
const saudacaoGeral = () => "Olá a todos!";

// Funções aninhadas
function calcular(a, b) {
    function somar(x, y) {
        return x + y;
    }
    return somar(a, b);
}

calcular(5, 10); // Saída: 15

// Função recursiva
function fatorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * fatorial(n - 1);
}

fatorial(5); // Saída: 120