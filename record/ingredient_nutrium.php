<?php
    include_once("../db/db_def.php");

    include_once("material_nutrium_calc_functions.php");

    //データベースへの接続初期化
    $link = mysqli_connect($dbhost, $dbuser, $dbpasswd, $dbname);

    if (!$link) {
        die('接続失敗です。'.mysqli_error());
    }

    mysqli_set_charset($link, "utf8");

    //formからの値の受け取り
    $ingredient_keyword = $_REQUEST['ingredient_keyword'];
    $limit_num = $_REQUEST['limit_num'];
    if(empty($limit_num)){ $limit_num = 5; }

    $select_sql1 = "SELECT * FROM eiyouka WHERE ";
    if(!empty($ingredient_keyword)){
        $select_sql1 .= "name LIKE '%{$ingredient_keyword}%' limit {$limit_num};";
    }
    else{
        $select_sql1 .= "name LIKE '%あわ%' limit {$limit_num};";
    }

    $result = mysqli_query($link, $select_sql1);
    //var_dump($result);

    $t_results = array(); //key: recipe_id, value: array("recipe_id=>$row['id'],title"=>$row['title'], "nutrium"=>$nutriums)

    while ($row = mysqli_fetch_assoc($result)) {
        foreach($row as $key => $value){
            $t_results[$row['id']][$key] = $value;
        }
        //var_dump($row);
        /*
        $eiyouka_id = $row['id'];
        $t_results[$eiyouka_id] = array();
        $t_results[$eiyouka_id]["id"]=$eiyouka_id;
        $t_results[$eiyouka_id]["name"]=$row['name'];
        $t_results[$eiyouka_id]["energy"]=$row['energy'];
        $t_results[$eiyouka_id]["protein"]=$row['protein'];
        $t_results[$eiyouka_id]["lipid"]=$row['lipid'];
        $t_results[$eiyouka_id]["Sat"]=$row['Sat'];
        $t_results[$eiyouka_id]["MonoSat"]=$row['MonoSat'];
        $t_results[$eiyouka_id]["PolySat"]=$row['PolySat'];
        $t_results[$eiyouka_id]["chol"]=$row['chol'];
        $t_results[$eiyouka_id]["carb"]=$row['carb'];
        $t_results[$eiyouka_id]["fiber"]=$row['fiber'];
        $t_results[$eiyouka_id]["Na"]=$row['Na'];
        $t_results[$eiyouka_id]["Ka"]=$row['Ka'];
        $t_results[$eiyouka_id]["Ca"]=$row['Ca'];
        $t_results[$eiyouka_id]["Mg"]=$row['Mg'];
        $t_results[$eiyouka_id]["P"]=$row['P'];
        $t_results[$eiyouka_id]["Fe"]=$row['Fe'];
        $t_results[$eiyouka_id]["Zn"]=$row['Zn'];
        $t_results[$eiyouka_id]["Cu"]=$row['Cu'];
        $t_results[$eiyouka_id]["vit_a"]=$row['vit_a'];
        $t_results[$eiyouka_id]["vit_d"]=$row['vit_d'];
        $t_results[$eiyouka_id]["vit_k"]=$row['vit_k'];
        $t_results[$eiyouka_id]["vit_b1"]=$row['vit_b1'];
        $t_results[$eiyouka_id]["vit_b2"]=$row['vit_b2'];
        $t_results[$eiyouka_id]["nia"]=$row['nia'];
        $t_results[$eiyouka_id]["vit_b6"]=$row['vit_b6'];
        $t_results[$eiyouka_id]["vit_b12"]=$row['vit_b12'];
        $t_results[$eiyouka_id]["folic"]=$row['folic'];
        $t_results[$eiyouka_id]["Pant"]=$row['Pant'];
        $t_results[$eiyouka_id]["vit_c"]=$row['cit_c'];
        $t_results[$eiyouka_id]["en"]=$row['en'];
        */
    }
    //var_dump($t_results);

    

    header("Content-Type: application/json; charset=utf-8");
    echo json_encode($t_results, JSON_UNESCAPED_UNICODE);

    mysqli_close($link);
?>