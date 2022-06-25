<?php

function registerUser($user){
    if  (isset($user->userName) && $user->userName!='' &&
         isset($user->userEmail) && $user->userEmail!='' &&
         isset($user->phoneNumber) && $user->phoneNumber!=''){
            try{
                $db = getDBconnection();
                $query = $db->prepare("INSERT INTO tbl_PreMintRegistrations(userName,userEmail,phoneNumber) VALUES (?,?,?)");
                return $query->execute([$user->userName, $user->userEmail, $user->phoneNumber]);
            }catch (Exception $e) {
                return 'Error: '. $e->getMessage();
            }
    }else{
        return 'Error: Values are not set';
    }
}

function getRegisteredUsersCount(){
    try{
        $db = getDBconnection();
        $count = $db->query('select count(*) from tbl_PreMintRegistrations')->fetchColumn();
        return $count;
    }catch (Exception $e) {
        echo 'Error: ',  $e->getMessage(), "\n";
        return false;
    }
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