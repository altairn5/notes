
function Model(name){
	this.type = name;
	this.data =[];
	//going to be accessed by all object that i create at least once.
	this._id=0;

}

Model.prototype={

	create: function (object,callback){
		// object parameters goes in object_containger
		var objectContainer={}; //
		objectContainer._id = this._id;
		this._id +=1; //this._id +=1; accesing Model properties with protype
		objectContainer._ts = Date.now();
		objectContainer.ownObject= object;
		this.data.push(objectContainer);
		return objectContainer;

	
    },
	findById:function(objectId,callback){ // findByID exists to match objectContainer._id to an ID that we are providing via objectID
		var found;
		this.data.forEach(function(object){

			if(object._id === objectId){
			found = object;
		}

	});
		return found;

}
}


function Person (first_name,last_name,github_id){
this.first_name=first_name;
this.last_name=last_name;
this.github_username=github_id;
};

	// }
	// update:function(object,callback){

	// }
	// destroy:function(object,callback){

	// }



var User = new Model ("user");

var Justin = new Person("Justin", "Reyes");
var Justin2 = new Person("Justin", "Almeida");

var createdUser = User.create(Justin);
User.findById(0);
