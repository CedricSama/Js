<?php
//echo $_SERVER ["REQUEST_METHOD"];exit;
$data=Array(
    "red"=>"#f00",
    "green"=>"#0f0",
    "blue"=>"#00f",
    "cyan"=>"#0ff",
    "magenta"=>"#f0f",
    "yellow"=>"#ff0",
    "ayoub"=>"#125894",
    "black"=>"#000",
);
if($_SERVER ["REQUEST_METHOD"]=="POST"){
	$body = file_get_contents("php://input");
    $body  = json_decode($body);
	$keys = array_keys ($data);
    //$body["ProObj"]["nom"];
	$pos =  array_search ($body["colorName"],$keys );
	echo $data[$keys[$pos]];
	exit;
}
if($_SERVER ["REQUEST_METHOD"]=="GET") {
    $keys = array_keys($data);
    $result = ["status" => 200,
        "ErrorMessage" => "",
        "data" => $keys
    ];
    echo json_encode($result);
}
?>