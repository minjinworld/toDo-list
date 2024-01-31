const todoInput = document.querySelector('#todo-input');


const createTodo = function (storageData) {
    const todoList = document.querySelector('#todo-list');
    const newLi = document.createElement('li');
    const newSpan = document.createElement('span');
    const newBtn = document.createElement('button');

    newBtn.addEventListener('click', () => {
        newLi.classList.toggle('complete');
    });

    newLi.addEventListener('dblclick', () => {
        // dblclick은 더블클릭임
        newLi.remove();
    });

    newSpan.textContent = todoInput.value;
    newLi.appendChild(newBtn);
    newLi.appendChild(newSpan);
    todoList.appendChild(newLi);
    todoInput.value = '';

}

const keyCodeCheck = function () {
    if (window.event.keyCode === 13 && todoInput.value) {
        createTodo();
    }
}
