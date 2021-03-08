<?php
    session_start();
    include_once("../db/dbp_def.php");
    //var_dump($_SESSION);
    
    //include_once("nutrium_calc_functions.php");

    //データベースへの接続初期化
    //$linkp = pg_connect($dbphost, $dbpuser, $dbppasswd, $dbpname);
    $linkp = pg_connect("host=localhost dbname=b8p31042 user=b8p31042 password=B8P31042.pass");
    if (!$linkp) {
        die('PostgreSQL Connection Failed!'.pg_last_error());
    }

    //formからの値の受け取り
    $userid = $_REQUEST['name'];
    $password = $_REQUEST['userpass'];
    //echo($userid);
    //echo($password);
    //$results = array();

    $select_psql1 = "SELECT * FROM users WHERE name='$userid' limit 1";

    $result = pg_query($select_psql1);
    $rows = pg_fetch_array($result, null, PGSQL_ASSOC);
    //echo($result);
    //var_dump($rows);
    if($rows['name'] == $userid && password_verify($password, $rows['password']) && !empty($userid) && !empty($password)) {
        $_SESSION['system_id'] = $rows['id'];
        $_SESSION['sex'] = $rows['sex'];
        $login_success = true;
        //var_dump($_SESSION['system_id']);
        //var_dump($row);
        //die ("Login Success!");
        $login_success_url = "../index.html";
		//header("Location: {$login_success_url}");
        
        //session_regenerate_id();
        //echo session_id();
    } else {
        //die ("Login Failed.");
        $login_success = false;
    }
    echo json_encode($login_success, JSON_UNESCAPED_UNICODE);
    //var_dump($_SESSION);

    header("Content-Type: application/json; charset=utf-8");
    //echo json_encode($result, JSON_UNESCAPED_UNICODE);
    
//$fp = fopen("save.csv", "w");
 
// ファイルに書き込む
//fwrite($fp, json_encode($results, JSON_UNESCAPED_UNICODE));
 
// ファイルを閉じる
mysqli_close($link);
pg_close($linkp);

?>
