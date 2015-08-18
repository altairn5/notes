// Look at the "readme.md" file for excersises and details 

// function Days("monday","first"){
// 	return console.log
// }


// // testing function or test suite
// function mphToKph(mph){
// 	return Math.round(mph*1.61);
// 	//testing function
// //$node
// //Math.round( mph*1.61)

// }

// // testing values
// console.log(
// 	"mphToKph passing or not?")
// assert(60,97, mphToKph)
// //assert(input, expected output, testing function)
// // return should be ==> return expected out === testingFuction(input)


// // //

// **First**

function assert(input, output, testFunction) {
	return output === testFunction(input);
}

var days =["monday", "tuesday", "wednesday"];
function first(day) {
	if(days[0] === first(day){
		return day;
	}

}
	

console.log(assert(["monday", "tuesday", "wednesday"], "monday", first));
console.log(assert(["thursday", "friday", "saturday"], "thursday", first));


// **Last**

// ```javascript
// assert(["monday", "tuesday", "wednesday"], "wednesday", last)
// assert(["thursday", "friday", "saturday"], "saturday", first)
// ```

// **Min**

// ```javascript
// assert([144, 12, 81, 9], 9, min)
// assert([42, 17, 4, 9, -Infinity, 7], -Infinity, min)
// ```

// **Max**

// ```javascript
// assert([2, 4, 8, 16, 32, 64, 10], 64, max)
// assert([99,-1, Infinity, 0, 99], Infinity, max)
// ```

