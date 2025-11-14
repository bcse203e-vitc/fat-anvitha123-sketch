<?php

function insideOut(array $arr): array
{
    $count = count($arr);

    // Only transform if the array has an even number of elements
    if ($count % 2 !== 0) {
        return $arr;
    }

    $half = $count / 2;
    $result = $arr;

    // Swap outermost elements moving inward
    for ($i = 0; $i < $half; $i++) {
        $j = $count - 1 - $i;
        $temp = $result[$i];
        $result[$i] = $result[$j];
        $result[$j] = $temp;
    }

    return $result;
}


$numericExample = [1, 2, 2, 1];
$numericResult  = insideOut($numericExample);


$stringExample = ["Everyone", "says", "Kelly", "is", "REALLY", "awesome"];
$stringResult  = insideOut($stringExample);



echo "Numeric Example:\n";
print_r($numericResult);

echo "\nString Example:\n";
print_r($stringResult);

?>


