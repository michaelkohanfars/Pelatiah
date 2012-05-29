<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <link rel="stylesheet" type="text/css" href="../css/style.css" />
    </head>
    
    <body>
        <div class="browse" id="browse">
            <form action="file-upload.php" method="post" enctype="multipart/form-data">
                Send these files:<br />
               <input name="userfile[]" type="file" /><br />
               <input type="submit" value="Send files" onclick="showSubPics()"id=filesUploaded/>
	    </form>
        </div>
        <div class="new-pics" id="new-pics"></div>
        <div class="old-pics" id="old-pics">
        	<?PHP
				Header("content-type: application/x-javascript");
				
				//This function gets the file names of all images in the current directory
				//and ouputs them as a JavaScript array
				$dirname="../images/thumbs/";
				$pattern="(\.jpg$)|(\.png$)|(\.jpeg$)|(\.gif$)"; //valid image extensions
				$files = array();
				$curimage=0;
				
				if($handle = opendir($dirname))
				{
					while(false !== ($file = readdir($handle)))
					{   
					if(eregi($pattern, $file)) //if this file is a valid image
					{
						//Output it as a JavaScript array element
						$files[$curimage] = $file;
						$curimage++;
					}
					}   
					closedir($handle);
				}
			?>
        </div>
    </body>
    <!-- call functions -->
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <script type="text/javascript" src="../js/jquery.tmpl.min.js"></script>
    <script type="text/javascript" src="../js/pict.js"></script>
    <script type="text/javascript">
		jQuery.event.add(window, "load", resize);
		jQuery.event.add(window, "resize", resize);
		var jsArray = ["<?php echo join("\", \"", $files); ?>"];
		showServerPics(jsArray);
	</script>
</html>
