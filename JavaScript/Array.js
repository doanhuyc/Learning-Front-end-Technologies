
//create literal Array
var StringArry = ["one", "two", "three"]


//create with constructor
var stringArray = new Array();
stringArray[0]="one";
stringArray[1]="two";
stringArray[2]="three";
stringArray[3]="four";

var numericArray = new Array(3);
numericArray[0]=1;
numericArray[1]=2;
numericArray[2]=3;

var mixedArray = new Array(1, "two",3,"four");

var arr = [1,5,2,3,8,6,9,2,1,3,2,3,5,1,4,4,5,4];

console.log(stringArray);
//sort()
console.log(arr.sort());
console.log(arr.reverse());
console.log(arr.pop());
console.log(arr.push(10));
