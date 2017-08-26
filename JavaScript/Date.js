/*Author : Huy Cuong Doan
Date : August 25 2017
Role: Date in JS*/

var date1= new Date();
var date2= new Date("5/21/2017");
var date3= new Date("Febuary,21,2017");
var date4= new Date("21/5/2017"); //invalide
var date5= new Date(5000);

console.log(date1);
console.log(date2);
console.log(date3);
console.log(date4);
console.log(date5);

//getDay() 
console.log(date2.getDay());

//getDate() return a day 
console.log(date2.getDate());

//getMonth() return a month with january = 0
console.log(date2.getMonth());

//getFullYear() return year
console.log(date2.getFullYear());

//getYear() return this.year - 1990
console.log (date2.getYear());

//convert a valid string date format to a Date object
Date.parse("5/21/2015") //convert string into milisecond since midnight 1970
date6= new Date(Date.parse("5/21/2015"));
console.log(date6);

//comparaison 2 date . Date work with <, > ,>= <=. but have to use getTime() for ==
date7 = new Date("5/8/1990");
date8 = new Date("May, 8,1990");
date9 = new Date("5/9/1990");
date10 = new Date(Date.parse("5/8/1990"));
date11 = new Date("5/8/1990");


console.log(date7==date8); //false
console.log(date7==date11); //false

console.log(date7.getTime() == date8.getTime()); //true
console.log(date7.getTime() == date10.getTime()); //true
console.log(date7.getTime() == date11.getTime()); //true
console.log(date7<date9); //true

console.log(date7>= date8); //true
console.log(date7>=date9); // false