/*
    Prototípus alapú öröklődés
    Minden egyes objektumnak, van prototype-ja,
    ami az ős objektumát jelenti. Ettől az ős objektumtól
    örököl bizonyos metódusokat és tulajdonságokat.
*/

// const Person = {

// };

// console.log(Person);
// console.log(Person.__proto__);

const Vehicle = {
    vehicleType:"car"
};

const Car = {
    brand:"Opel"
};

Object.setPrototypeOf(Car, Vehicle);
console.log(Car);
console.log(Car.__proto__);
console.log(Car.vehicleType);

const array = [1,2,3,4,5,6,7,8,9,10];
const array2 = array;
array2[0] = -1;
console.log(array);

let str = "géza kék az ég";
let str2 = str;
str2 = "anni tejet inna"; 
console.log(str); //stringeket nem fognak megváltozni 

function addToArray(value, array) {
    array[array.length-1] = value;
}

addToArray("a", array);
console.log(array);

const Car2 = Object.create(Car);
Car2.brand = "Mercedes";
console.log(Car2);

console.log(Car);