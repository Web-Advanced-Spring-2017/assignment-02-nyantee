# Assignment 02

**RESTful Project**

**Due Date: Week 11 - Midnight of 4/5/2017**

Nyantee Asherman


## Weather App
 
 For this assignment, I reworked a tutorial on youtube on how to utilize the popular web API OpenWeatherMap. 
 
 The tutorial was done by Captain Coder:
 https://www.youtube.com/watch?v=OFjxqzMTsBc
 
 Using Captain Coder's GitHub code, I reworked the tutorial to query the city, weather icons, temperature, and temperature description. 
 
 I also reincorporated some elements from the materialize library.
 
 The main parts of the code included:
 
 1. Creating an object Weather in which to store JSON parsed API data
 
 2. Store the object properties into HTML DOM structure using getElementByID
 
 3. Using functions that got data from API
 
 4. Created functions that sent query **function getRequest(URL){ ** ()GET request), and then another function **function update(weather){** which stored new queried information into the Weather object each time
 
 5. Lastly I used the materilize button and made it so that when the user clicks on it, the GET request is made 
 
 
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
            
            
      
 
 
 
 
 
 