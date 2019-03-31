// document.getElementById('last').onclick = () => {
// 	document.getElementById('last').innerHTML = 'Secret message';
// };

// $window = $(window);
// $(window).scroll(function(){

// 	if($window.scrollTop() > 400)
// 	    $("#header").addClass('active');
// 	else    
// 	    $("#header").removeClass('active');
// });

function saveData()
{
  var startLocation = document.getElementById('origin').value;
  var destination = document.getElementById('dest').value;

  var startStr = startLocation.split(" "); 
  var destStr = destination.split(" ");

  var startPar = startStr.join("%20");
  var destPar = destStr.join("%20");

	 var startNumber = JSONRequest.post(
	    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?",
	    {
	        "input": startPar,
	        "inputtype": "textquery",
	        "fields": "geometry",
	        "key": "AIzaSyDHlFu8C9EcD_R88OuCkKdDKiKMWhbkwYI",
	    },
	    function (requestNumber, value, exception) {
	    	if (!error && response.statusCode == 200){
	          console.log('message sent successfully');
	          var ans = JSON.parse(body);
	          var lat = ans.candidates[0].location.lat;
	          var long = ans.candidates[0].location.long;

	          var strStr = "" + lat + "," + long;

	          return strStr;
	      } else {
	          console.log('error == ' + error);
	          return -1;
	      }
	    }
	); 

	var destNumber = JSONRequest.post(
	    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?",
	    {
	        "input": destPar,
	        "inputtype": "textquery",
	        "fields": "geometry",
	        "key": "AIzaSyDHlFu8C9EcD_R88OuCkKdDKiKMWhbkwYI",
	    },
	    function (requestNumber, value, exception) {
	    	if (!error && response.statusCode == 200){
	          console.log('message sent successfully');
	          var ans = JSON.parse(body);
	          var lat = ans.candidates[0].location.lat;
	          var long = ans.candidates[0].location.long;

	          var strStr = "" + lat + "," + long;

	          return strStr;
	      } else {
	          console.log('error == ' + error);
	          return -1;
	      }
	    }
	); 






  // POST https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=YOUR_API_KEY

  // AIzaSyDHlFu8C9EcD_R88OuCkKdDKiKMWhbkwYI" 

// jQuery("#return").on('click' function(e) {
// 	var clicks = $(this).data('clicked-times');
// 	$(this).data('clicked-times', ++clicks);
// });
 
// // If data attribute data-clicked-times is more than 0 it's
// // clicked and you get how many clicks were made
// jQuery("#some-btn").data('clicked-times') > 0 // clicked
// jQuery("#some-btn").data('clicked-times') === 0  // no clicked
$("#submit").click(function (e) {
    if ($("#counter").val() == "")
        $("#counter").val(1);
    else {
        var count = parseInt($("#counter").val()) + 1;
        $("#counter").val(count);
    }
    alert("Clicked: " + $("#counter").val() + " times");
});


var request = require("request");
function calculatePath(path){
	console.log(path);
	request({
  uri: path,
  method: "POST"
}, function(error, response, body){
      if (!error && response.statusCode == 200){
          console.log('message sent successfully');

          var ans = JSON.parse(body);
          var steps = ans.routes[0]['legs'][1]['steps'];
          var total = 0;
          for(var i = 0; i < steps.length; i++){
          		total += calculateValue(steps[i].start_location.lat, steps[i].start_location.long, steps[i].end_location.lat, steps[i].end_location.long);
          }

          return total;
      } else {
          console.log('error == ' + error);
          return -1;
      }
  });

function funcName() {
	var request = JSONRequest.post(
	"https://tranquil-earth-40762.herokuapp.com/getSafeRoute",
	{
		"key":"apples",
		"startingLong": startNumber.split(",")[1],
		"startingLat": startNumber.split(",")[0],
		"destinationLong": destNumber.split(",")[1],
		"destinationLat": destNumber.split(",")[0],
	},
	function (error, response, body) {
		if (!error && response.statusCode == 200){
          console.log('message sent successfully');
      	} else {
          console.log('error == ' + error);
          return -1;
      	}
	});

}