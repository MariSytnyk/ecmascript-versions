// CLASSES

// OLD SYNTAX
// function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
//
// var Person = function Person(firstName, lastName, age) {
//   _classCallCheck(this, Person);
//
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
// };

// NEW SYNTAX
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  static staticProperty = 'someValue';
}

let ted = new Person("Ted", "Neward", 45);
console.log(ted);

// STATIC VALUES
console.log(Person.staticProperty)

// INHERITENCE
class Author extends Person {
  constructor(firstName, lastName, age, subject){
    super(firstName, lastName, age);
    this.subject = subject;
  }
  get subject() { return this._subject; }
  set subject(value) { this._subject = value; }
  writeArticle() {
    console.log(this.firstName, "just wrote an article on", this.subject);
  }
}

let mark = new Author("Mark", "Richards", 55, "Architecture");
mark.writeArticle();
