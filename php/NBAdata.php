<?php
$headers = array(
    'http' => array(
        'method' => "GET"
  )
);

// Creates a stream context
$context = stream_context_create($headers);
//REDACTED FOR GITHUB
$api_key = "******";

// Open the URL with the HTTP headers (fopen wrappers must be enabled)
date_default_timezone_set('UTC');
$day = date("d") - 1;
$year = date("Y");
$month = date("m");
$response = file_get_contents("http://api.sportsdatallc.org/nba-t3/games/".$year."/".$month."/".$day."/schedule.xml?api_key=".$api_key, false, $context);

file_put_contents("data.xml", $response);

$xml=simplexml_load_string($response);

foreach($xml->{'daily-schedule'}->games->game as $game)
{
sleep(2);
    $response = file_get_contents("http://api.sportsdatallc.org/nba-t3/games/".$game['id']."/boxscore.xml?api_key=".$api_key, false, $context);
    file_put_contents($game['id'].".xml", $response);


sleep(2);
    $response = file_get_contents("http://api.sportsdatallc.org/nba-t3/games/".$game['id']."/pbp.xml?api_key=".$api_key, false, $context);
    file_put_contents($game['id']."_pbp.xml", $response);


}



?>
