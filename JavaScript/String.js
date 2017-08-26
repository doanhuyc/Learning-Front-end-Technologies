/*Author : Huy Cuong Doan
Date : August 25 2017
Role: String*/


var str1 = new String("Hello World");
var str2 = new String("Hello World");
var str3 = "Hello World";
var str4 = "My name is Bo";

console.log(str1);
console.log(str3);

console.log(str1 == str2); //false because str1 and str2 are 2 differents object
console.log(str1 == str3); //true
console.log (str1 === str3); //false

console.log(typeof str1);
console.log(typeof str3);

console.log (str1+" "+ str4);
console.log (typeof(str1+" "+ str4));

var str5 = "I want to say \"Hello\" ";
console.log(str5);

//String methodes:
	//indexOf(String, startingPosition)
	console.log("index of Bo is "+str4.indexOf("Bo",0));
	
	//lastIndexOf(String,startingPositionPosition)
	var e = str4.lastIndexOf("o");
	console.log("LastIndexOf o is "+e);
	console.log("Str4 Length is "+str4.length);
	console.log((e+1)==str4.length);
	
	//replace(SearchValue,ReplaceValue)
	console.log(str1.replace("World", "Bo"));
	
	//substr(start,length)
	console.log(str1.substr(0,5));
	
	//toLowerCase()
	console.log(str1.toLowerCase());
	
	//toUpperCase()
	console.log(str4.toUpperCase());