<?php
include 'ss.php'; 
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$conn = OpenCon();
$time=time();
$sql = "SELECT mobileno,pages,time FROM dataesp where time>=$time-10";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "" . $row["pages"]."";
    }
} else {
    echo "0 results";
}
CloseCon($conn); 

?>