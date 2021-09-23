

// $("#checkin").datepicker({
// 	defaultDate: "+1w",
// 	changeMonth: false,
// 	numberOfMonths: 1,
// 	prevText: '<i class="fa fa-chevron-left"></i>',
// 	nextText: '<i class="fa fa-chevron-right"></i>',
// 	onClose: function( selectedDate ) {
// 		$( "#checkout" ).datepicker( "option", "minDate", selectedDate );
// 	}
// });

// $("#checkout").datepicker({
// 	defaultDate: "+1w",
// 	changeMonth: false,
// 	numberOfMonths: 1,
// 	prevText: '<i class="fa fa-chevron-left"></i>',
// 	nextText: '<i class="fa fa-chevron-right"></i>',			
// 	onClose: function( selectedDate ) {
// 		$( "#checkin" ).datepicker( "option", "maxDate", selectedDate );
// 	}
// });


// function subt() {
//     var myText = "Your Booking has been completed successfully, please follow the instructions provided to pick the bike!";
//     alert (myText);
//   }
$("#subt").click(function(){
	alert("Your Booking has been completed successfully, please follow the instructions provided to pick the bike!") 
	window.location = "http://www.google.com/";
	
});

