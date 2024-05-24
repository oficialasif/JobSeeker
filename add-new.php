<?php
session_start();
include "db_conn.php";

// Check if the user is logged in
if (!isset($_SESSION['username'])) {
    header("Location: index.php"); // Redirect to login if not logged in
    exit;
}

if (isset($_POST["submit"])) {
    $job_title = $_POST['job_title'];
    $company_name = $_POST['company_name'];
    $job_description = $_POST['job_description'];
    $posted_by = $_POST['posted_by'];

    // Input validation (important for security)
    if (empty($job_title) || empty($company_name) || empty($job_description) || empty($posted_by)) {
        echo "<script>alert('Please fill in all required fields.');</script>";
    } else {
        // Prepare and execute the SQL query to insert the job post into the 'job_posts' table
        $sql = "INSERT INTO `crud` (`job_title`, `company_name`, `job_description`, `posted_by`) 
                VALUES ('$job_title', '$company_name', '$job_description', '$posted_by')";

        $result = mysqli_query($conn, $sql);

        if ($result) {
            header("Location: index.php?msg=New job posted successfully");
        } else {
            echo "<script>alert('Error posting job: " . mysqli_error($conn) . "');</script>";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Post a Job</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <!-- <nav class="navbar navbar-light justify-content-center fs-3 mb-5" style="background-color: #00ff5573;">
        PHP Complete CRUD Application
    </nav> -->
    <div class="homeebutton" style="padding:20px;">

    <a  href="home.php" class="btn btn-primary home-button"> 
        <i class="fas fa-home me-2"></i> Home
    </a>
    </div>
    

    <div class="container">
        <div class="text-center mb-4">
            <h3>Post a New Job</h3>
            <p class="text-muted">Complete the form below to post a new job</p>
        </div>

        <div class="container d-flex justify-content-center">
            <form action="" method="post" style="width:50vw; min-width:300px;">
                <div class="mb-3">
                    <label class="form-label">Job Title:</label>
                    <input type="text" class="form-control" name="job_title" placeholder="e.g., Software Engineer">
                </div>

                <div class="mb-3">
                    <label class="form-label">Company Name:</label>
                    <input type="text" class="form-control" name="company_name" placeholder="e.g., Acme Inc.">
                </div>

                <div class="mb-3">
                    <label class="form-label">Job Description:</label>
                    <textarea class="form-control" name="job_description" rows="5" placeholder="Enter the job description here..."></textarea>
                </div>

                <div class="mb-3">
                    <label class="form-label">Posted By:</label>
                    <input type="text" class="form-control" name="posted_by" placeholder="Your Name or Email">
                </div>

                <div>
                    <button type="submit" class="btn btn-success" name="submit">Post Job</button>
                    <a href="index.php" class="btn btn-danger">Cancel</a>
                </div>
            </form>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
</body>

</html>
