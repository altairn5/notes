// ###Quick Challenge - She loves me, she loves me not...
// Create an object method for flower that will play the age old game ['He loves me, he loves me not...'](https://en.wikipedia.org/wiki/He_loves_me..._he_loves_me_not)
// - Count down from the petal number down to 1
// - Alternately display 'He loves me' or 'He loves me not' to the console for each petal count decrement.
// - Display the final phrase with an exclamation; that's the end of the game!


// There are many more aspects to objects that we will discover tomorrow.  For now, play with objects and think up some great object examples that we might use in class.

// PS. Here is the Literal equivalent of the flower constructor with all of the methods intact:

// ```javascript
var flower = {
    color :"red",
	petals : 32,
	smellsPretty: true,
    sniff : function(){
        console.log("Sniff Sniff Sniff!");
    },
    // Demonstrates use of arguments with methods
    smellsGood : function(answer) {
        if (answer) {
            return 'This flower smells amazing!';
        } else {
            return 'What a noxious weed!';
        }
    },
    // Demonstrates use of local object variables
    describe : function(answer) {
        alert("This flower is " + this.color + ".");    
    }
}
