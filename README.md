# Task List

## Description

An application that allows users to add items to a task list. Task list items
can be modified and deleted.

## Getting Started

### Downloading The Project

The project can be downloaded from
[GitHub](https://github.com/lyndonpanton/task-list) using the **Code** button
and then unzipped onto the user's computer for use.

### Configuring The Database Application

The latest version of [MySQL
Workbench](https://dev.mysql.com/downloads/workbench/) can be downloaded from
its website.

1. Complete the application's installation process
2. Create a new user with the username **root** and a password of your choosing
(note that the application may not allow certain special characters in user
passwords)
3. Access a connection using the new user
4. Create a new database called `task_database`
5. In `task_database`, create a new table called `categories` with the following
columns
    - `id: int AUTO_INCREMENT PRIMARY_KEY`
    - `name: varchar(40)`
6. In `task_database`, create a new table called `tasks` with the following
columns
    - `id: int AUTO_INCREMENT PRIMARY_KEY`
    - `name: varchar(80)`
    - `category_id: int`
    - `is_complete: bit(1)`
7. Make the `tasks.category_id` column have `categories.id` as a foreign key
8. Add the following rows to the `categories` table
    - `id: 1`, `name: appointment`
    - `id: 2`, `name: cooking`
    - `id: 3`, `name: entertainment`
    - `id: 4`, `name: finance`
    - `id: 5`, `name: fitness`
    - `id: 6`, `name: shopping`
    - `id: 7`, `name: social`
    - `id: 8`, `name: study`
    - `id: 9`, `name: work`

### Configuring the Server Application

The latest version of [XAMPP](https://www.apachefriends.org/) can be downloaded
from its website.

1. Complete the application's installation proocess
2. Start the **Apache** module (the port should be 8000)
3. Start the **MySQL** module (the port should be 8001)

### Defining the Project Database Information

1. In the web version of the project, create a `config.php` file
2. In `config.php`, add the following contents, define the `DATABASE_USER` as
"root" and the `DATABASE_PASSWORD` as the password you used to create the MySQL
Workbench user [previously](#configuring-the-database-application). You can also
set the `API_FONTAWESOME` to a 10-digit fontawesome API key is you have one,
otherwise, leave it as "...".

```php
<?php
    define("DATABASE_HOST", "localhost");
    define("DATABASE_USER", "...");
    define("DATABASE_PASSWORD", "...");
    define("DATABASE_NAME", "task_database");

    define("API_FONTAWESOME", "...")
>
```

### Starting The Application

1. In your brownser, access the web version of the application using the
relevant route on localhost:8000
2. You can now view and interact with the application

## Features

## Technology

- Frontend: HTML, CSS, JavaScript
- Server: PHP
- Database: MySQL

## Credits

- [Main developer](https://github.com/lyndonpanton)

## References
