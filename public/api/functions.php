<?php

function registerPhone($phone){
    $db = getDBconnection();
    $sql = "INSERT INTO tbl_PreMintRegistrations(phoneNumber) VALUES (".$phone.")";
    $query = $db->prepare($sql);
    return $query->execute();
}

function getEnvVariable($key){
    if (defined("_ENV_CACHE")) {
        $vars = _ENV_CACHE;
    } else {
        $file = "env.php";
        if (!file_exists($file)) {
            throw new Exception("El archivo de las variables de entorno ($file) no existe. Favor de crearlo");
        }
        $vars = parse_ini_file($file);
        define("_ENV_CACHE", $vars);
    }
    if (isset($vars[$key])) {
        return $vars[$key];
    } else {
        throw new Exception("La clave especificada (" . $key . ") no existe en el archivo de las variables de entorno");
    }
}

function getDBconnection(){
    
    $dbName = getEnvVariable("MYSQL_DATABASE_NAME");
    $user = getEnvVariable("MYSQL_USER");
    $password = getEnvVariable("MYSQL_PASSWORD");

    $database = new PDO('mysql:host=mysql.maxas.xyz;dbname='. $dbName , $user, $password);
    return $database;

}