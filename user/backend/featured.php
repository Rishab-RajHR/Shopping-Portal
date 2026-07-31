<?php 
require './include/db.php';
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === "GET") {

    $stmt = "SELECT * FROM product WHERE status = 1  ORDER BY RAND() LIMIT 3";

    if($result = $conn->query($stmt)) {

        $arr = [];

        while ($row = $result->fetch_assoc()) {
            $arr[] = $row;
        
        }
        echo json_encode(['featured' => $arr]);
    } else {
       echo json_encode(['error' => 'Something went wrong.']);
    }
    exit();
}

?>