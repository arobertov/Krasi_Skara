<?php
/**
 * Created by PhpStorm.
 * User: Angel
 * Date: 5.8.2018 г.
 * Time: 22:41
 */

namespace Main\Core;


use PHPMailer\PHPMailer\Exception;

class DataBinder implements DataBinderInterface {

	/**
	 * @param $formData
	 * @param $className
	 *
	 * @return mixed
	 * @throws Exception
	 */
	public function mailFormBinder( $formData, $className ) {

		$mailDataDTO = new $className;
		if(count($formData)== 0) throw  new Exception('Липсват данни от формуляра !');
		foreach ($formData as $key=>$value){
			if($key == '' || $value == '') throw new Exception('Липсват данни в полето '.$key);
			$methodName = 'set'.ucfirst($key);
			if(method_exists($mailDataDTO,$methodName)){
				$mailDataDTO->$methodName($value);
			}
		}

		return $mailDataDTO;
	}
}