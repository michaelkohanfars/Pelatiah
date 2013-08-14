<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <?php
		require_once("PHPDebug.php");
    	$debug = new PHPDebug();
		
		//checking if delete button is pressed
		//page refreshes when delete button is pressed
		//if(isset($_POST['deleteAll']))
		//{
			$debug->debug("post call output", $_POST['string']);
		
		//}
	?>
    <head>
        <link rel="stylesheet" type="text/css" href="../css/style.css" />
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
		<script type="text/javascript" src="../js/jquery.tmpl.min.js"></script>
        <script type="text/javascript" src="../js/pict.js"></script>
        <link type="text/css" href="../css/old-pics/jquery-ui-1.8.20.custom.css" rel="Stylesheet" />	
        <link type="text/css" href="../css/delete-pics/jquery-ui-1.8.20.custom.css" rel="Stylesheet" />
		<script type="text/javascript" src="../js/jquery-1.7.2.min.js"></script>
		<script type="text/javascript" src="../js/jquery-ui-1.8.20.custom.min.js"></script>        
    </head>    
    <body class="mod-body">
        <div class="browse" id="browse">
            <form action="file-upload.php" method="post" enctype="multipart/form-data">
                Send these files:<br />
               <input name="userfile[]" type="file" /><br />
               <input type="submit" value="Send files" onclick="showSubPics()"id=filesUploaded/>
	    	</form>
        </div>
        <div class="new-pics" id="new-pics">
        </div>
  		<div class="old-pics" id="old-pics">
        	<div id="old-pics-tab">
				<ul>
					<li><a href="#old-pics-tab-1" style="cursor:default">Gallery</a></li>
				</ul>
				<div id="old-pics-tab-1">
				</div>
			</div>
        	<!-- PHP to grab the pictures from the server -->
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
        <div class="delete-pics" id="delete-pics">
        	<div id="delete-pics-tab">
				<ul>
                	<!-- tabs for using jquery ui -->
					<li><a href="#delete-pics-tab-1" style="cursor:default">Trash Can</a>
                    <!-- delete and cancel buttons -->
                    <form id="deleteForm" method="post" style="display:inline">
                    <input id = "submitButton" type = "submit" name="deleteAll" value = "Delete All" style="margin-left:7cm"/>
                    </form>
                	<input type = "button" value = "Cancel All" onclick="clearAll()"/>
				</ul>
				<div id="delete-pics-tab-1">
				</div>
			</div>
            <div class="delete-imgs">
            </div>
        	<!-- will hold all marked to delete -->
        	<script type="text/javascript">
				marked_delete = new Object();
			</script>
        </div>
    </body>
    <!-- call functions -->
    <script type="text/javascript">
		jQuery.event.add(window, "load", resize);
		jQuery.event.add(window, "resize", resize);
		
		// get all pictures on server from php code
		var jsArray = ["<?php echo join("\", \"", $files); ?>"];
		// display the server pics on the screen
		showServerPics(jsArray);
		// make delete box droppable
		makeDroppable();
		// initiate tabs
		initiateTabs();
		// initiate ajax delete call
		submitButtonCall();
	</script>
</html>
