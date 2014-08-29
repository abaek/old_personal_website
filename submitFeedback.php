<?php 
  	$email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["name"] + ": " + $_POST["message"];
    // message lines should not exceed 70 characters (PHP rule), so wrap it
    $message = wordwrap($message, 70);
    // send mail
    mail("andybaek95@gmail.com",$subject,$message,"From: $email\n");
    echo "Thank you for sending us feedback";
?>