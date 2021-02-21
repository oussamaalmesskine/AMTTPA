<?php 
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        //assign Variables
        $user =  filter_var($_POST['username'],FILTER_SANITIZE_STRING);
        $mail =  filter_var($_POST['email'],FILTER_SANITIZE_EMAIL);
        $phone =  filter_var($_POST['phone'], FILTER_SANITIZE_NUMBER_INT);
        $msg =  filter_var($_POST['teserea'],FILTER_SANITIZE_STRING);
        //creating aray of errors
        $header = 'From: ' .$mail . '\r\n';
        $mayEmail = 'yassinebouza97@gmail.com' ;
        $mysubject = 'Contact Form';
        mail($mayEmail , $mysubject , $msg , $phone, $header);
}
?>
<?php 
    echo "<script>alert('thanks For Your Massege')</script>";
    echo "<script>window.location.assign('../contactUs.html') ;</script>"
?>