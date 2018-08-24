<?php
/**
 * Created by PhpStorm.
 * User: Angel
 * Date: 5.8.2018 г.
 * Time: 22:37
 */

namespace Main\Core;


interface DataBinderInterface {
	  public function mailFormBinder($formData,$className);
}