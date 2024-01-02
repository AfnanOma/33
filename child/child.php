<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Child Login</title>
    <link rel="stylesheet" type="text/css" href="child.css">
</head>

<body>

    <div class="login-container">
        <div class="image-bottom-right">
            <img src="../images/right_image.png" alt="Bottom Right Image">
        </div>
        <div class="image-top-left">
            <img src="../images/left_image.png" alt="Top Left Image">
        </div>
        
        <?php
        // Start of PHP code
        
        // Enable error reporting
        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        error_reporting(E_ALL);

        // Database connection parameters
        $servername = "localhost";
        $username = "root";
        $password = ""; // No password in your case
        $dbname = "proj_database";

        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Handle form submission
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Sanitize input to prevent SQL injection
            $child_name = mysqli_real_escape_string($conn, $_POST["username"]);
            $child_age = mysqli_real_escape_string($conn, $_POST["password"]);

            // Insert data into the database
            $sql = "INSERT INTO child_table (name, age) VALUES ('$child_name', '$child_age')";

            echo "SQL Query: " . $sql . "<br>"; // Output the SQL query for debugging
            
            if ($conn->query($sql) === TRUE) {
                // Redirect to childHome.html
                header("Location: childHome.html");
                exit(); // Ensure that no other code is executed after the redirect
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        }

        // Close the database connection
        $conn->close();

        // End of PHP code
        ?>
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">


            <h2>تسجيل دخول</h2>
            <label for="username">ادخل الاسم</label>
            <input type="text" id="username" name="username" required>
        
            <label for="password">ادخل عمرك</label>
            <input type="password" id="password" name="password" required>
        
            <button type="submit">دخول</button>
        </form>
    </div>

</body>

</html>
