// function Animal() {
//     this.eats = true;
//     this.walk = true;
// }

class Animal {
    constructor({name, color}) {
        this.eats = true;
        this.walk = true;

        this.name = name;
        this.color = color;
    }
    
    printAnimal() {
        console.log(`This is an animal called ${this.name}. It eats ${this.food}.`)
    } 
}

class Lion extends Animal {
    roar() {
        console.log("I ROAR!!!!!");
    }
}

const lion = new Lion({name: "lion", color: "golden"});


const rabbit = new Animal({name:"rabbit", color:"grey"});
rabbit.food = "carrots";
lion.food = "humans";


console.log(rabbit);
rabbit.printAnimal();
lion.printAnimal();
console.log(lion);
lion.roar();