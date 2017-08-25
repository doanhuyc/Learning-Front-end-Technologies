/*Author : Huy Cuong Doan
Date : August 25 2017
Role: variable and function*/

//1. arithmetic
var a=3; var b=4;
var c = a+b;
console.log(c);
c=a-b;
console.log(c);
c=a/b;
console.log(c);
c=a%b;
console.log(c);

//2.comparaison
var d = "3"
console.log(a==d);
console.log(a===d);
console.log (a!=d);
console.log (a!==d);

//3. logical
if( a==d || a==b) 
		console.log("ok");
	else console.log("not ok");
	
//4. assigment
var e= 10;
a= a+10;
console.log(a);
var a=3;
a +=10;
console.log(a);

//5. tenary
var e = b>a? b:a;
console.log(e);