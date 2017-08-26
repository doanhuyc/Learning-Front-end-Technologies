/*Author : Huy Cuong Doan
Date : August 25 2017
Role: variable and function*/

var my_variable=5;
var text="hello world";
console.log(my_variable);
console.log(typeof text);
console.log (my_variable);

function addition(a,b){
	var result = a+b;
	return result;
}
console.log(addition(3,4));

function hello(){
	console.log("hello bo");
}
//Call Back Function
setTimeout(hello(),10000);

//loosely type example
var a= 10;
console.log(a);
a= true;
console.log(a);
a="Steve";
console.log(a);
a=null;
console.log(a);

