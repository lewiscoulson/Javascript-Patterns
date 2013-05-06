// Various code reuse patterns

// Classical pattern #1
function inherit ( C , P ) {
	C.prototype = new P();
}

function Parent( name ) {
	this.name = name || "Adam";
}

Parent.prototype.say = function(){
	return this.name;
};

function Child( name ){}

inherit( Child , Parent );

var kid - new Child();

kid.say(); // "Adam"

