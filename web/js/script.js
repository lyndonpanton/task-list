document.addEventListener("DOMContentLoaded", function (e) {
    let taskListForms = document.getElementsByClassName("task-list-form");

    for (let i = 0; i < taskListForms.length; i++) {
        taskListForms[i].addEventListener("submit", addTask);
    }

    function addTask(e) {
        e.preventDefault();

        let taskList = e.target.parentElement.children[2];
        let task = document.createElement("li");
        let text = document.createTextNode(
            e.target.children[0].value
        );

        task.appendChild(text);
        taskList.appendChild(task);

        console.log("Task added: " + e.target.children[0].value);
        e.target.children[0].value = "";
    }
});
