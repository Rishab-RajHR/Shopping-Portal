<?php 
require './include/db.php';
header('Access-Control-Allow-Origin: *');

if ($_SERVER['REQUEST_METHOD'] === "GET") {
       $stmt = "SELECT * FROM banner WHERE status=1";
       if($result = $conn->query($stmt)) {
             $arr =[];
            while($rowArray = $result->fetch_assoc()) {
            $arr[] = $rowArray;
            }
            echo json_encode(
              ['banners' => $arr]
            );
       } else {
           echo json_encode(['error' => 'Something went wrong. Please try again later']);
       }
       exit();
}

?>