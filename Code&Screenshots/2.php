<?php
function insideOut($arr) {
    $length = count($arr);

  
    if ($length % 2 !== 0) {
        return $arr; 
    }

  
    $half = $length / 2;

    
    $result = $arr;

    for ($i = 0; $i < $half; $i++) {
       
        $result[$i] = $arr[$i + $half];
        $result[$i + $half] = $arr[$i];
    }

    return $result;
}
?>

