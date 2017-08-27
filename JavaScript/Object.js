/*Author : Huy Cuong Doan
Date : August 25 2017
Role: Object in JS*/

//create literal Object
var person1 = {
	firstName: "Huy Cuong",
	lastName: "Doan",
	age: 25,
	getFullName: function(){
		return this.firstName+" "+this.lastName;
	},
	address:{
		phone:"5145032969",
		email:"hcuong.doan@gmail.com",
		street:"Saint Francois Xavier",
		Ville:"Saint Laurent"
	}
}
console.log(person1.getFullName());
console.log(person1.age+" years old");

person1["firstName"]='Sebastien';
console.log(person1.getFullName());
console.log(person1.address.phone);


//create Object using Constructor
var person2 = new Object();

person2.prenom='James';
person2.nom='Bond';
person2.getNomComplet = function(){
	return person2.prenom+ ' '+person2.nom;
}
person2.address= {
	phone:'5145032969',
	email:"hcuong.doan@gmail.com",
	street:"saint"
}
console.log(person2.getNomComplet());
console.log(person2);
var person3 = new Object();
console.log (person3.hasOwnProperty("firstName"));
console.log (person1.hasOwnProperty("firstName"));

//create Object using Constructor

function addr (phone,email,street,ville){
	this.phone=phone;
	this.email=email;
	this.street=street;
	this.ville=ville;
}
var add1 = new addr("0988888590","hcuong.doan@gmail.com","HVT","HCM");
console.log(add1.phone);

//iteration all key in a object
var compt=1;
for (var key in person1){
	console.log(key);
	console.log('index of key '+compt);
	compt++;
}


//pass by reference
function changeReference(person){
	person.firstName= 'Bo'
}
changeReference(person1);
console.log(person1.getFullName());