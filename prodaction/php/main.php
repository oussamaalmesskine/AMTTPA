<?php 
        if($_SERVER['REQUEST_METHOD'] == 'POST') {
            //assign Variables
            $nom =  filter_var($_POST['nom'],FILTER_SANITIZE_STRING);
            $Prenom =  filter_var($_POST['Prenom'],FILTER_SANITIZE_STRING);
            $sujet =  filter_var($_POST['sujet'],FILTER_SANITIZE_STRING);
            $email =  filter_var($_POST['email'],FILTER_SANITIZE_EMAIL);
            $msg =  filter_var($_POST['textarea'],FILTER_SANITIZE_STRING);
            //creating aray of errors
            $header = 'From: ' .$email . '\r\n';
            $mayEmail = 'yassinebouza97@gmail.com' ;
            $mysubject = 'Contact Form';
            $our = $nom . " " . $Prenom  . "\n" . $sujet ."\n" . $msg;
            mail($mayEmail , $mysubject , $our , $header);
}
?>
<?php 
    echo "<script>alert('thanks For Your Massege')</script>";
    echo "<script>window.location.assign('../contactUs.html') ;</script>"
?>