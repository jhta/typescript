class Animal {
  move(distanceInMeters: number = 0) {
      console.log(`Animal moved ${distanceInMeters}m.`)
  }
}

class Dog extends Animal {
  bark() {
      console.log('Woof! Woof!')
  }
}

const dog = new Dog()
dog.bark()
dog.move(10)
dog.bark()

class Product {
  // public description 
  private title:string
  public description:string
  constructor(theTitle: string) {
    this.title = theTitle
    this.description = 'descriptor for ' + theTitle
  }
  getTitle() {
    this.title
  }
}
const p1 = new Product('p1') 
// p1.name // Error: 'name' is private;
p1.description
p1.getTitle()