/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: In the global scope, `this` refers to the global object, which is the browser window.

* 2. Implicit Binding: Whenever a function is invoked using dot notation, the object to the left of the dot will be `this`.

* 3. New Binding: When a constuctor function is invoked with the `new` keyword, `this` will refer to the new object created.

* 4. Explicit Binding: Allows us to tell JavaScript exactly what `this` should refer to.

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const animalObj = {
  species: 'pig',
  sound: 'oink',
  makeSound: function () {
    console.log(`I'm a little ${this.species}, and I say \'${this.sound}\' all day long!`)
  }
}

animalObj.makeSound();
// Principle 3

// code example for New Binding
function Animal (species, sound, isDelicious) {
  this.species = species,
  this.sound = sound,
  this.isDelicious = isDelicious,
  this.makeSound = function () {
    console.log(`I'm a little ${this.species}, and I say \'${this.sound}\' all day long!`)
  }
}

const animalOne = new Animal('pig', 'oink', true);
console.log(animalOne);

// Principle 4

// code example for Explicit Binding

const animalTwo = new Animal('rat', 'squeak', false);

console.log( animalOne.makeSound.call( animalTwo ) );