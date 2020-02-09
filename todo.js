alert("Bem-Vindo!");

var divapp = document.querySelector('#app');
var listElement = document.createElement('ul');
var inputElement = document.createElement("input");
var buttonElement = document.createElement("button");
var addText = document.createTextNode("Adicionar");

buttonElement.appendChild(addText);
divapp.appendChild(listElement);
divapp.appendChild(inputElement);
divapp.appendChild(buttonElement);

var todos1 = [
    'Item 1',
    'Item 2',
    'Item 3'
];

var todos = JSON.parse(localStorage.getItem('list_todos')) || todos1;

function renderTodos(){
    
    listElement.innerHTML = "";

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var excludeElement = document.createElement('a');
        excludeElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        excludeElement.setAttribute('onclick','deleteTodo(' + pos + ')');

        var excludeText = document.createTextNode('Excluir');
        excludeElement.appendChild(excludeText);
        
        todoElement.appendChild(todoText);
        todoElement.appendChild(excludeElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = "";
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos,1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));

}