
var flowerPic = "http://i.imgur.com/82xvs1X.jpg";




$(document).ready(function(){



function Flower(image, name, color, petals, smellsPretty, origin)
{
   /* Properties */
   // Passed-in values
   this.image= image;
   this.name= name;
   this.color = color;
   this.petals = petals;
   this.smellsPretty= smellsPretty;
   this.origin = origin;

   // Default values
   this.isEdible = false;
   this.wiltFactor = 100; //0 is dead, 100 is fresh
   this.leafCount = 10;

   this.pizza = function()
   {
      var passedInHtml = $("#passedIn").html();//html
      console.log(passedInHtml);
      var formatFunction=_.template(passedInHtml); // format is a function
      //_.template compiles HTMl (stored in var passedInHTML) and the stores it into function "format"
      console.log(formatFunction);
      $("#target").append(formatFunction(this)); //format function is returning html 

        //another way to 
      // var template= _.template($("#passedIn").html());
      //$("#target").html(template({flower:this}));


      // format(this);or assign it to a variable

      

   }

}

var carnation = new Flower(flowerPic,"Carnation","Purple","30","Good Smell", "Bogota");

carnation.pizza();


});
    /* Methods */
   // this.sniff = function(){
   //     console.log("Sniff Sniff Sniff!");
   // };
   // // Demonstrates use of arguments with methods
   // this.hasGoodSmell = function(answer) {
   //     if (answer) {
   //         return 'This flower smells amazing!';
   //     } else {
   //         return 'What a noxious weed!';
   //     }
   // };
   // // Demonstrates use of local object variables
   // this.describe = function(answer) {
   //     alert("This flower is " + this.color + ".");
   //   }
   // /// Demonstrates object to object interaction
   // this.compare =  function(otherFlower) {
   //     return("My " + this.color + " flower is much prettier than your " +
   //       otherFlower.color + " flower :P");
   // };
   // append html string to website 
//    this.render = function() {
//        $('body').append("<p>My pretty flower is " + this.color +
//          " and has " + this.petals + " pristine petals.");
//    };
//    // displays message to console
//    this.giveFlower= function(){
//        console.log("Here's a flower")
//     };
// }

// function Bee(flower1, flower2){
//    this.flower1 = flower1;
//    this.flower2 = flower2;

//    this.crossPollinate = function() {
//        var colorBlend = flower1.color + "-" + flower2.color;
//        var petalAvg = Math.round((flower1.petals + flower2.petals) / 2);
//        var leafAvg = Math.round((flower1.leafCount + flower2.leafCount) / 2);
//        var smellTrait = flower1.smellsPretty && flower2.smellsPretty;
//        var flower3 = new Flower(colorBlend, petalAvg, smellTrait, "Class Room 6");
//        flower3.leafCount = leafAvg;

//        return flower3;
//    }

// }

// var flower1 = new Flower("blue", 3, true, "Tenderloin");
// var flower2 = new Flower("green", 10, true, "Bush & Sutter");

// var bee = new Bee(flower1, flower2);

// var flower3 = bee.crossPollinate();


