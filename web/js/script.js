document.addEventListener("DOMContentLoaded", function (e) {
    /* WHEN THE DOCUMENT HAS LOADED

        - Make a request to the PHP and gather data from the database
        - Populate the main content with the gathered data
    */

    readTaskList();

    let taskListForms = document.getElementsByClassName("task-list-form");
    for (let i = 0; i < taskListForms.length; i++) {
        taskListForms[i].addEventListener("submit", addTask);
    }

    let taskCheckboxes = document.getElementsByClassName("task-checkbox");
    for (let i = 0; i < taskCheckboxes.length; i++) {
        taskCheckboxes[i].addEventListener("click", completeTask);
    }

    let taskInputs = document.getElementsByClassName("task-text");
    for (let i = 0; i < taskInputs.length; i++) {
        taskInputs[i].addEventListener("keypress", updateTaskText);
    }
    
    let taskPens = document.getElementsByClassName("task-update");
    for (let i = 0; i < taskPens.length; i++) {
        taskPens[i].addEventListener("click", toggleTaskEditable);
    }

    let taskCrosses = document.getElementsByClassName("task-delete");
    for (let i = 0; i < taskCrosses.length; i++) {
        taskCrosses[i].addEventListener("click", deleteTask);
    }

    function addTask(e) {
        e.preventDefault();

        let name = e.target.children[0].value;
        let hyphenIndex = e.target.parentElement.id.indexOf("-");
        let categoryString = e.target.parentElement.id.substring(0, hyphenIndex);
        let categoryId;

        switch (categoryString) {
            case "appointment":
                categoryId = 1;
                break;
            case "cooking":
                categoryId = 2;
                break;
            case "entertainment":
                categoryId = 3;
                break;
            case "finance":
                categoryId = 4;
                break;
            case "fitness":
                categoryId = 5;
                break;
            case "shopping":
                categoryId = 6;
                break;
            case "social":
                categoryId = 7;
                break;
            case "study":
                categoryId = 8;
                break;
            case "work":
                categoryId = 9;
                break;
        }

        fetch("form.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            // Send the id and parent task list data as well
            // body: JSON.stringify(e.target.children[0].value)
            body: JSON.stringify({
                // id = AUTO_INCREMENT
                "name": name,
                "categoryId": categoryId,
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
            task.classList.add("task-list-item");

            let completeIcon = document.createElement("i");
            completeIcon.classList.add("fa-solid", "fa-circle", "task-checkbox", "task-unchecked");

            let text = document.createElement("input");
            text.classList.add("task-text");
            text.type = "text";
            text.value = data.name;

            let editElement = document.createElement("article");
            editElement.classList.add("task-edit");

            let updateIcon = document.createElement("i");
            updateIcon.classList.add("fa-solid", "fa-pen", "task-update");

            let deleteIcon = document.createElement("i");
            deleteIcon.classList.add("fa-solid", "fa-circle-xmark", "task-delete");

            editElement.appendChild(updateIcon);
            editElement.appendChild(deleteIcon);

            task.appendChild(completeIcon);
            task.appendChild(text);
            task.appendChild(editElement);
            taskList.appendChild(task);

            e.target.children[0].value = "";
        });
    }

    function completeTask(e) {
        let completeIcon = e.target;

        // Make fetch request and change database...

        // Change content...
        if (completeIcon.classList.contains("fa-circle")) {
            completeIcon.classList.remove("fa-circle");
            completeIcon.classList.add("fa-circle-check");

            completeIcon.classList.remove("task-unchecked");
            completeIcon.classList.add("task-checked");

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
        let task = e.target.parentElement.parentElement;
        task.remove();

        // Make fetch request and change database...
        
        // Change content (remove task)...
    }

    function readTaskList() {
        fetch("get.php", {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        }).then(function (response) {
            // return response.text();
            return response.json();
        }).then(function (data) {
            // Use the response data to populate the document
            console.log(data);
        });
    }

    function toggleTaskEditable(e) {
        // Do not allow if task is complete?...
        
        // Make all other tasks not editable...
        
        // Change content (editable, pen styling, textbox styling)...

        let taskPen;
        let taskInput;

        if (e.target.classList.contains("task-update")) {
            taskPen = e.target;
            taskInput = taskPen.parentElement.parentElement.getElementsByClassName("task-text")[0];
        } else {
            taskPen = e.target.parentElement.getElementsByClassName("task-update")[0];
            taskInput = e.target;
        }

        if (taskInput.readOnly === true) {
            taskInput.readOnly = false;
            taskInput.disabled = false;

            taskInput.classList.add("task-input-editing");
            taskPen.classList.add("task-pen-editing");
        } else {
            taskInput.readOnly = true;
            taskInput.disabled = true;

            taskInput.classList.remove("task-input-editing");
            taskPen.classList.remove("task-pen-editing");

            // Make fetch request and change database...
            // updateTask(e);
        }
    }

    function updateTask(e) {
        // Do not allow submission if task is empty (red outline, popup)...

        // Change content (task text)...
    }

    // Input field key pressed event
    function updateTaskText(e) {
        // Do not allow escape characters, character limit (see database
        // schema)...

        if (e.code == "Enter" && !e.target.readOnly) {
            console.log("Enter key was pressed");
            toggleTaskEditable(e);
            // updateTask(e);
        }
    }
});
