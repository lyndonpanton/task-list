<?php
    include("config.php");

    $host = DATABASE_HOST;
    $user = DATABASE_USER;
    $password = DATABASE_PASSWORD;
    $name = DATABASE_NAME;

    // Is there a GET request?
    if (isset($_GET)) {
        $conn = new mysqli($host, $user, $password, $name);

        $statement = "SELECT name, category_id, is_complete FROM tasks";
        $result = $conn->query($statement);

        if ($result == TRUE) {
            $tasks = mysqli_fetch_all($result, MYSQLI_ASSOC);
            echo json_encode($tasks);
            // print_r($tasks);
        }

        // if (mysqli_num_rows($result) > 0) {
        //     while ($row = mysqli_fetch_assoc($result)) {
        //         echo $row["username"] . ": " . $row["email"] . "<br />";
        //     }
        // }
    }
?>
