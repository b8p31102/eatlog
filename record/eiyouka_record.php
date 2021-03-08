<?php
    session_start();
    include_once("../db/db_def.php");
    include_once("../db/dbp_def.php");
    include_once("nutrium_calc_functions.php");
    //var_dump($_SESSION);

    if(empty($_SESSION['system_id'])) {
        echo("ログインしてください");
        $user_id = "c13d8100-d7a3-4f48-97bc-5b5a012428bf";
    } else {
        $user_id = $_SESSION['system_id'];
    }

    //pgsql
    $linkp = pg_connect("host=localhost dbname=b8p31042 user=b8p31042 password=B8P31042.pass");
    if (!$linkp) {
        die('PostgreSQL Connection Failed!'.pg_last_error());
    }
    //mysql
    $link = mysqli_connect($dbhost, $dbuser, $dbpasswd, $dbname);
    if (!$link) {
        die('接続失敗です。'.mysqli_error());
    }
    mysqli_set_charset($link, "utf8");

    $eiyouka_id = $_REQUEST['eiyouka_id'];
    $recipe_id = $_REQUEST['recipe_id'];
    $quantity = $_REQUEST['quantity'];
    $e_date = $_REQUEST['date'];
    if(empty($e_date)) {
        $e_date = "2021-01-01";
    }
    if(empty($quantity)) {
        if(!empty($eiyouka_id)){
            $quantity = 100;
        } else {
            $quantity = 1;
        }
    }

    $quantity_mag = $quantity/100;
    $t_results = array();

    if(!empty($eiyouka_id)){
        $select_sql1 = "SELECT * FROM eiyouka WHERE ";
        $select_sql1 .= "id={$eiyouka_id};";
        $result = mysqli_query($link, $select_sql1);
        $id = $eiyouka_id;
        $t_results[id] = array();
        
        while ($nutrium_row = mysqli_fetch_assoc($result)) {
            foreach($nutrium_row as $col_name=>$value){
                    echo "$col_name, $value\n";
                    if($col_name == 'energy' || $col_name == 'chol' || $col_name == 'na' || $col_name == 'ka' || $col_name == 'ca' || $col_name == 'mg' || $col_name == 'p' || $col_name == 'vit_a' || $col_name == 'vit_k' || $col_name == 'folic' || $col_name == 'vit_c') {
                        $t_results[$id][$col_name] = round($value*$quantity_mag);
                    } elseif($col_name != 'id' && $col_name != 'name'){
                        $t_results[$id][$col_name] = $value*$quantity_mag;
                    } else {
                        $t_results[$id][$col_name] = $value;
                    }
            }
        }
    } else {
        if(empty($recipe_id)) {
            $recipe_id = "ad7d585b06850f8437ff5fb97d3c7a823ff21bb1";
        }
        $id = $recipe_id;
        echo("calc_recipe_id");
        echo("!!recipe_id:");
        var_dump($recipe_id);
        //echo(show_recipe_name($recipe_id));

        $title = "カレー";
        //if($link){
            $select_sql10 = "SELECT * FROM recipes WHERE id ='{$recipe_id}' limit 1;";
            $result10 = mysqli_query($link, $select_sql10);
            while($recipe_row = mysqli_fetch_assoc($result10)){
                $title = $recipe_row['title'];
                //var_dump($recipe_row);
                //var_dump($title);
            }
        //}

        echo("!!Title:");
        var_dump($title);

        $nutriums = calc_nutrium($link, $recipe_id);
        echo("nutriums_dump:");
        var_dump($nutriums);
        echo("//");
        $t_results = array();
        $t_results[$id] = array();
        $t_results[$id]['id'] = $recipe_id;
        $t_results[$id]['name'] = $title;
        foreach($nutriums as $col_name => $value) {
            if($col_name != 'recipe_id' && $col_name != 'name' && $col_name != 'id'){
                $t_results[$id][$col_name] = $value;
            }
        }
    }


    //$select_psql1 = "INSERT INTO eatlog (user_id, e_date, quantity, eiyouka_id, name, energy, protein, lipid, Sat, MonoSat, PolySat, chol, carb, fiber, Na, Ka, Ca, Mg, P, Fe, Zn, Cu, vit_a, vit_d, vit_k, vit_b1, vit_b2, nia, vit_b6, vit_b12, folic, Pant, vit_c, en) VALUES ('{$user_id}', '{$e_date}', '{$quantity}', '{$t_results[$eiyouka_id]["id"]}', '{$t_results[$eiyouka_id]["name"]}', '{$t_results[$eiyouka_id]["energy"]}', '{$t_results[$eiyouka_id]["protein"]}', '{$t_results[$eiyouka_id]["lipid"]}', '{$t_results[$eiyouka_id]["sat"]}', '{$t_results[$eiyouka_id]["monosat"]}', '{$t_results[$eiyouka_id]["polysat"]}', '{$t_results[$eiyouka_id]["chol"]}', '{$t_results[$eiyouka_id]["carb"]}', '{$t_results[$eiyouka_id]["fiber"]}', '{$t_results[$eiyouka_id]["na"]}', '{$t_results[$eiyouka_id]["ka"]}', '{$t_results[$eiyouka_id]["ca"]}', '{$t_results[$eiyouka_id]["mg"]}', '{$t_results[$eiyouka_id]["p"]}', '{$t_results[$eiyouka_id]["fe"]}', '{$t_results[$eiyouka_id]["zn"]}', '{$t_results[$eiyouka_id]["cu"]}', '{$t_results[$eiyouka_id]["vit_a"]}', '{$t_results[$eiyouka_id]["vit_d"]}', '{$t_results[$eiyouka_id]["vit_k"]}', '{$t_results[$eiyouka_id]["vit_b1"]}', '{$t_results[$eiyouka_id]["vit_b2"]}', '{$t_results[$eiyouka_id]["nia"]}', '{$t_results[$eiyouka_id]["vit_b6"]}', '{$t_results[$eiyouka_id]["vit_b12"]}', '{$t_results[$eiyouka_id]["folic"]}', '{$t_results[$eiyouka_id]["pant"]}', '{$t_results[$eiyouka_id]["vit_c"]}', '{$t_results[$eiyouka_id]["en"]}');";
    $select_psql1 = "INSERT INTO eatlog (user_id, e_date, quantity";
    $select_psql2 = "'{$user_id}', '{$e_date}', '{$quantity}'";
    if(!empty($eiyouka_id)) {
        $select_psql1 .= ", eiyouka_id";
        $select_psql2 .= ", '{$eiyouka_id}'";
    } else {
        $select_psql1 .= ", recipe_id";
        $select_psql2 .= ", '{$recipe_id}'";
    }

    //foreach($t_results[$eiyouka_id] as $key => $value) {
    //    echo($key);
    //}
    var_dump($t_results);
    foreach($t_results[$id] as $key => $value) {
        if ($key != 'id') {
            if(is_string($value)) {
                $select_psql1 .= ", $key";
                $select_psql2 .= ", '$value'";
            } elseif(!empty($value)) {
                $select_psql1 .= ", $key";
                $select_psql2 .= ", $value";
                //echo($select_psql1);
            }
        }
    }
        $select_psql1 .=") VALUES ($select_psql2);";
        //echo($select_psql1);
        //echo($select_psql2);
    
    /*
    $select_psql1 = "INSERT INTO eatlog (user_id, e_date, quantity, eiyouka_id, name, energy, protein, lipid, Sat, MonoSat, PolySat, chol, carb, fiber, Na, Ka, Ca, Mg, P, Fe, Zn, Cu, vit_a, vit_d, vit_k, vit_b1, vit_b2, nia, vit_b6, vit_b12, folic, Pant, vit_c, en) VALUES ($user_id, $e_date, $quantity";
    foreach($t_results[$eiyouka_id] as $key => $value) {
        $select_psql1 .=", '" + $value + "'";
    }
    $select_psql1 .= ");"
    */

    //echo($select_psql1);
    
    $result = pg_query($select_psql1);
    
    if(!$result) {
        die('INSERT失敗'.pg_last_error());
    }
    
    //var_dump($select_psql1);
    

    mysqli_close($link);
    pg_close($linkp);
?>