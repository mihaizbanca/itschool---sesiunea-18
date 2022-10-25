var phone = "iphone";

var phone = "Android";

var myAge = 12;

function myFunction() {
  var phone = "Not a phone";

  console.log(phone);

  console.log("My age:", myAge);

  //   var myName = "Mihai";  aceasta variabila este declarata doar in interiorul functiei, in exterior nu este vazut
}

if (true) {
  console.log("phone din if:", phone);
  console.log("myAge din if:", myAge);

  var myAddress = "Home";
  console.log("myAddress din if:", myAddress);

  var phone = "Third time is best";
}

console.log(phone);

myFunction();
