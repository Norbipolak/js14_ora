/*minden amit nem vett a felvevő hasOwnProperty-től */

const Car = {
    type:"Astra",
    year:1999,
    color:"red"
};

/*
    Megnézi, hogy rendelkezik-e az adott objektum
    a paraméterként megadott tulajdonsággal.
*/
const hasProperty = Car.hasOwnProperty("brand");
console.log(hasProperty); //false

const numberObj = new Number(55);
console.log(numberObj); //[Number: 55]
console.log(typeof numberObj); //object
console.log(typeof numberObj.valueOf()); //number