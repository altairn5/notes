var answers = process.argv.slice(2);
var colors = ['Blue', 'red', 'green', 'yellow', 'purple', 'orange', 'pink'];
var capitalCity = 'Assur';
var airspeed = '24mph';

//console.log(answers,colors,capitalCity,airspeed);

for(var i = 0;i<colors.length;i++){
if(colors[i] === answers[0]){
	colors = 1;
}
	else{
		colors = 0;
	}
}


if( capitalCity === answers[1]){
	capitalCity = 1;
}
	else{
		capitalCity = 0;
	}


if(airspeed === answers[2]){
	airspeed = 1;}
	else{
		airspeed = 0;
}

if((colors && capitalCity && airspeed) === 1){
	console.log("You may pass");
}
	else{
		console.log("You have been cast into the gorge of eternal peril!");
	}

