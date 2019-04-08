function Person() {
  this.firstName = 'unknown';
  this.lastName = 'unknown';
}

var person1 = new Person();
person1.firstName = 'Steve';
person1.lastName = 'Jobs';

alert('Person 1' + person1.firstName + person1.lastName);