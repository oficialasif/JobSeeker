<?php
session_start();
include "connection.php"; // Include your database connection file

// Check if the user is logged in
if (!isset($_SESSION['username'])) {
    header("Location: index.php"); // Redirect to login if not logged in
    exit;
}

// Fetch user data from the database (with prepared statement)

$username = $_SESSION['username'];
$stmt = $conn->prepare("SELECT * FROM `tbl_user` WHERE username = ?"); // Prepared statement
$stmt->bind_param("s", $username); // Bind the username parameter
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

// Handle form submission (if you want to allow updates)
if (isset($_POST['update'])) {
    // ... (Input validation and database update logic with prepared statements)
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Profile</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .profile-container {
            max-width: 600px; /* Adjust as needed */
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        h2 {
            text-align: center;
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin-bottom: 5px;
        }

        input[type="text"],
        input[type="email"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
        }

        input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
        }

        .logout-btn {
            display: block; /* Make it a block element */
            text-align: center;
            margin-top: 20px;
            background-color: #f44336; /* Red background */
            color: white;
            padding: 10px 20px;
            border: none;
            text-decoration: none;
        }
    </style>
    </head>
<body>
    <h2>Profile</h2>

    <form method="post" action="">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" value="<?php echo $user['name']; ?>"><br><br>

        <label for="username">Username:</label>
        <input type="text" id="username" name="username" value="<?php echo $user['username']; ?>" readonly><br><br>

      

        <input type="submit" name="update" value="Update Profile">
    </form>

    <a href="logout.php" class="logout-btn">Logout</a>
</body>
</html>
