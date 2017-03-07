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
    var todoItem = `<li>${todo.todo}</li>`;
    document.querySelector('.list-group').innerHTML += todoItem;
}

