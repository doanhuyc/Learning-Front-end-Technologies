try{
	var a=10;
	var b=10;
	var result=a/b;
	throw{
		code:101,
		message:"Error division"
	};
}
catch(ex){
	document.getElementById("errorMessage").innerHTML=ex.message;
}
finally{
	console.log("finally block executed");
}