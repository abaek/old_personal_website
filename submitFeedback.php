<?php 
  	$email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["name"] + ": " + $_POST["message"];
    $message = wordwrap($message, 70);
    mail("andybaek95@gmail.com",$subject,$message,"From: $email\n");
    echo "Thank you for sending us feedback";
?>