var cleanSentence = function(inputFromUser) {
  var input1 = inputFromUser;
var string = input1.replace(/\s+/g, '');
var stringArray=string.split();
alert("this is firing " +string);
var howLong = parseInt(string.length);
var dimensions = Math.ceil(Math.sqrt(howLong));




// alert(stringArray+ " this is what we have");
// for (var i = 0; i < dimensions; i++) {
//   testarray = string.slice(dimensions*i, (dimensions*(i+1)) );
// }

alert(dimensions);
alert(string+ " this is what we have left" )  // we split strings into groups of dimension size

// masterArray=[];
// index1=0;
// index2=dimensions;
// for (i = 0; i<=10 ; i++) {
// masterArray[i]= string.slice(index1,index2);
// index1=index1+dimensions;
// index2=index2+dimensions;
// // index1=index1+8
// // index2=index2+9
// console.log(masterArray[i]);
// }
// dont compare yourself to others compare yourself to the person you were yesterday


masterArray=[];
index1=0;
index2=dimensions;
for (i=0; i<=dimensions; i++) {
  masterArray[i] = string.slice(index1,index2);
  index1=index1+dimensions-1;
  index2=index2+dimensions-1;
}
count=0
  for (element=0; element < masterArray.length; element++) {
    for (index=0; index<masterArray.length -1; index++) {
      current=masterArray[element];
      alert(current[index]);
    }
count=count+1;
alert(current[element] + count+ " alert");
}

// masterArray.text(i);


// console.log(masterArray);
// console(masterArray[1]);



return string;
}

$(document).ready(function() {
  $("form#form-whole").submit(function(event) {
    event.preventDefault();
    var inputFromUser = $("#message").val();
    var output = cleanSentence(inputFromUser);
$("#result").append("<P>" +output+ "</p>");



  });
});
