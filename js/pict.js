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
	var oldPics = document.getElementById("old-pics");
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
		//img.className = "drag";
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

/*var dragobject =
{
	z: 0, x: 0, y: 0,
	offsetx : null, 
	offsety : null,
	targetobj : null,
	dragapproved : 0,
	
	initialize:function()
	{
		document.onmousedown=this.drag
		document.onmouseup=function()
		{
			this.dragapproved=0
			
			deleteWindow = document.getElementById("delete-pics");
				
			if( !marked_delete.hasOwnProperty(this.targetobj.src))
			{
				deleteWindow.appendChild(this.targetobj.cloneNode(true));
				marked_delete[this.targetobj.src] = this.targetobj;
			}
			
		}
	},
	
	drag:function(e)
	{
		var evtobj=window.event? window.event : e
		this.targetobj=window.event? event.srcElement : e.target

		if (this.targetobj.className=="drag")
		{
			this.dragapproved=1
			
			if (isNaN(parseInt(this.targetobj.style.left)))
			{
				this.targetobj.style.left=0
			}
			
			if (isNaN(parseInt(this.targetobj.style.top)))
			{
				this.targetobj.style.top=0
			}
			
			this.offsetx = parseInt(this.targetobj.style.left)
			this.offsety = parseInt(this.targetobj.style.top)
			this.x = evtobj.clientX
			this.y = evtobj.clientY

			if (evtobj.preventDefault)
				evtobj.preventDefault()
			
			document.onmousemove=dragobject.moveit
		}
	},

	moveit:function(e)
	{
		var evtobj=window.event? window.event : e
		if (this.dragapproved==1)
		{
			this.targetobj.style.left=this.offsetx+evtobj.clientX-this.x+"px"
			this.targetobj.style.top=this.offsety+evtobj.clientY-this.y+"px"
				
			return false
		}
	}
}
*/