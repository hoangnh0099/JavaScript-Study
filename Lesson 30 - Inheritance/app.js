function Person(firstName, lastName) {
  this.FirstName = firstName || 'unknown';
  this.FirstName = firstName || 'unknown';
};

Person.prototype.getFullName = function() {
  return this.FirstName + ' ' + this.LastName;
}