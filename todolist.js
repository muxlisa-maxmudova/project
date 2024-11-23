const todo = []
renderTodo()
function renderTodo (){
    let todoListHTML = ''
    for (let i = 0; i<todo.length; i++){
        const list = todo[i]
        const html = `<p>${list}</p>`
        todoListHTML += html
    }
    console.log(todoListHTML)

    document.querySelector('.to-do').innerHTML = todoListHTML

}

function adder (){
    const input = document.querySelector('.input');
    const name = input.value;
    todo.push(name)
    console.log(todo)
    input.value = ''
    renderTodo()
}
