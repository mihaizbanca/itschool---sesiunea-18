// inainte de ES6
let name = "Bob";
let location = "Timisoara";

let message = "Salut, sunt " + name + " din " + location + " .";

console.log(message);

// dupa ES6

let newMessage = `Salut, sunt ${name} din ${location} .`; // backtick - langa tasta 1 pe tastatura ---templating de strings

console.log(newMessage);

// -----------
// inainte de ES6
let address = {
  city: "Craiova",
  street: "Strada Mare",
  number: 10,
};

// let city = address.city;
// let street = address.street;
// let number = address.number;

// if (city === "Craiova") {
//   console.log("sunt din craiova");
// }

// dupa ES6

const { city, street, number } = address;
console.log(city, street, number);

//  ES9
// const { myTown: city, myStreet: street, number } = address;
// console.log(myTown, myStreet, number);

const animals = ["caine", "pisica"];
// const cat = animals[1];
// const dog = animals[0];

const [dog, cat] = animals; // daca scriem [cat, dog] ----> cat - caine si dog - pisica
console.log(dog, cat);

// destructurare = despartire array in partile componente

//  inainte de ES6
const object1 = {
  masa: "ikea",
  dulap: "ikea",
};

const object2 = {
  cada: "dedeman",
  oglinda: "brico",
};

const mobilier = Object.assign({}, object1, object2);
console.log(mobilier);

// dupa ES6

const mobilier2 = { ...object1, ...object2 }; // spread operator
console.log(mobilier2);

// array concatenate inainte de ES6
const anim1 = ["caine", "pisica"];
const anim2 = ["vaca", "porc"];

// const anim3 = anim1.concat(anim2);
// console.log(anim3);

// dupa ES6

const anim4 = [...anim1, ...anim2];
console.log(anim4);

// ------------------------

// const myObj = { name: 'Bob'};
// const secondObj = { myObj};

const address = {
  street: "principala",
  number: 1,
};

const student = {
  name: "Bob",
  address, // atata timp cat cheia e egala cu valoare se scrie doar o data
};
