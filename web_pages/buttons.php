<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>server page</title>
    <?PHP
		$length = intval($_POST['length']);
		$deletePaths = array();
		for($i = 0; $i < length; $i++)
		{	
			$pos = "img".strval($i);
			$this->$return['data'] = $pos;
			$deletePaths[$i] = $_POST[$pos];
			if(file_exists($deletePaths[$i]) && is_file($deletePaths[$i])) {
				$size = getimagesize($deletePaths[$i]);
				
				if($size && $size[0] > 0 && $size[1] > 0) {
					
				}
			}
		}
	
		$return['message'] = "hey it worked!";
		
		echo json_encode($return);
	?>
</head>

<body>
</body>
</html>