var tasks = [];
function addItem() {
  console.log("function running");
  var elem = document.getElementById("newItem");
  console.log("elem", elem);
  var elemObj = {
    taskValue: elem.value,
    taskId: tasks.length + 1,
    checked: false,
  };
  tasks.push(elemObj);
  console.log("tasks", tasks);
  elem.value = "";
  showTodoList();
}
/*function todoListIndex(id){
        let j=tasks.findIndex(task=>{
            return task.taskId==id
        })
        return j
    }*/
function handleCheckEvent(event) {
  let id = event.target.value;
  let elem = document.getElementById(id);
  console.log("checked elem", elem);
  //let j=todoListIndex(id)
  //console.log("j",j)
  if (tasks[id].checked) {
    tasks[id].checked = false;
    elem.classList.remove("done");
  } else {
    tasks[id].checked = true;
    elem.classList.add("done");
  }
  console.log("tasks list", tasks);
}
function deleteTodo(e) {
  console.log("delete e", e.target.value);
  let id = e.target.value;
  //let j=todoListIndex(id)
  tasks.splice(id, 1);
  showTodoList();
}
function editTodo(e) {
  console.log("edit e", e.target.value);
  let id = e.target.value;
  let elem = document.getElementById("newItem");
  elem.value = tasks[id].taskValue;
  let addButton = document.getElementById("buttonAdd");
  addButton.classList.add("displayNone");
  let editButton = document.getElementById("buttonEdit");
  editButton.classList.remove("displayNone");
  editButton.value = id;
  //let j=todoListIndex(id)
}
function editTodoSubmit(e) {
  console.log("edit val", e.target.value);
  let elem = document.getElementById("newItem");
  let id = e.target.value;
  tasks[id].taskValue = elem.value;
  elem.value = "";
  let addButton = document.getElementById("buttonAdd");
  addButton.classList.remove("displayNone");
  let editButton = document.getElementById("buttonEdit");
  editButton.classList.add("displayNone");
  editButton.value = id;
  showTodoList();
}
function showTodoList() {
  let taskListUI = document.getElementById("todoList");
  taskListUI.innerHTML = "";
  tasks.map((task, index) => {
    console.log("task", task);
    let html = `<div id="${index}" class="todoItem"> <input type="checkbox" value="${index}"  onChange="handleCheckEvent(event)"><div class="todoItemContent">  <span class="todoItemDescriptionHeading"> Task:</span> ${task.taskValue} </div><div class="todoItemButton"><button value="${index}" onClick="editTodo(event)" class="todoItemButtonEdit commonRadius">Edit</button> <button value="${index}" onClick="deleteTodo(event)" class="todoItemButtonDelete commonRadius">Delete</button></div></div>`;
    taskListUI.innerHTML = taskListUI.innerHTML + html;
  });
}
