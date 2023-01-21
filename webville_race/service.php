<?php
$con = mysqli_connect('127.0.0.1', 'runner_db_user', 'runner_db_password','hfjq_race_info' )
OR die( 'Could not connect to database,');

if($_POST && $_POST['action'] == 'addRunner') {
    $fname = htmlspecialchars($_POST['textFirstName']);
    $lname = htmlspecialchars($_POST['textLastName']);
    $gender = htmlspecialchars($_POST['ddlGender']);
    $minutes = htmlspecialchars($_POST['txtMinutes']);
    $seconds = htmlspecialchars($_POST['txtSeconds']);

    if(preg_match('/[^\w\s]/i', $fname) || preg_match('/[^\w\s]/i', $lname)) {
        fail('Invalid name provided.');
    }

    if(empty($fname) || empty($lname)) {
        fail('Please enter a first and last name');
    }

    if(empty($gender)) {
        fail('Please enter a gender');
    }
    
    $time = $minutes.":".$seconds;

    $query = "INSERT INTO runners SET first_name='$fname', last_name='$lname',
    gender='$gender', finish_time='$time'";
    $result = mysqli_QUERY($con, $query);

    if($result) {
        $msg = "Runner: ".$fname." ".$lname." added successfuly";
        success($msg);
    } else {
        fail('Insert failed.');
    }
    exit;

} elseif ($_GET && $_GET['action'] == 'getRunners') {

    $query = "SELECT first_name, last_name, gender, finish_time  FROM runners ORDER BY finish_time ASC";
    $result = mysqli_QUERY($con, $query);
    $runners = array();
    
    while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
        array_push($runners, array('fname' => $row['first_name'], 'lname' => $row['last_name'],
        'gender' => $row['gender'], 'time' => $row['finish_time']));
    }
    
    echo json_encode(array("runners" => $runners));
    exit;
}

function fail($message) {
    die(json_encode(array('status' => 'fali', 'message' => $message)));
}

function success($message) {
    die(json_encode(array('status' => 'fali', 'message' => $message)));
}
?>