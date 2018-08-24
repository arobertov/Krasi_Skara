<?php
/**
 * Created by PhpStorm.
 * User: Angel
 * Date: 5.8.2018 г.
 * Time: 16:06
 */

namespace Main\Controller;


use Main\Core\DataBinderInterface;
use Main\Repository\MailDataDTO;
use Main\Services\SendMailServiceInterface;
use PHPMailer\PHPMailer\Exception;

class SendMailController {

	/**
	 * @var SendMailServiceInterface
	 */
    public $sendMailService;

	/**
	 * @var array
	 */
    public $postData;

	/**
	 * @var DataBinderInterface
	 */
    public $binder;

	/**
	 * SendMailController constructor.
	 *
	 * @param SendMailServiceInterface $mailService
	 * @param array $postData
	 * @param DataBinderInterface $data_binder
	 */
	public function __construct(SendMailServiceInterface $mailService,array $postData,DataBinderInterface $data_binder) {
   	    $this->sendMailService = $mailService;
   	    $this->postData = $postData;
   	    $this->binder = $data_binder;
    }

	/**
	 * @return mixed
	 */
	public function sendMail(){

		$mailDataDTO = $this->binder->mailFormBinder( $this->postData, 'Main\Repository\MailDataDTO' );

		return  $this->sendMailService->sendMail($mailDataDTO);
    }
}