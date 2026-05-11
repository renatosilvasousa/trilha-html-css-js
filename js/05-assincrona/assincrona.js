// Programação Assíncrona
// A programação assíncrona é um paradigma de programação que permite que o código seja executado de forma não bloqueante, 
// ou seja, ele pode continuar a executar outras tarefas enquanto aguarda a conclusão de operações demoradas, 
// como chamadas de rede, 
// leitura de arquivos ou temporizadores. Isso é especialmente útil em ambientes como navegadores da web, 
// onde a interface do usuário deve permanecer responsiva.

// setTimeout é uma função que permite agendar a execução de uma função ou trecho de código após um 
// determinado período de tempo.
// // Ela é comumente usada para criar atrasos, 
// // temporizadores ou para executar código de forma assíncrona após um intervalo específico.

// console.log("Início do programa");

// setTimeout(() => {
//     console.log("Esta mensagem é exibida após 4 segundos");
// }, 4000);

// console.log("Fim do programa");

// // setInterval

// // setInterval(() => {
// //     console.log("Essa mensagem se repete de tempos em tempos");
// // }, 2000);

// // Promises

// const d = 2;

// const promessa = Promise.resolve(4 * d);

// promessa.then((value) => {
//     console.log(`A multi é: ${value}`)
//     return value;
// }).then((value) => value - 1).then((value) => console.log(`Agora é ${value}`));

// Async Functions

async function soma(a, b) { // Função Normal mas que retorna uma promisse.
    return a + b;
}

soma(3, 5).then((value) => { // Podemos usar o .then porque como a função retorna uma promisse, retorna também seus métodos.
    console.log(`A soma é ${value}`);
});

soma(19, 3).then((value) => {
    console.log(`Agora é ${value}, isso é executado depois de todo o js síncrono.`);
})

console.log('teste async');

// Async await

function resolveComDelay(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolveu a Promisse");
        }, 4000);
    })
}

async function chamadaAsync() {
    console.log('Chamando a Promisse, esperando o resultado')
    const result = await resolveComDelay(); // await faz com que a const só receba o valor depois que a promisse for resolvida.
    console.log(`O resultado chegou: ${result}`)
}

chamadaAsync();