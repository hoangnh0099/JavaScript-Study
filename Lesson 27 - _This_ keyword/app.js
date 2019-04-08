var myVar = 100;

function WhoIsThis() {
  var myVar = 200;

  alert(myVar);
  alert(this.myVar);
}

WhoIsThis();

var obj = new WhoIsThis();
alert(obj.myVar);