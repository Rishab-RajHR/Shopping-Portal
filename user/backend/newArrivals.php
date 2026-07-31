<?php 
require './include/db.php';
header('Access-Control-Allow-Origin: *');

if ($_SERVER['REQUEST_METHOD'] === "GET") {

    $stmt = "SELECT * FROM product WHERE status=1 ORDER BY added_on  DESC LIMIT 3";

    if ($result = $conn->query($stmt)){
        
         $arr = [];
         
         while ($row = $result->fetch_assoc() ) {
                $arr[] = $row;
         }

         echo json_encode([
             'newArrivals' => $arr
         ]);

    } else {
 
        echo json_encode(['error' => 'Somthing went wrong. Try Again later']);  
    }
    exit();
}

?>