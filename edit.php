<?php
include "db_conn.php";
$id = $_GET["id"];

if (isset($_POST["submit"])) {
    $jobTitle = $_POST['job_title'];
    $companyName = $_POST['company_name'];
    $jobDescription = $_POST['job_description'];
    $postedBy = $_POST['posted_by'];

    // Input validation (important for security)
    if (empty($jobTitle) || empty($companyName) || empty($jobDescription) || empty($postedBy)) {
        echo "<script>alert('Please fill in all required fields.');</script>";
    } else {
        // Prepare and execute the SQL query to update the job post
        $sql = "UPDATE `crud` SET `job_title`='$jobTitle',`company_name`='$companyName',`job_description`='$jobDescription',`posted_by`='$postedBy' WHERE id = $id";

        $result = mysqli_query($conn, $sql);

        if ($result) {
            header("Location: index.php?msg=Job post updated successfully");
        } else {
            echo "Failed: " . mysqli_error($conn);
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

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <title>Edit Job Post</title> 
</head>

<body>
    <nav class="navbar navbar-light justify-content-center fs-3 mb-5" style="background-color: #00ff5573;">
        PHP Complete CRUD Application
    </nav>

    <div class="container">
        <div class="text-center mb-4">
            <h3>Edit Job Post Information</h3>
            <p class="text-muted">Click update after changing any information</p>
        </div>

        <?php
        $sql = "SELECT * FROM `crud` WHERE id = $id LIMIT 1";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($result);
        ?>

        <div class="container d-flex justify-content-center">
            <form action="" method="post" style="width:50vw; min-width:300px;">
                <div class="mb-3">
                    <label class="form-label">Job Title:</label>
                    <input type="text" class="form-control" name="job_title" value="<?php echo $row['job_title'] ?>" placeholder="e.g., Software Engineer">
                </div>

                <div class="mb-3">
                    <label class="form-label">Company Name:</label>
                    <input type="text" class="form-control" name="company_name" value="<?php echo $row['company_name'] ?>" placeholder="e.g., Acme Inc.">
                </div>

                <div class="mb-3">
                    <label class="form-label">Job Description:</label>
                    <textarea class="form-control" name="job_description" rows="5" placeholder="Enter the job description here..."><?php echo $row['job_description'] ?></textarea>
                </div>

                <div class="mb-3">
                    <label class="form-label">Posted By:</label>
                    <input type="text" class="form-control" name="posted_by" value="<?php echo $row['posted_by'] ?>" placeholder="Your Name or Email">
                </div>

                <div>
                    <button type="submit" class="btn btn-success" name="submit">Update</button>
                    <a href="index.php" class="btn btn-danger">Cancel</a>
                </div>
            </form>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>

</body>

</html>
