/*var fahrenheit = 32;
var celsius = 32;


function convertToFahrenheit(tempToF){
	tempToF = (celsius*9/5)+32;
	console.log(" Fahrenheit temp is " + tempToF);
}

function convertToCelsius(tempToC){
	tempToC = (fahrenheit-32)*5/9;
	console.log("Celsius temp is " + tempToC);
}
convertToFahrenheit(celsius);
convertToCelsius(fahrenheit);*/

var values = process.argv.slice(2);
var temp = values[0];
var type = values[1];



function tempConverter(temp,type){
var kelvin = 0;
	//to Fahrenheit
	if(type === 'c')
	{
		temp = (temp*9/5)+32;
		kelvins= (temp+459.67)*5/9;
		type = "Celsius";
		console.log(temp + " degree was originally in  " + type + " ,it is now in Fahrenheit)");
		console.log("while in Kelvins "+ temp + " Fahrenheits is equal to: " + kelvins);
	}
	else if(type === 'f')
	{
		temp = (temp-32)*5/9;
		kelvins = temp + 273.15;
		
		type = "Fahrenheits";
		console.log(temp + " degree was originally in  " + type + " now it is in Celsius");
		console.log("while in Kelvins "+ temp + " Celsius is equal to: " + kelvins);
	}
}

tempConverter(temp,type);



