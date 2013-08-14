var pictureViewer = function(pictArray) {
                        var picGallery = document.getElementById("cp");
                        var list, anchor, img;
                        
                        for(i = 0; i<pictArray.length; i++)
                        {  
                            //Create new img object
                            img = document.createElement("img");
                            img.src = "images/thumbs/"+pictArray[i];
                            img.alt = pictArray[i];
                            img.setAttribute("data-large","images/"+pictArray[i]);
                            
                            //create new anchor object
                            anchor = document.createElement("a");
                            anchor.href = "#";
                            anchor.appendChild(img);
                            
                            //Create and append all items to the new list object
                            list = document.createElement("li");
                            list.appendChild(anchor);
                            
                            //Append everything to the main list
                            picGallery.appendChild(list)
                        }
                    }
					
					
// for resizing the size of the upload box window
resize = (function()
		 {
			$(function()
			{
        		var h = $(window).height();
        		var w = $(window).width();
        		$("#new-pics").css('width',(w < 715) ? 500 : 715);
				$("#old-pics").css('width',(w < 715) ? 500 : 715);
			});
		 });

var showSubPics = function()
{
    var uploadedPics = document.getElementById("fileNames");
    alert("in showSubPics");
    alert(uploadedPics.val);
}

function showServerPics(pictArray)
{
	var oldPics = document.getElementById("old-pics-tab-1");
    var img;
    
    for(var i = 0; i < pictArray.length; i++)
    {  
		//Create new img object
		img = document.createElement("img");
		img.src = "../images/"+pictArray[i];
		img.alt = pictArray[i];
		img.setAttribute("data-large","../images/"+pictArray[i]);
		img.style.width = '200px';
		img.style.height = '150px';
		img.style.padding = '15px';
		// make draggable and bring to front
		$(img).draggable(
			{helper: 'clone'},
			{appendTo: 'body'}
		);
		
		oldPics.appendChild(img);
     }
}

function resizeOldPicsWindow()
{
	 
}

function initiateTabs()
{
	$( "#old-pics-tab" ).tabs();
	$("#delete-pics-tab").tabs();
}

function makeDroppable()
{
	// make delete box droppable
	$('.delete-pics').droppable(),
	// on drop...
	$('.delete-pics').bind( "drop", 
		function(event, ui) 
		{
			// if not marked as delete
			if(!marked_delete.hasOwnProperty(ui.helper.attr('src')))
			{
				//clone and append to delete box
				ui.draggable.clone().appendTo($('.delete-imgs'));
				// put in data structure to mark for deletion
				marked_delete[ui.helper.attr('src')] = ui.draggable;
			}
		});
}

function convertHash(hash)
{
	var size = 0;
	for(var k in hash)
	{
		size++;
	}
	
	var str = "length=" + size + "&";
	var array = new Array(size);
	var i = 0;
	for(var k in hash)
	{
		if( i != (size-1) ) {
			str = str + "img" + i + "=" + (hash[k]).attr('src')+ "&";
		}
		else
		{
			str = str + "img" + i + "=" + (hash[k]).attr('src');
		}
		i++;
		
	}
	return str;
}


function submitButtonCall()
{
	$('#submitButton').click( function() {
		var string = convertHash(marked_delete);
		alert(string);
		$.ajax({
				type:'POST',
				url: "../web_pages/buttons.php",
				data: string,
				success: function(response) { alert(response); clearAll(); }
			    });
		return false;
		}
	)
}


function clearAll()
{
	$('.delete-imgs').empty();
	marked_delete = [];
}