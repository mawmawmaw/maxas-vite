<?php
include_once "cors.php";
include_once "functions.php";
$phone = file_get_contents('php://input');
$registered = registerPhone($phone);
echo json_encode($registered);