
			//DOCUMENT READY

//Sets the buttons to trigger the blackout on clicks
$(document).ready(function(){



	$('#calendar').fullCalendar({
    	dayClick: function() {
    //----- OPEN
    $(this).on('click', function()  {
        //var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + "popup-1" + '"]').fadeIn(350);
 
    });
 
    //----- CLOSE
    $('[data-popup-close]').on('click', function()  {
        //var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + "popup-1" + '"]').fadeOut(350);
 
    });
}
    	});
	});