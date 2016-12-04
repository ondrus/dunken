
//DOCUMENT READY

//Sets the buttons to trigger the blackout on clicks
$(document).ready(function(){

  var calendar = ""
  var state = 'car';

  /*$('.button').click(function () {
    if(this.getAttribute('id')=="day"){
      console.log("hej")
      console.log($('#calendar'))
      $('#calendar').fullCalendar('changeView', "agendaDay");
    }
    if(this.getAttribute('id')=="week"){
      $('#calendar').fullCalendar('changeView', "agendaWeek");
    }
    if(this.getAttribute('id')=="month"){
      $('#calendar').fullCalendar('changeView', "month");
    }
  });*/

  $('.btn').click(function () {
    if(this.getAttribute('id')=="home"){
      document.getElementById("content").innerHTML='<object type="text/html" data="index.html" ></object>';
    }
    if(this.getAttribute('id')=="btnCalendar"){
      $('#content-mid').load('calendar.html');
    }
    if(this.getAttribute('id')=="btnBooking"){
      $('#content-mid').load('morganbookingform.html');
    }
    if(this.getAttribute('id')=="btnInfo"){
      if (state == 'car') {
        $('#content-mid').load('infoCar.html');
      } else {
        $('#content-mid').load('infoHouse.html');
      }    }
  });

	$('#calendar').fullCalendar({
    header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listWeek'
      },
      dayClick: function(date, jsEvent, view) {

         toDay(date);


       }
    	/*	$(this).on('click', function()  {
          //toDay();
    		  setDateFieldData(date);
    			//var targeted_popup_class = jQuery(this).attr('data-popup-open');
        		$('[data-popup="' + "popup-1" + '"]').fadeIn(150);
    		});

    		//----- CLOSE
    		$('[data-popup-close]').on('click', function()  {
      		  //var targeted_popup_class = jQuery(this).attr('data-popup-close');
       			$('[data-popup="' + "popup-1" + '"]').fadeOut(150);

    		});*/

    });

});

function toDay(date){
 $('#calendar').fullCalendar('gotoDate',date);
 $('#calendar').fullCalendar('changeView','agendaDay');
}
	//get and display the clicked day
	function setDateFieldData(date){
    	var dateClicked = String(date.format());
   		var dateFieldElement = document.getElementById('date_field');
   		dateFieldElement.textContent = dateClicked;
	}
