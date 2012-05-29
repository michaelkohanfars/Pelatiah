var pictureViewer = function(pictArray)
                    {
                        var picGallery = document.getElementById("cp");
                        var list, anchor, img;
                        
                        for(var i = 0; i<pictArray.length; i++)
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
        		$("#new-pics").css('width',(w < 768) ? 500 : 800);
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
	var serverPics = document.getElementById("old-pics");
    var list, anchor, img;
                        
    for(var i = 0; i < pictArray.length; i++)
    {  
		//Create new img object
		img = document.createElement("img");
		img.src = "../images/"+pictArray[i];
		img.alt = pictArray[i];
		img.setAttribute("data-large","../images/"+pictArray[i]);
		img.style.width = '200px';
		img.style.height = '150px';
		img.style.padding = '25px';
		
		//create new anchor object
		anchor = document.createElement("a");
		anchor.href = "#";
		anchor.appendChild(img);
		
		//Create and append all items to the new list object
		//list = document.createElement("li");
		//list.appendChild(anchor);
		
		//Append everything to the main list
		serverPics.appendChild(anchor);
     }
}
