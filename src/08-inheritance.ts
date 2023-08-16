export class Animal {
    constructor(public name: string){}

    move(){
        console.log('Moving along!');
    }
    greeting(){
        return `Hello, I'm ${this.name}`;

    }
}

export class Dog extends Animal{

    constructor(public owener: string, name: string) {
        super(name);
    }

    woof(times: number){
        for (let index = 0; index <times; index++) {
            console.log('woof'); 
            
        }
    }


}

const fifi = new Animal ('fifi');
fifi.move();
console.log(fifi.greeting());

const cheis = new Dog ('cheis', 'pipo');
cheis.move();
console.log(cheis.greeting());
cheis.woof(5);
console.log(cheis.owener);


