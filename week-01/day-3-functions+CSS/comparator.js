
/*2. The Great Comparator

Create a function that compares two integers, a and b, and returns a numerical value indicating if a is greater, less than, or equal to b. This function will be used as a helper function for future module challenges.

Specs:

Use assertions to validate that the parameters passed into the function are integers
If a is grater than b, return a positive number
If a is less than b, return a negative number
If a and b are equal, return a zero
Here's an expected function prototype:

function compare(a, b);

Comparator Stretch Goal

Extend your function to accept Strings as well as Integers. The function will need to detect the type of parameter passed in and determine what logic will need to be performed. Assume that a and b will be both Strings or both Integers. Use the above Specs as a guideline for your implementation. The same function prototype will apply.*/

var integers = process.argv.slice(2);
var a = integers[0];
var b = integers[1];

function comparator(a,b){
	
	if(a===b){
		return 0 ;
	}
	else if(a>b){
		return 1;
	}
	else{
		return -1;
	}
}
console.log(comparator(a,b));