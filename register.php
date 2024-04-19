<?php
session_start();
$servername = "localhost";
$username = "root";


// Create connection
$conn = new mysqli($servername, $username, "","moetaz");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
$email=$_POST['email'];
$password=$_POST['password'];
$name=$_POST['name'];
$sql="SELECT * FROM login WHERE email='$email'";
$result=mysqli_query($conn,$sql);
if(mysqli_num_rows($result)>0)
{
    $_SESSION['status']="Email already exists";
    header("Location: signup.php");
}
else
{
    $sql = "INSERT INTO login (email, name,password) VALUES ('$email', '$name','$password')";
    $result = $conn->query($sql);
    $_SESSION['valid']="Account created successfully";
    header("Location: login.php");
}


?>.