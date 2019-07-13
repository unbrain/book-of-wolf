class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' is crying');
  }
}
class Cat extends Animal {}
class Dog extends Animal {
  speak() {
    console.log(this.name + ' is wa...');
  }
}
let animal = new Animal('laoMing');
animal.speak();
let cat = new Cat('laoLi');
cat.speak()
var dog = new Dog('laoWang');
dog.speak()