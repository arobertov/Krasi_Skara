<?php
/**
 * Created by PhpStorm.
 * User: Angel
 * Date: 5.8.2018 г.
 * Time: 11:03
 */
namespace Main\Services;

use Main\Repository\MailDataDTO;

interface SendMailServiceInterface {
	public function sendMail(MailDataDTO $mailDataDTO);
}