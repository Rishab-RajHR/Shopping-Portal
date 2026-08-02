<?php 
require './include/db.php';
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === "GET" && isset($_GET['category'])) {

    echo json_encode([
        'error' => 'Category parameter is missing.'
    ]);
    exit();
}


    $category = trim($_GET['category']);

    $stmt = "SELECT * FROM product 
    WHERE status=1 AND 
    category_id =
     (SELECT id FROM category
      WHERE name = ?)";

    $prep_stmt = $conn->prepare($stmt);

    if(!$prep_stmt) {
       echo json_encode(['error' => $conn->error]);
       exit();
    }

    $prep_stmt->bind_param('s', $category);
    
    $prep_stmt->execute();

    if ($result = $prep_stmt->get_result()) {
         
         $arr = [];

         while ($row = $result->fetch_assoc()) {
              $arr[] = $row;
         }

         echo json_encode([
              'products' => $arr
         ]);
    } else {
 
        echo json_encode(['error' => 'Something went wrong. Try Again Later']);
    }
    $prep_stmt->close();
    exit();



?>