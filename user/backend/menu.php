<?php
require './include/db.php';
header('Access-Control-Allow-Origin: *');

if($_SERVER['REQUEST_METHOD'] === 'GET') {
     $stmt = "SELECT name FROM category WHERE status=1";
     if($result = $conn->query($stmt)){
        $arr = [];
        while($row = $result->fetch_assoc()) {
            $arr[] = $row['name'];
        }
        echo json_encode([
          'categories' => $arr
        ]);
     }
     else {
        echo json_encode(['error' => 'Something went wrong. Try again later']);
     }
     exit();
}

?>