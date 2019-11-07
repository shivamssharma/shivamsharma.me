
<?php
include 'ss.php'; 
$conn = OpenCon();
$time=time();
$sql = "INSERT INTO testing(amount,status,time) VALUES ('".$_GET["amount"]."','".$_GET["status"]."',$time)";
if ($conn->query($sql) === TRUE) { 
   }
 else {
    echo "Error creating database: " . $conn->error;
}
if($_GET["status"]=="TXN_SUCCESS")
{
echo "transaction completed succesfull";
}
else
{
echo "transaction failed"; 
}
CloseCon($conn); 
?>

