<?php
include "db_conn.php";
$id = $_GET["id"];

if (isset($_POST["submit"])) {
    // ... (rest of your form processing logic remains the same)
    
    // Corrected SQL query to update the 'job_posts' table:
    $sql = "UPDATE `crud` SET `job_title`='$jobTitle', `company_name`='$companyName', 
            `job_description`='$jobDescription', `posted_by`='$postedBy' WHERE id = $id";
    
    // ... (rest of your code for executing the query and handling the result)
}

// ... (rest of your HTML structure remains the same)

// Corrected SQL query to fetch from the 'job_posts' table:
$sql = "SELECT * FROM `crud` WHERE id = $id LIMIT 1";

// ... (rest of your code for fetching and displaying data remains the same)
