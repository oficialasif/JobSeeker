<?php
include "db_conn.php"; // Include your database connection file

// Fetch job postings from the database
$sql = "SELECT * FROM `job_posts`"; 
$result = mysqli_query($conn, $sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <title>Find Jobs - Job Seeker</title>
    </head>
<body>
    <!-- <nav class="navbar navbar-light justify-content-center fs-3 mb-5" style="background-color: #00ff5573;">
       Find Your Dream Job- Job Seeker
    </nav> -->



    <div class="container">

    <div class="homeebutton" style="padding:20px;">

<a  href="home.php" class="btn btn-primary home-button"> 
    <i class="fas fa-home me-2"></i> Home
</a>
</div>
        <div class="text-center mb-4">
            <h3>Find Your Dream Job- Job Seeker</h3>
            <p class="text-muted">Browse and search for available job opportunities</p>
        </div>

        <form action="" method="GET" class="mb-3">
            <div class="input-group">
                <input type="text" class="form-control" name="search" placeholder="Search by job title or company">
                <button class="btn btn-outline-secondary" type="submit">Search</button>
            </div>
        </form>

        <table class="table table-hover text-center">
            <thead class="table-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Job Title</th>
                    <th scope="col">Company Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Posted By</th>
                </tr>
            </thead>
            <tbody>
                <?php
                // Handle search functionality
                if (isset($_GET['search'])) {
                    $search = mysqli_real_escape_string($conn, $_GET['search']);
                    $sql = "SELECT * FROM `crud` WHERE `job_title` LIKE '%$search%' OR `company_name` LIKE '%$search%'";
                    $result = mysqli_query($conn, $sql);
                }

                while ($row = mysqli_fetch_assoc($result)) {
                    echo "<tr>
                            <td>{$row["id"]}</td>
                            <td>{$row["job_title"]}</td>
                            <td>{$row["company_name"]}</td>
                            <td>{$row["job_description"]}</td>
                            <td>{$row["posted_by"]}</td>
                        </tr>";
                }
                ?>
            </tbody>
        </table>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
