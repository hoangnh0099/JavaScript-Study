function ShowMessage(firstName,lastName){
  alert('Hello '  +arguments[0] + " " + arguments[1]);
  return "1";
}
ShowMessage();
ShowMessage("TEDU");
 //ShowMessage("TEDU Online","Tutorial"); 
ShowMessage("TEDU Online","Tutorial","Youtube");
//var a = ShowMessage();
//console.log(a);

//cal
function calculate(){
  function add(a,b){
    return a + b;
  }
return add;
}

var add = calculate();

console.log(add(10,20));
var add = function(a,b){
  return a+b;
}

console.log(add(12,11));