let todos = [{
    text: "learn JS",
    completed: true
}, {
    text: "need to know NODE",
    completed: false
}, {
    text: "Some workout",
    completed: true
}, {
    text: "Don't forget about JAVA",
    completed: true
}, {
    text: "FIND A FUCKING JOB",
    completed: false
}];

///////////////////////////////////



// object with search value who is need to be filtered
const filters = {
    searchText: ""
}

// make new array with filtered values
const renderedTodos = function(arr, filters){
    const filteredTodos = arr.filter(function(todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    })
    let uncompleteTodo = 0;

    todos.forEach(function(e){
        if(!e.completed){
            uncompleteTodo +=1;
        }
    });

    let summary = document.createElement("h2");
    summary.textContent = `You have ${uncompleteTodo} todos left`
    document.querySelector("#notes").appendChild(summary);

// clear all #notes div
    document.querySelector("#notes").innerHTML = "";

// create new todos
    filteredTodos.forEach(function(el){
        let newTodo = document.createElement("p");
        newTodo.textContent = el.text;
        document.querySelector("#notes").appendChild(newTodo);
    })

}

renderedTodos(todos, filters);

document.querySelector("#pm-btn").addEventListener("click", function(e){
    console.log("Ты жмякнул кнопку, засранец!")
});

document.querySelector("#new-todo-input").addEventListener("input", function(e){
    filters.searchText = e.target.value;    
    renderedTodos(todos, filters);
});


