//the first way
var arr1 = [1,2,4,5,2,3,5];
var arr2= ["one","two","three","four"];
var arr3 = [1,"one",true];
console.log(arr3[2]);
//the secon way
var arr4 = new Array();
arr4[0] = "spring";
arr4[1] = "summer";
arr4[2] = "autumn";
arr4[3] = "winter";
console.log(arr4);
var arr5 = new Array(3);
arr5[0] = "past";
arr5[1] = "present";
arr5[2] = "future";
console.log(arr5);

for(var i=0;i < arr5.length; i++){
  console.log(arr5[i]);
}