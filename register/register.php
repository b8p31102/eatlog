<?php
    include_once("../db/dbp_def.php");
    require_once '../vendor/autoload.php';

    use Ramsey\Uuid\Uuid;
    $userid = Uuid::uuid4();
    //echo($userid);

    //データベースへの接続初期化
    //$linkp = pg_connect($dbphost, $dbpuser, $dbppasswd, $dbpname);
    $linkp = pg_connect("host=localhost dbname=b8p31042 user=b8p31042 password=B8P31042.pass");
    if (!$linkp) {
        die('PostgreSQL Connection Failed!'.pg_last_error());
    }

    //formからの値の受け取り
    //$userid = $_REQUEST['userid'];
    $name = $_REQUEST['name'];
    $password = $_REQUEST['password'];
    $email = $_REQUEST['email'];
    $sex = $_REQUEST['sex'];
    $birthday = $_REQUEST['birthday'];
    //echo($userid);
    //$results = array();
    //echo ('test');

    $hash = password_hash($password, PASSWORD_DEFAULT);

    $insert_psql1 = "INSERT INTO users (id, name,password, email, sex, birthday) VALUES ('{$userid}', '{$name}', '{$hash}', '{$email}', '{$sex}', '{$birthday}');";
    //$insert_psql1 = "INSERT INTO users (id, name,password, email, sex, birthday) VALUES ('cafa7641-4b22-46b9-bb0b-11cbc2fa0cbe', 'd', 'd', 'd', 'd', '1997')";
    echo($insert_psql1);

    $result = pg_query($insert_psql1);
    //echo($result);
    if(!$result) {
        die('INSERT失敗'.pg_last_error());
    }
    //var_dump($result);
    
    //$res = pg_fetch_result($result, 1, 0);
    //echo $res;

    //var_dump($row);

    //header("Content-Type: application/json; charset=utf-8");
    //echo json_encode($result, JSON_UNESCAPED_UNICODE);
    
//$fp = fopen("save.csv", "w");
 
// ファイルに書き込む
//fwrite($fp, json_encode($results, JSON_UNESCAPED_UNICODE));
 
// ファイルを閉じる
mysqli_close($link);
pg_close($linkp);

?>
