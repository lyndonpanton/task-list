<?php
    include("config.php");

    $host = DATABASE_HOST;
    $user = DATABASE_USER;
    $password = DATABASE_PASSWORD;
    $name = DATABASE_NAME;

    $fontawesome = API_FONTAWESOME;
?>

<!DOCTYPE HTML>
<html>
<head>
    <!-- metadata -->
    <meta charset="UTF-8" />
    <meta name="application-name" content="Task List" />
    <meta name="author" content="Lyndon Mykal Panton" />
    <meta name="description" content="An application that allows users to add
            items to a task list. Task list items can be modified and deleted." />
    <meta name="keywords" content="task, tasks, task, tasks, list, app, management" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0,
            user-scalable=true, minimum-scale=0.25, maximum-scale=4" />

    <!-- title -->
    <title>Task List</title>

    <!-- third party -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet">
    <script src=<?php echo "https://kit.fontawesome.com/" . API_FONTAWESOME . ".js"; ?> crossorigin="anonymous"></script>

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="./img/favicon.ico" />

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
                        <li class="main-nav-list-item"><a href="#appointment-task-list">Appointment</a></li>
                        <li class="main-nav-list-item"><a href="#cooking-task-list">Cooking</a></li>
                        <li class="main-nav-list-item"><a href="#entertainment-task-list">Entertainment</a></li>
                        <li class="main-nav-list-item"><a href="#finance-task-list">Finance</a></li>
                        <li class="main-nav-list-item"><a href="#fitness-task-list">Fitness</a></li>
                        <li class="main-nav-list-item"><a href="#shopping-task-list">Shopping</a></li>
                        <li class="main-nav-list-item"><a href="#social-task-list">Social</a></li>
                        <li class="main-nav-list-item"><a href="#study-task-list">Study</a></li>
                        <li class="main-nav-list-item"><a href="#work-task-list">Work</a></li>
                    </ul>
                </nav>
            </aside>
        </section>

        <section id="column-right" class="app-column">
            <header>
                <!-- Hamburger icon on smaller screen sizes -->
                <!-- <i id="hamburger" class="fa-solid fa-bars" tabindex="1"></i> -->
                <h1>Task List</h1>
            </header>

            <main>
                <article id="appointment-task-list" class="task-list">
                    <h2>Appointment</h2>

                    <form action="./" method="POST" class="task-list-form">
                        <input
                        type="text"
                        class="task-list-input"
                        name="task-list-input"
                        placeholder="Add item..." />
                        <!-- Change to plus icon? -->
                        <input
                            type="submit"
                            class="task-list-submit"
                            value="Add" />
                    </form>

                    <ul>
                        
                    </ul>
                </article>
                <article id="cooking-task-list" class="task-list">
                    <h2>Cooking</h2>

                    <form action="./" method="POST" class="task-list-form">
                        <input
                        type="text"
                        class="task-list-input"
                        name="task-list-input"
                        placeholder="Add item..." />
                        <!-- Change to plus icon? -->
                        <input
                            type="submit"
                            class="task-list-submit"
                            value="Add" />
                    </form>

                    <ul>
                        
                    </ul>
                </article>
                <article id="entertainment-task-list" class="task-list">
                    <h2>Entertainment</h2>

                    <form action="./" method="POST" class="task-list-form">
                        <input
                        type="text"
                        class="task-list-input"
                        name="task-list-input"
                        placeholder="Add item..." />
                        <!-- Change to plus icon? -->
                        <input
                            type="submit"
                            class="task-list-submit"
                            value="Add" />
                    </form>

                    <ul>
                        
                    </ul>
                </article>
                <article id="finance-task-list" class="task-list">
                    <h2>Finance</h2>

                    <form action="./" method="POST" class="task-list-form">
                        <input
                        type="text"
                        class="task-list-input"
                        name="task-list-input"
                        placeholder="Add item..." />
                        <!-- Change to plus icon? -->
                        <input
                            type="submit"
                            class="task-list-submit"
                            value="Add" />
                    </form>

                    <ul>
                        
                    </ul>
                </article>
                <article id="fitness-task-list" class="task-list">
                    <h2>Fitness</h2>

                    <form action="./" method="POST" class="task-list-form">
                        <input
                        type="text"
                        class="task-list-input"
                        name="task-list-input"
                        placeholder="Add item..." />
                        <!-- Change to plus icon? -->
                        <input
                            type="submit"
                            class="task-list-submit"
                            value="Add" />
                    </form>

                    <ul>
                        
                    </ul>
                </article>
                <article id="shopping-task-list" class="task-list">
                    <h2>Shopping</h2>

                    <form action="./" method="POST" class="task-list-form">
                        <input
                        type="text"
                        class="task-list-input"
                        name="task-list-input"
                        placeholder="Add item..." />
                        <!-- Change to plus icon? -->
                        <input
                            type="submit"
                            class="task-list-submit"
                            value="Add" />
                    </form>

                    <ul>
                        
                    </ul>
                </article>
                <article id="social-task-list" class="task-list">
                    <h2>Social</h2>

                    <form action="./" method="POST" class="task-list-form">
                        <input
                        type="text"
                        class="task-list-input"
                        name="task-list-input"
                        placeholder="Add item..." />
                        <!-- Change to plus icon? -->
                        <input
                            type="submit"
                            class="task-list-submit"
                            value="Add" />
                    </form>

                    <ul>
                        
                    </ul>
                </article>
                <article id="study-task-list" class="task-list">
                    <h2>Study</h2>

                    <form action="./" method="POST" class="task-list-form">
                        <input
                        type="text"
                        class="task-list-input"
                        name="task-list-input"
                        placeholder="Add item..." />
                        <!-- Change to plus icon? -->
                        <input
                            type="submit"
                            class="task-list-submit"
                            value="Add" />
                    </form>

                    <ul>
                        
                    </ul>
                </article>
                <article id="work-task-list" class="task-list">
                    <h2>Work</h2>

                    <form action="./" method="POST" class="task-list-form">
                        <input
                        type="text"
                        class="task-list-input"
                        name="task-list-input"
                        placeholder="Add item..." />
                        <!-- Change to plus icon? -->
                        <input
                            type="submit"
                            class="task-list-submit"
                            value="Add" />
                    </form>

                    <ul>
                        
                    </ul>
                </article>
            </main>
        </section>
    </section>

    <footer>
        <section id="developer">
            <ul id="profiles" class="developer-list">
                <li class="developer-list-item developer-list-item-heading">Developer Information</li>
                <li class="developer-list-item">
                    <a href="https://www.linkedin.com/in/lyndonpanton/" target="_blank">LinkedIn</a>
                </li>
                <li class="developer-list-item">
                    <a href="https://github.com/lyndonpanton" target="_blank">GitHub</a>
                </li>
                <li class="developer-list-item">
                    <a href="https://lyndonpanton.co.uk/" target="_blank">Website</a>
                </li>
            </ul>
            <ul id="languages" class="developer-list">
                <li class="developer-list-item developer-list-item-heading">Languages and Frameworks</li>
                <li class="developer-list-item">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">HTML</a>
                </li>
                <li class="developer-list-item">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS</a>
                </li>
                <li class="developer-list-item">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">JavaScript</a>
                </li>
                <li class="developer-list-item">
                    <a href="https://www.php.net/" target="_blank">PHP</a>
                </li>
                <li class="developer-list-item">
                    <a href="https://www.mysql.com/" target="_blank">MySQL</a>
                </li>
            </ul>
            <ul id="libraries" class="developer-list">
                <li class="developer-list-item developer-list-item-heading">Libraries and Packages</li>
                <li class="developer-list-item">
                    <a href="https://fontawesome.com/" target="_blank">Fontawesome</a>
                </li>
                <li class="developer-list-item">
                    <a href="https://fonts.google.com/" target="_blank">Google Fonts</a>
                </li>
                <!-- https://favicon.io/favicon-generator/ -->
                <li class="developer-list-item">
                    <a href="" target="_blank">Favicon.io</a>
                </li>
            </ul>
            <ul id="projects" class="developer-list">
                <li class="developer-list-item developer-list-item-heading">More Projects</li>
                <li class="developer-list-item">
                    <a href="https://github.com/lyndonpanton/portfolio" target="_blank">Portfolio</a>
                </li>
                <li class="developer-list-item">
                    <a href="https://github.com/lyndonpanton/task-list" target="_blank">Task List</a>
                </li>
                <li class="developer-list-item">
                    <a href="#">???</a>
                </li>
                <li class="developer-list-item">
                    <a href="#">???</a>
                </li>
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
