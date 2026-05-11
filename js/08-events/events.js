// Eventos em JS

// Adicionando eventos
const btn = document.querySelector('#my-button');

btn.addEventListener('click', function(){
    console.log("Clicou aqui!");
})

// Removendo eventos
const btn2 = document.querySelector('#my-button2');

function exibirMensagem(){
    console.log('Exibindo a mensagem')
}

// function exibirMensagem sem (), caso contrário ela será executada automaticamente
btn2.addEventListener('click', exibirMensagem);

const btn3 = document.querySelector('#my-button3');

btn3.addEventListener('click', () => {
    console.log('Removendo o evento...');
    // Pressionar o btn2 não aciona mais o evento.
    btn2.removeEventListener('click', exibirMensagem);
})

// Argumento do evento
const title = document.querySelector('#my-title');

title.addEventListener('click', (event) => {
    console.log(event);
    console.log(event.pointerType);
    console.log(event.target);
});

// Propagação de eventos
const btnContainer = document.querySelector('#btn-container');

btnContainer.addEventListener('click', () => {
    console.log('Evento 1');
})

const btn4 = document.querySelector('#btn-indiv');

btn4.addEventListener('click', (event) => {
    // 'Evento' precisa parar a propagação para que o botão não acione o evento da div na qual ele está inserido
    event.stopImmediatePropagation();
    console.log('Evento 2');
})

// Ações Default
const deflink = document.querySelector('#deflink');

deflink.addEventListener('click', (event) => {
    // preventDefault remove a função default do link, só o evento irá funcionar ao clique do mouse
    event.preventDefault();
    console.log('Link não funciona, só o console.log.');
})

// Evento de teclado

// Keyup

document.addEventListener('keyup', (event) => {
    console.log(`Soltou a trecla ${event.key}`);
});

// Keydown

document.addEventListener('keydown', (event) => {
    console.log(`Pressionou a trecla ${event.key}`);
});

// Eventos de Mouse
const mousearea = document.querySelector('#mousearea');

mousearea.addEventListener('mousedown', () => {
    console.log('Pressionou o botão do mouse.')
});

mousearea.addEventListener('mouseup', () => {
    console.log('Soltou o botão do mouse.')
});

mousearea.addEventListener('dblclick', () => {
    console.log('Clicou duas vezes o botão do mouse.')
});

document.addEventListener('mousemove', (event) => {
    // console.log(`No eixo X: ${event.x}`)
    // console.log(`No eixo Y: ${event.y}`)
});

// Evento de scroll
window.addEventListener('scroll', (event) => {
    if(window.pageYOffset > 200){
        console.log('As coisas vão ficar escuras agora.');
    }
});

// Evento de Foco
const myinput = document.querySelector('#my-input');

myinput.addEventListener('focus', (event) => {
    console.log('Entrou no input.')
});

myinput.addEventListener('blur', (event) => {
    console.log('Saiu no input.')
});

// Eventos de carregamento de página

window.addEventListener('load',() => {
    console.log('A página carregou!')
});

// Muito abusivo, uso muito pontual, cautela.
// window.addEventListener('beforeunload',(event) => {
//     event.preventDefault();
// });

// Debounce - Ferramenta usada para controlar o fluxo de eventos

const debounce = (f, delay) => {
    let timeout;

    return (...arguments) => {
        if(timeout){
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            f.apply(arguments);
        }, delay);
    };
};