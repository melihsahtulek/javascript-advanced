console.clear();

class Animal {
  constructor(legs) {
    this.legs = legs;
  }

  isWalk() {
    return this.legs >= 2 ? true : false;
  }
}

const cat = new Animal(2);

console.log(cat.isWalk() ? "It can walk." : "It can't walk.");

const fish = new Animal(0);

console.log(fish.isWalk() ? "It can walk." : "It can't walk.");
