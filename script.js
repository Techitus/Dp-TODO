var tasks = []
function addTask(){
    var taskInput= document.querySelector('#todoInput');
  var  taskValue = taskInput.value

    if(taskValue.trim() !== ""){
        tasks.push({
            text: taskValue,
            completed : false
        })
        taskInput.value = ""
    updateTodoList()
    }
    
}

function updateTodoList(){
const todoList = document.getElementById('todoList')
todoList.textContent = ""
tasks.forEach((task)=>{
    var listItem = document.createElement('li')
    listItem.textContent = task.text;
todoList.appendChild(listItem)
})
}