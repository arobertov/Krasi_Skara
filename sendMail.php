<?php
require __DIR__ . '/vendor/autoload.php';

use Main\Controller\SendMailController;
use Main\Core\DataBinder;
use Main\Services\SendMailService;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

//$_POST = array('name'=>'nameeee','email'=>'abv@abv.bg','subject'=>'subject','message'=>'message');

$mailer = new PHPMailer(true);
$binder = new DataBinder();
$sendMailService = new SendMailService($mailer);
$sendMailController = new SendMailController($sendMailService,$_POST,$binder);

try {
	echo $sendMailController->sendMail();
} catch ( Exception $e ) {
	echo 'Error:'. $e->getMessage();
}