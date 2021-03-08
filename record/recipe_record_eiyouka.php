<?php
    include_once("dbp_def.php");
//include_once("nutrium_calc_functions.php");


    $link = pg_connect("host=localhost dbname=b8p31042 user=b8p31042 password=B8P31042.pass");
    if (!$link) {
        die('接続失敗です。'.mysqli_error());
    }
    mysqli_set_charset($link, "utf8");

    $date = $_REQUEST['date'];
    $record_eiyouka = $_REQUEST['record_eiyouka'];
    
    $select_sql1 = "SELECT * FROM eatlog WHERE ';";
    $result = pg_query($link, $select_sql1);
    
    $t_results  = array();

while ($row = pg_fetch_array($result, NULL, PGSQL_ASSOC)) {
        $log_id = $row['id'];
        $t_results[$log_id] = array();
        $t_results[$log_id]["id"]=$log_id;
        $t_results[$log_id]["user_id"]=$row['user_id'];
        $t_results[$log_id]["r_date"]=$row['r_date'];
        $t_results[$log_id]["e_date"]=$row['e_date'];
        $t_results[$log_id]["class"]=$row['class'];
        $t_results[$log_id]["recipe_id"]=$row['recipe_id'];
        $t_results[$log_id]["eiyouka_id"]=$row['eiyouka_id'];
        $t_results[$log_id]["name"]=$row['name'];
        $t_results[$log_id]["quantity"]=$row['quantity'];
        $t_results[$log_id]["energy"]=$row['energy'];
        $t_results[$log_id]["protein"]=$row['protein'];
        $t_results[$log_id]["lipid"]=$row['lipid'];
        $t_results[$log_id]["sat"]=$row['Sat'];
        $t_results[$log_id]["monoSat"]=$row['MonoSat'];
        $t_results[$log_id]["polySat"]=$row['PolySat'];
        $t_results[$log_id]["chol"]=$row['chol'];
        $t_results[$log_id]["carb"]=$row['carb'];
        $t_results[$log_id]["fiber"]=$row['fiber'];
        $t_results[$log_id]["na"]=$row['Na'];
        $t_results[$log_id]["ka"]=$row['Ka'];
        $t_results[$log_id]["ca"]=$row['Ca'];
        $t_results[$log_id]["mg"]=$row['Mg'];
        $t_results[$log_id]["p"]=$row['P'];
        $t_results[$log_id]["fe"]=$row['Fe'];
        $t_results[$log_id]["zn"]=$row['Zn'];
        $t_results[$log_id]["cu"]=$row['Cu'];
        $t_results[$log_id]["vit_a"]=$row['vit_a'];
        $t_results[$log_id]["vit_d"]=$row['vit_d'];
        $t_results[$log_id]["vit_k"]=$row['vit_k'];
        $t_results[$log_id]["vit_b1"]=$row['vit_b1'];
        $t_results[$log_id]["vit_b2"]=$row['vit_b2'];
        $t_results[$log_id]["nia"]=$row['nia'];
        $t_results[$log_id]["vit_b6"]=$row['vit_b6'];
        $t_results[$log_id]["vit_b12"]=$row['vit_b12'];
        $t_results[$log_id]["folic"]=$row['folic'];
        $t_results[$log_id]["pant"]=$row['Pant'];
        $t_results[$log_id]["vit_c"]=$row['cit_c'];
        $t_results[$log_id]["en"]=$row['en'];
        $t_results[$log_id]["e_date"]=$row['e_date'];


    }
    //var_dump($t_results);

    header("Content-Type: application/json; charset=utf-8");
    echo json_encode($t_results, JSON_UNESCAPED_UNICODE);

    mysqli_close($link);
?>