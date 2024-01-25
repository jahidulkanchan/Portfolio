<?php
    // Collect form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $to = "mdj524156@gmail.com";
    $subject = "New Contact Form Submission";
    $push = "Name: " . $name . "\r\n Email: " . $email . "\r\n message: " . $message;
    $headers = "From: abc@gmail.com";
    if($email != Null){
      mail($to,$subject,$push,$headers)
    }
    header("location:index.html");
?>
