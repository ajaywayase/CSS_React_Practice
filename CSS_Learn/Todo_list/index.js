const addButton = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


addButton.addEventListener('click', addTask);

document.addEventListener("DOMContentLoaded", loadTasks);

function addTask(){
    const task = taskInput.value.trim();
    
    if(task){
        createTaskElement(task);
        taskInput.value = "";
        saveTasks();
    }
    else{
        alert("please enter the task");
    }
}

function createTaskElement(task){

    const listItem = document.createElement('li');
    listItem.textContent = task;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
    deleteButton.addEventListener("click", () => {
        taskList.removeChild(listItem);
        saveTasks();
    });



}


function saveTasks(){

    let tasks = [];

    taskList.querySelectorAll("li").forEach((item) => {
        tasks.push(item.childNodes[0].textContent.trim());
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

function loadTasks(){

    const tasks = JSON.parse(localStorage.getItem("tasks"));

    tasks.forEach((task) => {
        createTaskElement(task);
    })
}