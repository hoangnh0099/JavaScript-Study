function Student() {
  this.name = 'John';
  this.gender = 'M';
}

Student.prototype.age = 15;

var studentObj1 = new Student();
alert(studentObj1.age);

var studentObj2 = new Student();
alert(studentObj2.age);