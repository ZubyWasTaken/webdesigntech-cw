<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "database";
try {
$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
echo "Connected successfully <br />";
}
catch(PDOException $e)
{
echo "Connection failed: " . $e->getMessage();
}
$query=$conn->prepare("INSERT INTO ContactUs (name, email, message) VALUES (?,?,?)");
$query->bindParam(1, $name);
$query->bindParam(2, $email);
$query->bindParam(3, $message);
$name=$_POST['name'];
$email=$_POST['email'];
$message=$_POST['message'];
$query->execute();
$conn = null;
echo 'Hi '.$_POST['name'].' thanks for your interest.</br>';
echo 'We will contact you at '. $_POST['email'].' soon.</br>';
?>