<html>
<body>

<h1>Paper Vending Machine</h1>
<p>Do not go back for payment click on payment button</p>
<p align="center">
  <font size="8">
<a href="paytmkit/TxnTest.php?page=<?php echo $_GET["page"] ?>"><button>Proceed Payment</button>
<?php
include 'ss.php'; 
$conn = OpenCon();
$time=time();
$sql = "INSERT INTO dataesp(mobileno,pages,time) VALUES ('".$_GET["num"]."','".$_GET["page"]."',$time)";
if ($conn->query($sql) === TRUE) { 
   }
 else {
    echo "Error creating database: " . $conn->error;
}
CloseCon($conn); 
?>

</body>
</html>