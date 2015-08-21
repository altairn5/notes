<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
    <!--<link type ="text/css" href="style.css">-->    
    <link rel="stylesheet" type="text/css" href="style.css">
    <script type ="text/javascript" src ="flower.js"></script>
    
</head>
<body>
<h1> San Francisco Flowers</h1>
<div class="properties">

</div>

</body>
<script type ="text/template" id="template">
    <img id="<%=flower.name%>" src="<%=flower.image%>">
    <ul>

        <li>Flower Name:<%=flower.name%></li>
        <li>Flower Color:<%=flower.color%></li>
        <li>Petal Count:<%=flower.petals%></li>
        <li>leaf Count:<%=flower.leafCount%></li>
        <li>Origin:<%=flower.origin%></li>
        <li>Edible:<%=flower.edible%></li>
        <li>Smells Pretty:<%=flower.smellsPretty%></li>
        <li>Comments:</li>
    </ul>
</script>


</html>

Tika Subedi [7:29 PM]
<$(document).ready(function(){
 function Flower(image,name,origin,color,petals,edible,smellsPretty,leafCount) {
     //properties//
   this.image=image;
   this.name=name;
     this.origin = origin;
     this.color = color;
     this.petalCount = petals;
     // Default values
   this.edible = false;
   this.smellsPretty = true;
   this.leafCount = leafCount;

   this.render = function() {
     var template = _.template($("#template").html());
     $("#flower").html(template({flower: this}));
   }
 }

 var dalhia = new Flower("Dahlia.png","dalhia","Mexico", "red",25,null,null, 6);
 dalhia.render();
 
});