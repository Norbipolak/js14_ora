/**
    constructor pattern

    A JavaScript-ben a function-ök is objektumok, így 
    létrehozhatsz neki property-ket és metódusokat.
 */
    function Person(firstName, lastName, age, profession) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.profession = profession;
    
        this.goToWork = ()=> {
            console.log(`${this.fullName()} munkába megy.`);
        };
    
        this.fullName = ()=> {
            return `${this.lastName} ${this.firstName}`;
        };
    };
    
    // const p = new Person("Géza", "Szabó", 24, "programozó");
    // p.goToWork();
    
    function Animal() {}
    console.log(Animal.prototype);
    
    Animal.prototype.makeSound = function() {
        console.log("I am making a sound!");
    };
    
    /*
        Létrehoztam egy példányt az Animal-ből.
    */
    const animal = new Animal();
    animal.makeSound();
    
    function Cat() {};
    
    Object.setPrototypeOf(Cat.prototype, Animal.prototype);
    ///console.log(Cat);
    
    const cat = new Cat();
    console.log(cat);