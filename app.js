
			//DOCUMENT READY

//Sets the buttons to trigger the blackout on clicks
$(document).ready(function(){

	$('#calendar').fullCalendar({

        	//callback
        dayClick: function() {
        	
        	$(".open").click(function () {
        		$(".popup").fadeIn(500);
        		$(".cover").fadeTo(500, 0.5);
    		});
   		}

	});

	$(".close").click(function () {
		$(".popup").fadeOut(500);
        $(".cover").fadeOut(500);
    });

});