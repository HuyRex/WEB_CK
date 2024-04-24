<?php
session_start();

if(isset($_SESSION['logged']) && $_SESSION['logged']){
    // side bar
    include_once("./view/header.php"); 
    // body
    if(isset($_GET['pg']) && $_GET['pg'] !=""){
        switch($_GET['pg']){
            case 'logout':
                session_destroy();
                header('location: view/login.php');
                break;
            case 'home':
                include_once('./view/home.php');
                break;
                
            default:
                break;
        }
    }
    else{
        include_once('./view/home.php');
    }
}
else if(isset($_GET['token']) && $_GET['token'] !=""){
    header('location: view/first_login.php');
}
else{ 
    header('location: view/login.php');
}

?>