let getMessage = document.querySelector('.input-line'),
    mainButton = document.querySelector('.btn-mn')
    todo = document.querySelector('.task')
let taskList = [];

if(localStorage.getItem("todo")){
    taskList = JSON.parse(localStorage.getItem("todo"))
    displayMessage();
    getMessage.value = '';
}
else{
    console.log("undef")
}

mainButton.addEventListener('click', function (){
    if (getMessage.value.trim() === '') {
        alert('Пожалуйста заполните пустую строку для дел');
        return;
    }

    let newTask = {
        task: getMessage.value,
        checked: false,
        important: false
    };

    taskList.push(newTask);
    displayMessage();
    localStorage.setItem("todo", JSON.stringify(taskList));
    
})


 function displayMessage() {
    let displayMessage = '';
    taskList.forEach(function(item, i) {
        displayMessage += `
        <div class="taskwrap">
            <div id='item_${i}' class="tasklist">
                ${item.task} 
            </div>
            <button class="taskbtn" onclick="deleteTask(${i})">Delete</button>
        </div>
        `;
    });
    todo.innerHTML = displayMessage;
}

 function deleteTask(index) {
    taskList.splice(index, 1);
    displayMessage();
    localStorage.setItem("todo", JSON.stringify(taskList));
}



//  ${item.checked ? "checked" : ""} 

