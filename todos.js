var listElement = document.querySelector('.app ul');
var inputElement = document.querySelector('.app input');
var buttonElement = document.querySelector('.app button');

var todos = ['java', 'ruby', 'kotlin', 'elixir'];

function renderTodos() {
    listElement.innerHTML = '';
    
    todos.forEach(todo => {
        var li = document.createElement('li');
        li.innerHTML = `${todo}`;

        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';

        var id = todos.indexOf(todo);
        deleteButton.setAttribute('onclick', `deleteTodo(${id})`)

        listElement.appendChild(li);
        li.appendChild(deleteButton);
    })

}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;
    todos.push(todoText);    
    inputElement.value = '';

    renderTodos();
}

buttonElement.onclick = addTodo;

function deleteTodo(id) {
    todos.splice(id, 1);
    renderTodos();
}
