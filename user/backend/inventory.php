<?php 
require './include/db.php';
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === "GET" && isset($_GET['id'])) {
  
    echo json_encode([
         'error' => 'Category Parameter is missing'
    ]);
    exit();
}

    $id = trim($_GET['id']);

    $stmt = "SELECT stock FROM inventory WHERE product_id = ?;";

    $prep_stmt = $conn->prepare($stmt);

    if(!$prep_stmt) {
        echo json_encode(['error' => $conn->error]);
        exit();
    }

    $prep_stmt->bind_param('i', $id);

    $prep_stmt->execute();

    if ($result = $prep_stmt->get_result()) {
    
  

        echo json_encode([
             'stock' => $result->fetch_assoc()['stock']
        ]);

    } else {
        
       echo json_encode(['error' => 'Something went wrong. Try Again Later']);

    }
    $prep_stmt->close();
    exit();


?>