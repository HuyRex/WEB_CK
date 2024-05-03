<?php
include_once("connect_db.php");
include_once("send_mail.php");
function addStaff($staffName, $staffEmail){
    // Establish database connection
    $conn = connect_db();

    // Check for connection errors
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    // Prepare SQL statement
    $sql = "INSERT INTO nhanVien (user_name, full_name, email, password, avatar, status,token, expiry_time) VALUES (?, ?, ?, ?, ?, ?,?,?)";
    $stmt = $conn->prepare($sql);

    
    // Check for SQL errors
    if (!$stmt) {
        die("Error: " . $conn->error);
    }

    // Generate user name and password
    $user_name = $staffName . '@gmail.com';
    $password = $staffName; // For the first time login, password = full name
    $status = "inactive";
    $avatar = "unknow.jpg";
    $currentTime = time();
    $expiryTime = $currentTime + 60;
    $token = generateToken();
    $loginUrl = "http:localhost:8080/web-CK/index.php?token=$token";


    // Bind parameters to statement
    $stmt->bind_param("sssssssi", $user_name, $staffName, $staffEmail, 
    $password, $avatar, $status, $token, $expiryTime);
    
    // Execute the statement
    if ($stmt->execute() === TRUE) {
        sendMail($staffEmail, $loginUrl);
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
}


?>