// various object creation patterns

// name space pattern
var APP = APP || {};

APP.Parent = function(){};
APP.Child = function(){};

APP.modules = {};

APP.modules.module1 = {};
APP.modules.module2 = {};

// name space creation function
APP.namespace = function( ns_string ){
	var parts = ns_string.split( "." ),
		parent = APP,
		i;

	// strip redundant leading global
	if ( parts[0] === "APP" ) {
		parts = parts.slice(1);
	}

	for ( i = 0; i < parts.length; i += 1 ) {
		// create a property if it doesn't exist
		if ( typeof parent[parts[i]] === "undefined" ) {
			parent[parts[i]] = {};
		}

		parent = parent[parts[i]];
	}
	return parent;
};

// module pattern
APP.namespace("APP.modules.module3");

APP.modules.module3 = ( function(){
	// dependencies
	var mod1 = APP.modules.module1,
		mod2 = APP.modules.module2,

		// private properties
		prop1 = "",
		prop2 = 0;

		// private methods
		// ...

	// init
	// ...

	// public API
	return {
		method1 : function(){},

		method2 : function(){}
	};

}());

// chaining pattern
var obj = {
	method1 = function(){
		return this;
	},
	method2 = function(){
		return this;
	},
	method3 = function(){
		return this;
	}
};

obj.method1().method2().method3();

