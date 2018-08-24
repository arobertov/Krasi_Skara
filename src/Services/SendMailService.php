<?php
namespace Main\Services;

use Main\Repository\MailDataDTO;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

class SendMailService implements SendMailServiceInterface {

	const CONF_PATH = 'app/Config/mailConfigure.ini';

	/**
	 * @var PHPMailer
	 */
	public $mail;


	/**
	 * SendMailService constructor.
	 *
	 * @param PHPMailer $mail
	 */
	public function __construct(PHPMailer $mail) {
		$this->mail = $mail;
	}

	/**
	 * @return PHPMailer
	 * @throws Exception
	 */
	protected function mailConfigure(){
		$mail = $this->mail;

		$conf = parse_ini_file(self::CONF_PATH);
		if(count($conf)<=1){
			throw new Exception('Възникна неочаквана грешка.Опитайте пак :)');
		}

		$mail->SMTPDebug = 2;                                   // Enable verbose debug output
		$mail->isSMTP();                                        // Set mailer to use SMTP
		$mail->Host = $conf['host'];                            // Specify main and backup SMTP servers
		$mail->SMTPAuth = true;                                 // Enable SMTP authentication
		$mail->Username = $conf['username'];                    // SMTP username
		$mail->Password = $conf['password'];                    // SMTP password
		$mail->SMTPSecure = $conf['SMTPSecure'];                // Enable TLS encryption, `ssl` also accepted
		$mail->Port = $conf['port'];                            // TCP port to connect to
		$mail->setLanguage('bg','vendor\phpmailer\phpmailer\language\phpmailer.lang-bg.php');
		return $mail;
	}


	/**
	 * *** Server  side validation ! ***
	 *
	 * @param MailDataDTO $emailData
	 *
	 * @return MailDataDTO
	 * @throws Exception
	 */
	private function  emailFormValidation(MailDataDTO $emailData){
		if(!filter_var($emailData->getEmail(),FILTER_VALIDATE_EMAIL))
			throw new Exception('Невалиден имейл !');
		if(strlen($emailData->getName()) <= 2){
			throw new Exception('Името трябва да е по-дълго от 3 символа !');
		}
		if(strlen($emailData->getSubject()) <= 2){
			throw new Exception('Относно трябва да е по-дълго от 3 символа !');
		}
		$emailData->setName(filter_var($emailData->getName(),FILTER_SANITIZE_STRING));
		$emailData->setSubject(filter_var($emailData->getSubject(),FILTER_SANITIZE_STRING));
		$emailData->setMessage(filter_var($emailData->getName(),FILTER_SANITIZE_STRING));
		return $emailData;
	}

	/**
	 * @param MailDataDTO $emailData
	 *
	 * @return string
	 */
	public function sendMail(MailDataDTO $emailData) {
		try{
			$this->emailFormValidation($emailData);
		} catch (Exception $e) {
			return 'Error: '.$e->getMessage();
		}

		try{
			$mail = $this->mailConfigure();
			$mail->setFrom($emailData->getEmail(),$emailData->getName());
			$mail->addAddress('admin@skarabajganjo-bg.com', $emailData->getName());     // Add a recipient

			$mail->Subject = $emailData->getSubject();
			$mail->Body    = $emailData->getMessage();
			$mail->send();
			return 'OK';

		} catch (Exception $e) {
			return 'Error: '. $e->getMessage();
		}

	}
}