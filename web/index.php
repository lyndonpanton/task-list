<!DOCTYPE HTML>
<html>
<head>
    <!-- metadata -->
    <meta charset="UTF-8" />
    <meta name="application-name" content="todo" />
    <meta name="author" content="Lyndon Mykal Panton" />
    <meta name="description" content="An application that allows users to add
            items to a todo list. Todo list items can be modified and deleted." />
    <meta name="keywords" content="todo, list, app, management" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0,
            user-scalable=true, minimum-scale=0.25, maximum-scale=4" />

    <!-- title -->
    <title>Todo List</title>

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

            </main>
        </section>
    </section>

    <footer>
        <p id="copyright">
            &copy; <?php echo date("Y"); ?> Lyndon Mykal Panton
            | All Rights Reserved
        </p>
    </footer>
</body>
</html>