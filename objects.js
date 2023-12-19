/*
    JavaScript property descriptors
*/
/*
Eddig ugy csináltunk különböző propertyket, tulajdonságokat az objektumoknak, hogy készítünk egy objektumot 
*/ 

// const Car = {
//     brand:"Opel",
//     type:"Astra",
//     year:1999,
//     color:"blue"
// };

/*
Ezt máshogy is meg lehet oldani Object.defineProperty nevű metódus, az Object. az objektumoknak az ős-szülője, tehát az objektum metódusai 
minden objektumban benne kell, hogy legyenek

defineProperty arra jó, hogy lehet vele készíteni különböző property-ket és ez azért jó mert itt tudjuk befolyásolni ezeknek a tulajdonságoknak
tulajdonságait.
pl. Car-ban létrehozunk egy "brand" nevű property-t és itt pl. van egy olyan kulcsunk, az objektum leíró objektumban {value: ""} (az a
furcsa, hogy egy objektumot használunk arra, hogy leírjuk az objektumnak a tulajdonságait), hogy value -> 
*/

"use strict"//hogyha a writeable false és mégis felül akarjuk írni a brand-at másra, akkor nem jön ki hibaüzenet, csak ha eléírjuk ezt

const Car = {};

Object.defineProperty(Car, "brand", {
    value:"Opel",
    writable:false //ha false akkor -> readonly property, tehát nem lehet felülírni 
});

/*
writeable: azt jelenti, hogy felül lehet-e írni magát a tulajdonságot(value: Opel) (false, true) és ha azt mondom, hogy false,
akkor elvileg nem lehet felülírni a tulajdonságot 
Megprobáljuk felülírni a Car.brand-at, amit beállítuttonk Opel-re -> Mercedes
akkor azt elvileg nem tudjuk megtenni ->
*/

Car.brand = "Mercedes";

/*
a definePropertynek 3 metódsua van.
1. paraméter -> objekum, aminek meg szeretnénk határozni ezt a tulajdonságát
2. paraméter -> property neve
3. paraméter -> objektum leíró objektum, olyan objektum, ami leír egy objektumot 

value-nak mindig benne kell lennie, vagy különben undefined lenne az értéke
writeable mellett létezik még egy olyan, hogy -> 
enumerable -> ha azt modjuk, hogy false, akkor bizonyos esetekben nem fog látszódni ez a property 
*/

Object.defineProperty(Car, "brand", {
    value:"Opel",
    writable:false, //ha false akkor -> readonly property, tehát nem lehet felülírni
    enumerable:true//false /*X*/
});

const keys = Object.keys(Car); //paraméterben megadott objektumoknak a kulcsait szedi ki egy tömbbe
console.log(keys);
//[]- enumerable:false miatt nem látszik mi van benne 
//['brand']- ha az enumerable true

/*
Hiába hoztunk neki létre egy brand nevű kulcsot a Car-nak, nem fogjuk látni mi van benne -> console.log(keys) -> [], üres tömb
->
átírtuk az enumerable true-ra és most már látjuk mi van a tömbben -> ['brand']
*/

/*
Most visszaállítottuk az enumerable-t újra false-ra
*/
console.log(Car.brand);
/*
kiírja a terminálra, hogy Opel, de a keys-ben meg még egy pár dologban egyáltalán nem fog látszodni
*/
Object.defineProperty(Car, "brand", {
    value:"Opel",
    writable:false, 
    enumerable:false,
    configurable:false /*X*/
});

/*
Configurable azt jelenti, hogy lehet-e utólagosan változtatni az értéken vagy sem
*/

Object.defineProperty(Car, "brand" {
    value:"Mercedes",
    writeable:false, //kijön egy üres tömb, ezt lehet állítani
    enumerable: true, //ha még hozzáírjuk az enumerable true-t, akkor viszont kapunk egy hibaüzenetet
    // de ja átálítjuk az elözőben a configurable-t true-ra, akkor már jó és kapunk egy üres tömböt megint 
    configurable:false
});

/*
Szóval kicsit hülyén müködeik, mert ha configurable(Opelnél configurable -> true), 
akkor tudjuk állítani a writeable, enumerable és a configurable-t is (másodiknál -> Mercedes)
de ha viszont az elsőnél configurable(false - Opelnél), akkor lehet állítani a writeable-true-ra 
-> 
részletesen meghatározza, hogy lehet-e ezeket a property-ket módosítani 
*/

/*****************************************************************************************************************************/

/*
Megnézzük, hogy hogyan tudjuk az objektumokból az összes value-t kiszedni -> Object.values()
*/

const values = Object.values(Car); 
//kapunk vissza egy tömböt, ami az összes value-ját meghatározza -> csak akkor látjuk, ha enumerable true!!!
//mert különben nem csak a keys-eket Object.keys(Car) nem kapjuk vissza, hanem az értékeket sem Object.values(Car)
console.log(values);//['Opel']

const keys = Object.keys(Car);
console.log(keys); //['brand'] - visszaadja az összes kulcsut - jelen esetben egy kulcsunk van a brand 

/*
De most létrehozzuk kézzel, hogy több értékeink legyenek, én itt alul fogom mégegyszer, mert nem baj, ha duplikálodik 
nem console.log()-ozok ugysem
*/

const Car = {
    type: "Astra",
    year: 1999,
    color:"red"
};

const entries = Object.entries(Car); 
console.log(entries);

/*
entries visszad nekünk egy iterable valamit és egy tömböt, amiben tömbök találhatóak (kétdimenziós tömb)
és a belső tömböknek a nulladik indexű eleme azok a kulcsai az objektumnak, az elsők pedig azértékek 

[
    ['type', 'Astra'],
    ['year', 1999],
    ['color', 'red'],
    ['brand', 'Opel']
]

ezek azért lehet hasznos számunkra, mert tudunk for ciklussak jól végig lehet menni a kulcs-értékpárokon
*/

for(const entry of entries){
    console.log(`${entry[0]} - ${entry[1]}`);
}

/*
type - Astra 
year - 1999
color - red
brand - Opel 
*/

for(const key in Car){
    console.log(key);
}
/*
Itt visszakapjuk a Car-nak a kulcsait 
for-in -> arra jó, hogy objektumoknak a kulcsait tudjuk vele visszakapni 
*/
/*
de ez müködik tömböknél is, nullától, length-1 visszakapom a számokat (indexeket)
a tömb is tulajdonképpen egy objektum a JavaScriptben és a kulcsai pedig az indexszámok
*/
const fruits = ["alma", "barack", "citrom", "dinnye", "eper", "feketeribizli"];

for(const key in fruits) {
    console.log("index: "key);
}
/*
index: 0
index: 1
index: 2
index: 3
index: 4
index: 5
*/

/*
Vissza tudjuk kapni a propertyDescriptorokat is, két paramétert vár
1. paraméter -> objektum
2. paraméter -> property, amit keresünk 
*/

const propertyDesc = Object.getOwnPropertyDescriptor(Car, "brand");
console.log(propertyDesc);
/*
{
    value: 'Opel',
    writeable: true,
    enumerable: true,
    configurable: false
}
*/

/*
Vissza tudjuk kapni az összes property descriptort is 
itt csak egy paramétert vár az objektumot 
és mindegyik hozzárakja az alapból beállított writeable, enumarable, configurable-t is 
*/

const allPropertyDescs = Object.getOwnPropertyDescriptors(Car);
console.log(allPropertyDescs);
/*
Megcsinálja ezeket propertyDescriptorokat automatikusan, ha mi nem állítjuk be, csak csinálunk szimplán egy Car objektumot 
tehát minden objekumnak vannak ilyen propertyDescriptorai automatikusan
*/
/*
{
    value: 'Opel',
    writeable: true,
    enumerable: true,
    configurable: false
}
type:
{
    value: 'Astra',
    writeable: true,
    enumerable: true,
    configurable: false
}
year:
{
    value: 1999,
    writeable: true,
    enumerable: true,
    configurable: false
}
color:
{
    value: 'red'
    writeable: true,
    enumerable: true,
    configurable: false
}
brand:
{
    value: 'Opel',
    writeable: true,
    enumerable: true,
    configurable: false
}
*/









