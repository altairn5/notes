

//console.log("it is working");
var temp = process.argv.slice(2);
console.log(temp);

if (temp <= 80){
	console.log("Enjoy the day! Let's have a picnic :)" );
}
else if(temp <= 60){
	console.log("brr");
}
else{
	console.log("too hot");
}
