// Number - Inteiros e decimais
let inteiro = 42;
let decimal = 3.14;

console.log("Número inteiro:", inteiro);
console.log("Número decimal:", decimal);
console.log("Tipo de inteiro:", typeof inteiro);
console.log("Tipo de decimal:", typeof decimal);

// Operações aritméticas
let soma = inteiro + decimal;
let subtracao = inteiro - decimal;
let multiplicacao = inteiro * decimal;
let divisao = inteiro / decimal;

console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);

// Special numbers
let infinito = Infinity;
let menosInfinito = -Infinity;
let naoNumero = NaN;

console.log("Infinito:", infinito);
console.log("Menos infinito:", menosInfinito);
console.log("NaN (Not a Number):", naoNumero);

// String - Texto
let texto = "Olá, mundo!";
console.log("Texto:", texto);
console.log("Tipo de texto:", typeof texto);

// Operações com strings
let saudacao = "Olá";
let nome = "Alice";
let mensagem = saudacao + ", " + nome + "!";
console.log("Mensagem concatenada:", mensagem);

// Interpolação de strings - String deve estar entre crases (``)
let idade = 30;
let apresentacao = `Meu nome é ${nome} e tenho ${idade} anos.`;
console.log("Apresentação com interpolação:", apresentacao);

// Boolean - Verdadeiro ou falso
let verdadeiro = true;
let falso = false;
console.log("Valor verdadeiro:", verdadeiro);
console.log("Valor falso:", falso);
console.log("Tipo de verdadeiro:", typeof verdadeiro);
console.log("Tipo de falso:", typeof falso);

// Comparações e operadores lógicos
let a = 10;
let b = 20;

console.log("a é maior que b?", a > b);
console.log("a é menor que b?", a < b);
console.log("a é igual a b?", a === b);
console.log("a é diferente de b?", a !== b);
console.log("a é maior ou igual a 10?", a >= 10);
console.log("b é menor ou igual a 20?", b <= 20);

// Operadores lógicos
let condicao1 = true;
let condicao2 = false;

console.log("condicao1 AND condicao2:", condicao1 && condicao2);
console.log("condicao1 OR condicao2:", condicao1 || condicao2);
console.log("NOT condicao1:", !condicao1);

// Tabela Verdade
console.log("Tabela Verdade - AND:");
console.log("true AND true:", true && true);
console.log("true AND false:", true && false);
console.log("false AND true:", false && true);
console.log("false AND false:", false && false);

console.log("Tabela Verdade - OR:");
console.log("true OR true:", true || true);
console.log("true OR false:", true || false);
console.log("false OR true:", false || true);
console.log("false OR false:", false || false);

console.log("Tabela Verdade - NOT:");
console.log("NOT true:", !true);
console.log("NOT false:", !false);

// Null - Representa a ausência intencional de valor
let valorNulo = null;
console.log("Valor nulo:", valorNulo);
console.log("Tipo de valor nulo:", typeof valorNulo);

// Undefined - Variável declarada sem valor
let valorIndefinido;
console.log("Valor indefinido:", valorIndefinido);
console.log("Tipo de valor indefinido:", typeof valorIndefinido);

// NaN - Not a Number, resultado de operações matemáticas inválidas
let resultadoInvalido = 0 / 0;
console.log("Resultado inválido (NaN):", resultadoInvalido);
console.log("Tipo de NaN:", typeof resultadoInvalido);

// Símbolos - Representam identificadores únicos
let simbolo1 = Symbol("descricao");
let simbolo2 = Symbol("descricao");

console.log("Símbolo 1:", simbolo1);
console.log("Símbolo 2:", simbolo2);
console.log("Símbolos são únicos:", simbolo1 === simbolo2);