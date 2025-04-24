document.addEventListener("DOMContentLoaded", function (e) {
    let taskListForms = document.getElementsByClassName("task-list-form");
    for (let i = 0; i < taskListForms.length; i++) {
        taskListForms[i].addEventListener("submit", addTask);
    }

    function addTask(e) {
        e.preventDefault();
        
        console.log("Task added: " + e.target.children[0].value);
        e.target.children[0].value = "";
    }
});
