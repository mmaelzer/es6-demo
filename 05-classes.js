// class

class Person {

    constructor(name) {
       this.name = name;
    }

    get dudename() {
        return this.name + 'dude';
    }

    set dudename(name) {
        this.boop = name;
    }

    someMethod() {
        console.log('you called someMethod');
    }
}

let mike = new Person('mike');

console.log(mike.dudename);

mike.dudename = 'hooboy';

console.log(mike.boop);

class Dude extends Person {

    constructor(name) {
        super(name);
    }

    someMethod() {
        super.someMethod()

        console.log('howdy');
    }

    static someStaticMethod() {
        console.log('oh so nice static');
    }
}

Dude.someStaticMethod();

var dude = new Dude('boop');

dude.someMethod();
// inheritance


// super


// static


// getters & setters

