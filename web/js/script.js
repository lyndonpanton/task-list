document.addEventListener("DOMContentLoaded", function (e) {
    /* WHEN THE DOCUMENT HAS LOADED

        - Make a request to the PHP and gather data from the database
        - Populate the main content with the gathered data
    */
    let taskListForms = document.getElementsByClassName("task-list-form");
    for (let i = 0; i < taskListForms.length; i++) {
        taskListForms[i].addEventListener("submit", addTask);
    }

    let taskCheckboxes = document.getElementsByClassName("task-checkbox");
    for (let i = 0; i < taskCheckboxes.length; i++) {
        taskCheckboxes[i].addEventListener("click", completeTask);
    }

    let taskPens = document.getElementsByClassName("task-update");
    for (let i = 0; i < taskPens.length; i++) {
        taskPens[i].addEventListener("click", changeTask);
    }

    let taskCrosses = document.getElementsByClassName("task-delete")
    for (let i = 0; i < taskCrosses.length; i++) {
        taskCrosses[i].addEventListener("click", deleteTask);
    }

    function addTask(e) {
        e.preventDefault();

        fetch("form.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            // Send the id and parent task list data as well
            // body: JSON.stringify(e.target.children[0].value)
            body: JSON.stringify({
                // id = AUTO_INCREMENT
                "name": e.target.children[0].value,
                "categoryId": "3",
                // is_complete = false
            })
        }).then(function (response) {
            // simple data "echoed" from the php file
            // return response.text();
            // object data "echoed" from the php file
            return response.json();
        }).then(function (data) {
            // Determine which task list to add the task to...

            let taskList = e.target.parentElement.children[2];
            let task = document.createElement("li");
            let text = document.createTextNode(data.name);

            task.appendChild(text);
            taskList.appendChild(task);

            e.target.children[0].value = "";
        });
    }

    function changeTask(e) {
        // Make fetch request...

        // Change UI...
    }

    function completeTask(e) {
        let completeIcon = e.target;
        // Make fetch request...

        // Change UI...
        if (completeIcon.classList.contains("fa-circle")) {
            // Change icon
            completeIcon.classList.remove("fa-circle");
            completeIcon.classList.add("fa-circle-check");

            // Change icon class
            completeIcon.classList.remove("task-unchecked");
            completeIcon.classList.add("task-checked");

            // Change sibling font
            completeIcon.parentElement.getElementsByClassName("task-text")[0].classList.add("task-text-faded");
            
        } else {
            completeIcon.classList.remove("fa-circle-check");
            completeIcon.classList.add("fa-circle");
            
            completeIcon.classList.remove("task-checked");
            completeIcon.classList.add("task-unchecked");
            
            completeIcon.parentElement.getElementsByClassName("task-text")[0].classList.remove("task-text-faded");
        }
    }

    function deleteTask(e) {
        // Make fetch request...
        
        // Change UI...
    }
});
