// Manipulando o DOM com JS
console.log(document.body);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].textContent);
console.log(document.getElementsByTagName("h2"));

// Método getElement - HTML
const list = document.getElementsByTagName("h2")

for(i = 0; i < list.length; i++){
    console.log(list[i].textContent);
}

// Método querySelector - CSS
const selector = document.querySelector('#rodape');
console.log(selector);

// insertBefore

// Cria o span que vai ser inserido
const span = document.createElement('span');
console.log(span);

// Seleciona um elemento que está contido no container que iremos alterar
const pdorodape = document.querySelector('#pdorodape');

// Identificamos o container no qual vamos inserir o span usando seu elemento filho como referência
const footer = pdorodape.parentElement;

// Efetivamente inserimos o span no container identificado
footer.insertBefore(span, pdorodape);

// Adicionamos um valor no span criado
span.textContent = 'Sou um span criado pelo JS!';

// appendChild

// Container identificado
const navlinks = document.querySelector('nav ul');

// Criação do elemento a ser inserido
const li = document.createElement('li');
li.textContent = 'Sou um li criado pelo JS'

// Adição do elemento ao container
navlinks.appendChild(li);

// replaceChild

// Elemento pai responsável por organizar a troca
const container = document.querySelector('#paidotrocaproduto')

// Elemento que vai ser substituido
const trocaproduto = document.querySelector('#trocaproduto')

// Novo elemento a ser inserido
const novoproduto = document.createElement('h2');
novoproduto.textContent = "Esse produto foi inserido por JS"

// Troca dos elementos utilizando elemento pai como organizador
container.replaceChild(novoproduto, trocaproduto);

// createTextNode

const novoTextNode = document.createTextNode("Text node criado com JS");
const novoli2 = document.createElement('li');
novoli2.appendChild(novoTextNode);

console.log(novoli2);

navlinks.appendChild(novoli2);

// getAttribute e setAttribute

const link = document.querySelector('#linkparaalterar');
link.setAttribute('href', 'https://www.google.com');
link.setAttribute('target', '_blank');

console.log(link.getAttribute('href'));


// offSetWidth, offSetHeight e clientWidth, clientHeight (ignora as bordas do elemento)

const quadrado = document.querySelector('#bloco');
console.log(quadrado.clientHeight);
console.log(quadrado.clientWidth);

// getClientBoundingRect

console.log(quadrado.getClientRects);

// Estilos CSS no JS - São todos camelCase

quadrado.style.backgroundColor = 'blue';
quadrado.style.borderRadius = '10px';