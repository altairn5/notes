var mongoose = require("mongoose"); 
mongoose.connect("mongodb://localhost/test");
// process.exit();

var Schema = mongoose.Schema;
var BookSchema = new Schema({
    title: String,
    author: String,
    description: String,
    genre:String,
    ISBN:Number

});
// var Book = mongoose.model('Book', BookSchema);
// var book = new Book({title: "Alice's Adventures In Wonderland"});
// book.author = "Lewis Carroll";
// book.save()
// Book.create({title: "The Giver"}, function (err, book) {
//   console.log(book);
// });

// var Book = mongoose.model('Book', BookSchema);
// var book = new Book({title: "Jurassic Park"});
// book.author = "Michael Crichton";
// book.description = "Uhh... Life... Life finds a way.";
// book.genre = 'fiction';
// book.ISBN = 9780345538987;
//     Book.find({title: "Jurassic Park"}, function(err, found){
// 	var foundTitle = found;
// 	console.log("Found: \n",foundTitle);
// });

// var Book = mongoose.model('Book', BookSchema);

// Book.create({
// 	"title": "Ender's Game",
// 	"author": "Orson Scott Card",
// 	"description": "One child becomes the savior of the human race... or the harbinger of xenocide ",
// 	"genre": "Science Fiction",
// 	"ISBN": "9780765362339"
// }, {
// 	"title": "All the Light We Cannot See",
// 	"author": "Anthony Doerr",
// 	"description": "Takes place during WWII; follows two kids from different perspective. One is an orphan boy, the other a blind girl...",
// 	"genre": "Historical Fiction",
// 	"ISBN": "9781476746586"
// }, {
// 	"title": "The Martian",
// 	"author": "Andy Weir",
// 	"description": "The story follows an American astronaut, Mark Watney, as he becomes stranded alone on Mars and must improvise in order to survive.",
// 	"genre": "Science Fiction",
// 	"ISBN": "9780091956141"
// }, function (err, book) {

// 	console.log("Success!" + book)
// });


