// Get all to dos

getTodos();

function getTodos() {
    
    fetch('http://localhost:3000/todos')
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response);

         document.querySelector('.list-group').innerHTML = '';
         response.forEach(function(todo) {
             showTodo(todo)
         })

    })
}

function showTodo(todo) {
    var todoItem = `<li class="list-group-item">${todo.todo}</li>`;
    document.querySelector('.list-group').innerHTML += todoItem;
}

// Post new to do 

document.querySelector('#new-todo-button').addEventListener('click', addTodo)

function addTodo() {
    var newTodo = document.querySelector('#new-todo').value;
    console.log(newTodo);

    fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            todo: newTodo,
        })
    })

        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);
        })
}