$(document).ready(function() {
   function doThis(inputSize) {
    
       // take input for the container box dimensions

       var containerSize = 900;
       var numElements = inputSize;
       

       // it's a 12x12 grid, so the grid Element is 1/12 the container size

       var gridElementSize = Math.floor(containerSize / numElements);
       	//on FF the grid elements were overflowing

       var containerDimension = containerSize + "px";
       var gridDimension = gridElementSize + "px";



     // set the size of the container element

       	$(".container").css("height", containerDimension);
   		$(".container").css("width", containerDimension);

   	//create grid elements with a loop and insert html into index.html

   	for (var i = 1; i <(numElements+ 1); i++) {
   		
   		var rowhtml = "<div class = 'row rowid" + i + "'></div>";
   		var rowtag = ".rowid" + i;
 

   		
   		$(".container").append(rowhtml); //create each of the row elements
		  
		   			
		   			for (var j = 1; j<(numElements+1); j++){
		   				
		   				var colhtml = "<div class = 'col colid" + j + "'></div>";
		   				var coltag = ".col" + j;
		   				

		   				$(rowtag).append(colhtml);  //create each of the column elements
			   				
			   				
		   			
                    } //end for j
   	
    
    } // end for i

  // style the elements in the grid
    
  	$(".col").css("background-color", "#ecf3f1");
  	$(".col").css("height", gridDimension);
  	$(".col").css("width", gridDimension);
  	
  	$(".col").css("display", "inline-block");
       
   }; //end entire doThis function
    var howBig = prompt("how big?");
    doThis(howBig);
    
//*********************************************

function drawNow(drawColor) {    
    
    //listen for mouseover event and change the color of the current square
    
    $(".col").on("mouseover",function(){
        $(this).css("background-color", drawColor);
    });
    
    // reset the background color
                     
    $("#clear").on("click", function() {
         $(".col").css("background-color", "#ecf3f1");
     });
    
}; // end drawnow()

// Calling the function drawNow() resets the initial grid with updated settings
var drawColor = "yellow";   
drawNow(drawColor);
    
  //Change the dimensions of the grid when the Dimensions button is clicked  
    
    $("#change").on("click", function() {
          numElements =  prompt("How many squares per side?");
            $(".container").empty();
            
            doThis(parseInt(numElements));
    
        //go back to drawing!
        
        drawNow(drawColor);
        
       
        });
    
   // select the color of the marker to use 
    
    $(".colorselect").on("click", function() {
       newcolor = $('input[name=color]:checked').val();
        drawNow(newcolor);
    });
        



});

