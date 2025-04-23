<!DOCTYPE HTML>
<html>
<head>
    <!-- metadata -->
    <meta charset="UTF-8" />
    <meta name="application-name" content="todo" />
    <meta name="author" content="Lyndon Mykal Panton" />
    <meta name="description" content="An application that allows users to add
            items to a task list. Task list items can be modified and deleted." />
    <meta name="keywords" content="task, tasks, todo, todos, list, app, management" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0,
            user-scalable=true, minimum-scale=0.25, maximum-scale=4" />

    <!-- title -->
    <title>Task List</title>

    <!-- third party -->
    <!-- { Font awesome API key } -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet">

    <!-- first party -->
    <link rel="stylesheet" type="text/css" href="./css/desktop.css" />
    <link rel="stylesheet" type="text/css" href="./css/laptop.css" />
    <link rel="stylesheet" type="text/css" href="./css/tablet.css" />
    <link rel="stylesheet" type="text/css" href="./css/mobile.css" />
    <script type="text/javascript" src="./js/script.js"></script>
</head>
<body>
    <section>
        <section id="column-left" class="app-column">
            <aside>
                <nav id="main-nav">
                    <ul id="main-nav-list">
                        <li class="main-nav-list-item">All</li>
                        <li class="main-nav-list-item">Appointment</li>
                        <li class="main-nav-list-item">Cooking</li>
                        <li class="main-nav-list-item">Finance</li>
                        <li class="main-nav-list-item">Fitness</li>
                        <li class="main-nav-list-item">Shopping</li>
                        <li class="main-nav-list-item">Social</li>
                        <li class="main-nav-list-item">Study</li>
                        <li class="main-nav-list-item">Work</li>
                    </ul>
                </nav>
            </aside>
        </section>

        <section id="column-right" class="app-column">
            <header>
                <!-- Hamburger icon on smaller screen sizes -->
                <h1>Todo List</h1>
            </header>

            <main>
                <article id="appointment-todo-list" class="todo-list">
                    <h2>Appointment</h2>

                    <!-- Add a plus icon -->
                    <input
                        type="text"
                        class="todo-list-input"
                        name="todo-list-input"
                        placeholder="Add item..." />

                    <ul>
                        <li>Wash the dishes</li>
                        <li>Do the laundry</li>
                        <li>Walk the dog</li>
                        <li>Buy some flour</li>
                        <li>Go for a run</li>
                    </ul>
                </article>
            </main>
        </section>
    </section>

    <footer>
        <section id="developer">
            <ul id="profiles" class="developer-list">
                <li class="developer-list-item developer-list-item-heading">Developer Information</li>
                <li class="developer-list-item">LinkedIn</li>
                <li class="developer-list-item">GitHub</li>
                <li class="developer-list-item">Website</li>
            </ul>
            <ul id="languages" class="developer-list">
                <li class="developer-list-item developer-list-item-heading">Languages and Frameworks</li>
                <li class="developer-list-item">HTML</li>
                <li class="developer-list-item">CSS</li>
                <li class="developer-list-item">JavaScript</li>
                <li class="developer-list-item">PHP</li>
                <li class="developer-list-item">MySQL</li>
            </ul>
            <ul id="libraries" class="developer-list">
                <li class="developer-list-item developer-list-item-heading">Libraries and Packages</li>
                <li class="developer-list-item">Fontawesome</li>
                <li class="developer-list-item">Google Fonts</li>
            </ul>
            <ul id="projects" class="developer-list">
                <li class="developer-list-item developer-list-item-heading">More Projects</li>
                <li class="developer-list-item">Portfolio</li>
                <li class="developer-list-item">Todo</li>
                <li class="developer-list-item">???</li>
                <li class="developer-list-item">???</li>
            </ul>
        </section>
        <p id="social">
            <p id="social-left">

            </p>
            <p id="social-right">

            </p>
        </p>
        <p id="copyright">
            &copy; <?php echo date("Y"); ?> Lyndon Mykal Panton
            | All Rights Reserved
        </p>
    </footer>
</body>
</html>
