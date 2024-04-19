<?php
session_start();
$servername = "localhost";
$username = "root";


// Create connection
$conn = new mysqli($servername, $username, "","moetaz");
$email=$_POST['email'];
$password=$_POST['password'];

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT email, password  FROM login WHERE email='$email' and password='$password'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
  $_SESSION['email']=$email;
  header("Location: calc.php");
} else {
  $_SESSION['status']="Invalid email or password";
    header("Location: login.php");


}
?>.