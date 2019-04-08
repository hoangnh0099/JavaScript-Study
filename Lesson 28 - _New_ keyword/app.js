function MyFunction() {
  var myVar = 1;
  this.x = 100;
}

MyFunction.prototype.y = 200;

var obj = new MyFunction();
obj.x;
obj.y;