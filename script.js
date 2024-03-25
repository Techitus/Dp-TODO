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
    listItem.className = task.completed? "completed" : "";
    listItem.onclick = function(){
        toggleCompleted(task)
    }
todoList.appendChild(listItem)
})
updateAggregrate()

}
function toggleCompleted(task){
    task.completed =!task.completed;
    updateTodoList()
}
function updateAggregrate(){
    var totalTasks = document.getElementById("totalTasks")
    var completedTasks = document.getElementById("completedTasks")
    var total = tasks.length
  var completed =   tasks.reduce((acc,task)=>{
return task.completed ? acc + 1 : acc
    },0)
    totalTasks.textContent = total
    completedTasks.textContent = completed
}
    function filterTasks(){
        var searchInput = document.getElementById('searchInput')
        var searchValue = searchInput.value.toLowerCase()
       var filteredTasks=  tasks.filter((task)=>{
            return task.text.toLowerCase().includes(searchValue)
        })
        updateTodoListWithFilterTasks(filteredTasks)

    }
    

function updateTodoListWithFilterTasks(filteredTasks){
    const todoList = document.getElementById('todoList')
    todoList.textContent = ""
    filteredTasks.forEach((task)=>{
        var listItem = document.createElement('li')
        listItem.textContent = task.text;
        listItem.className = task.completed? "completed" : "";
        listItem.onclick = function(){
            toggleCompleted(task)
        }
    todoList.appendChild(listItem)
    })
    updateAggregrate()
}