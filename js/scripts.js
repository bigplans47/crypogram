var cleanSentence = function(inputFromUser) {
  var input1 = inputFromUser;
var string = input1.replace(/[^\s\w]|_/g, '');
alert("this is firing " +string);
return string;


}

$(document).ready(function() {
  $("form#form-whole").submit(function(event) {
    event.preventDefault();
    var inputFromUser = $("#message").val();
    var output = cleanSentence(inputFromUser);
$("#result").append("<P>" +output+ "</p>");
    // $("#result").text(string2);



  });
});
