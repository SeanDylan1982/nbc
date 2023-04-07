<?php

$server-name = "localhost:3306";
$server-username = "admin";
$server-password = "LL0921jj";
$server-dbname = "letsbowl";

$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$confirm = $_POST['confirm'];
$userUrl = "Location: ./$username";

$conn = new mysqli($server-name, $server-username, $server-password, $server-dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO `users`(`id`, `username`, `email`, `password`, `confirm`, `timestamp`) VALUES ('NULL','$username','$email','$password','$confirm',current_timestamp())";

if ($conn->query($sql) === TRUE) {
  echo "You have successfully registered! - ";
  echo " Please confirm your email address...";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
  header("Location: ./signup.html");
}

$profile = "./profile.html";
$path = "./profile/$username";

function createFolder($profile, $path) {
  $username = $_POST['username'];
  $path = "./profile/$username";
  $profile = "./profile.html";
  mkdir($path, 0777, true);
  copy("./profile.html","./profile/$username.html");
  rename("$path/profile.html","$path/$username.html");
  copy("$path/$username.html","./profile.html");
};
createFolder($profile, $path);

copy($profile,"./profile/");


$conn->close();
header("Location: ./login.html");
exit();
?>