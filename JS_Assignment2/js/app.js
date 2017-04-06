var appId = "2962cb4addb55385986ecdee38efed82";
var temp;
var loc;
var icon;
var humidity;
var wind;
var direction;

function updateByCity(city){

	var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + appId;
		sendRequest(url);



console.log(url);

}


function sendRequest(url){

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
   		if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            //store image because to equals is bad
            
            var data = JSON.parse(xmlhttp.responseText);

   			
   			//learned: copy property path from console JSON 

   			var weather = {};
   			weather.icon = data.weather["0"].icon;
   			weather.humidity = data.weather["0"].description; //structured by the api website in a specific way
   			// weather.wind = wind.speed;
   			// //weather.direction = data.wind.deg;
   			weather.loc = data.name;

   			// //had to round to nearest value & convert Kelvin in JSON to Farenheit
   			weather.temp = Math.round(data.main.temp * 9/5 - 459.67);

            //Fill in new parsed info into object weather
           
   			 update(weather);

              //CHECKING

            console.log(data);

		
   			//divided by four to get a more appropriate number :(
   			console.log("testing city", data.name, data.main.temp, data.weather["0"].description,data.weather["0"].icon);

   			
   		} 
            };	
   		


	xmlhttp.open("GET", url, true);
	xmlhttp.send();

}


function update(weather){



humidity.innerHTML = weather.humidity;
loc.innerHTML = weather.loc;
temperature.innerHTML = weather.temp;
icon.src = "http://openweathermap.org/img/w/" + weather.icon + ".png";


//http://openweathermap.org/img/w/02n.png


}

window.onload = function () {

	temp = document.getElementById("temperature");
	loc = document.getElementById("location");
	icon = document.getElementById("icon");
	humidity = document.getElementById("humidity");
	
}

//INPUT CITY NAME 

	





//input city 

$( "#plusButt" ).click(function() {
   

    var Urinput = $(first_name).val();

  if(Urinput!=null) {

   updateByCity(Urinput);

   console.log(Urinput);
   
  }

  else{ console.log(full);
  }

});





            // comparing strings in a nutshell
            // var name = "Cat";
            // var string_to_test = "Car";
            // //testing a string
            // for(var i=0; i < name.length; i++){
            //    if(name.charAt(i) === string_to_test.charAt(i)){
            //       //do nothing
            //    }
            //    else{
            //       return false;
            //    }
            // }

