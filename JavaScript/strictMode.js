"use strict";

//undefined variable
var x,y,z;
x=10;
y=2;
z=10+2;
console.log(z);

//duplicate parameters and properties
var ojb= {
	prop1:1,
	prop1:2,
	prop1:3
}
console.log(ojb.prop1);

function foo(param1,param1){
	alert(param1);
}

	foo(1,2);
