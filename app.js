
			//DOCUMENT READY

//Sets the buttons to trigger the blackout on clicks
$(document).ready(function(){

  var calendar = ""

  $('.button').click(function () {
    if(this.getAttribute('id')=="day"){
      $('#calendar').fullCalendar('changeView', "agendaDay");
    }
    if(this.getAttribute('id')=="week"){
      $('#calendar').fullCalendar('changeView', "agendaWeek");
    }
    if(this.getAttribute('id')=="month"){
      $('#calendar').fullCalendar('changeView', "month");
    }
  });

	$('#calendar').fullCalendar({
    	dayClick: function(date, jsEvent, view) {
    		//----- OPEN
    		$(this).on('click', function()  {
    			
    			setDateFieldData(date);
    			//var targeted_popup_class = jQuery(this).attr('data-popup-open');
        		$('[data-popup="' + "popup-1" + '"]').fadeIn(150);
    		});
 
    		//----- CLOSE
    		$('[data-popup-close]').on('click', function()  {
      		  //var targeted_popup_class = jQuery(this).attr('data-popup-close');
       			$('[data-popup="' + "popup-1" + '"]').fadeOut(150);
 
    		});
		}
    });
});

	//get and display the clicked day
	function setDateFieldData(date){
    	var dateClicked = String(date.format());
   		var dateFieldElement = document.getElementById('date_field');
   		dateFieldElement.textContent = dateClicked;
	}