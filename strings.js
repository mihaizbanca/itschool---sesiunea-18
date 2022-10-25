let myCNP = "1234567890";

console.log(myCNP[4]);

console.log(myCNP.length);
console.log(myCNP[myCNP.length - 1]);

console.log("substring: " + myCNP.substring(0, 2));

let includesFive = myCNP.includes("555");
console.log(includesFive);

// let brandList = "Dacia BMW Audi Mercedes Porsche";
// console.log(brandList.includes("Porsche"));

let sentence = "Lasa-ma papa la mare";

sentence = sentence.replace("mare", "munte"); // delete element cu sentence.replace("mare", "");
console.log(sentence);

let brandList = "Dacia,BMW Audi,Mercedes,Porsche";
let brands = brandList.split(",");
console.log(brands);

let obj1 = {
  name: "Mihai",
  age: 22,
  address: {
    city: "Bistrita",
    street: {
      nume: "Principala",
      nr: 2,
    },
  },
};

// ATENTIE nu copiaza
let objCopy = Object.assign({}, obj1);
objCopy.address.street.nr = 999;
console.log(objCopy);
console.log(obj1);
