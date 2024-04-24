<?php
session_start();
if(isset($_SESSION['logged']) && $_SESSION['logged']){
  header('location: ../index.php');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="framework/bootstrap.min.css">
    <link rel="stylesheet" href="framework/bootstrap.css">

    <link rel="stylesheet" href="css/login.css">
    <title>login</title>
</head>
<body>
    <div class="container-fluid">
        <form class="mx-auto" action="login.php"  method="post"   >
            <h4 class="text-center mt-2 mb-2">Đăng nhập</h4>
            <div class="mb-3 mt-4">
              <label for="username" class="form-label">Tên người dùng</label>
              <input name = "name" type="text" class="form-control" id="username" required>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Mật khẩu</label>
              <input type="password" name = "password" class="form-control" id="password" required>
            </div>
            <input type="submit" name = "submit" value = "Đăng nhập">
            <!-- <button type="submit" class="btn btn-primary mt-3">Submit</button> -->
            <?php
              include_once("../model/check_account.php");
              if(isset($_POST['submit']) && $_POST['submit']){
                $_SESSION['logged'] = true;
                header('location: ../index.php');
                // if(checkAdmin($_POST['name'], $_POST['password'])){
                //   $_SESSION['logged'] = true;

                //   //xác định người dùng
                //   $_SESSION['name'] = $_POST['name'];
                  
                //   // Phân quyền truy cập
                //   $_SESSION['role'] = "admin";

                //   $_SESSION['password'] = $_POST['password'];
                // }
              }
              if(isset($_SESSION['logged']) && $_SESSION['logged']){
                header('location: ../index.php');
              }
              ?>
          </form>
    </div>

    <!-- <script src="framework/bootstrap.min.js"></script> -->
</body>
</html>

      
    
</html>
