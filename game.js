var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
$("#number-to-guess").text(targetNumber);


var numberOptions = [];

//generate a random crystal value.
for (var i=0; i<4; i++) {
var crystalValues = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
console.log(crystalValues);
numberOptions.splice(i, 0, crystalValues);
}
var counter = 0;
var wins = 0;
var losses = 0;
//var numberOptions = [10, 5, 3, 7];

$("#total-score").text(counter);
  $("#wins").text(wins);
  $("#losses").text(losses);

for (var i = 0; i < numberOptions.length; i++) {

  var imageCrystal = $("<img>");
  imageCrystal.addClass("crystal-image");

  imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

  //here is the value of the image crystal - data-crystalvalue... variable crystalValue..
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  $("#crystals").append(imageCrystal);
}

$(".crystal-image").on("click", function() {

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  counter += crystalValue;
  
  
  $("#total-score").text(counter);
  $("#wins").text(wins);
  $("#losses").text(losses);

  //alert("New score: " + counter);

  if (counter === targetNumber) {
    alert("You win!");
    wins++;
    $("#wins").text(wins);
    $("#total-score").empty();
    counter = 0;
    $("#total-score").text(counter);
    targetNumber = Math.floor(Math.random() * 100);
      $("#number-to-guess").text(targetNumber);
    
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
    losses++;
    $("#losses").text(losses);
    $("#total-score").empty();
    counter = 0;
    $("#total-score").text(counter);
    targetNumber = Math.floor(Math.random() * 100);
      $("#number-to-guess").text(targetNumber);
  }

});