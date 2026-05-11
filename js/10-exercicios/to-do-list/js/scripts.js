// =======================
// Seleção de Elementos
// =======================
const toDoForm = document.querySelector('#to-do-form');
const toDoInput = document.querySelector('#to-do-input');
const toDoList = document.querySelector('#to-do-list');
const editForm = document.querySelector('#edit-form');
const editInput = document.querySelector('#edit-input');
const cancelBtn = document.querySelector('#cancel-edit-btn');


// =======================
// Funções
// =======================
const saveToDo = (text) => {

    const toDo = document.createElement('div');
    toDo.classList.add('to-do');

    const toDoTitle = document.createElement('h3');
    toDoTitle.innerText = text;
    toDo.appendChild(toDoTitle);

    // Botão concluir
    const doneBtn = document.createElement('button');
    doneBtn.classList.add('finish-to-do');
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    toDo.appendChild(doneBtn);

    // Botão editar
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-to-do');
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    toDo.appendChild(editBtn);

    // Botão excluir
    const exBtn = document.createElement('button');
    exBtn.classList.add('exclude-to-do');
    exBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    toDo.appendChild(exBtn);

    toDoList.appendChild(toDo);

    // limpa input
    toDoInput.value = "";
    toDoInput.focus();
};


// Alterna entre formulário de criação e edição
const toggleForms = () => {
    editForm.classList.toggle('hide');
    toDoForm.classList.toggle('hide');
    toDoList.classList.toggle('hide');
};


// =======================
// Eventos
// =======================

// Criar tarefa
toDoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const value = toDoInput.value;

    if (value) {
        saveToDo(value);
    }
});


// Event Delegation
document.addEventListener('click', (e) => {

    const targetEl = e.target;

    // garante que estamos pegando o container correto da task
    const parentEl = targetEl.closest('.to-do');

    if (!parentEl) return; // evita erro ao clicar fora

    // concluir tarefa
    if (targetEl.classList.contains('finish-to-do')) {
        parentEl.classList.toggle('done');
    }

    // excluir tarefa
    if (targetEl.classList.contains('exclude-to-do')) {
        parentEl.remove();
    }

    // editar tarefa
    if (targetEl.classList.contains('edit-to-do')) {
        toggleForms();
    }
});


// Cancelar edição
cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleForms();
});