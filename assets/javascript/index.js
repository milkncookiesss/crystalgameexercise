//crystal images
var crystals = ['./assets/images/Amethyst.png', './assets/images/Garnett.png', './assets/images/Rose.png', './assets/images/Steven.png'];

//trackers
var compNum = Math.floor(Math.random() * (120 - 19)) + 19;
var winScore = 0;
var lossScore = 0;
var playerGuess = 0;

var checkWins = function() {
  //check if player wins
  if (playerGuess === compNum) {
    //increment score
    winScore++;
    //update score
    //reset game

  } else if (playerGuess > compNum) {
    //increment loss
    lossScore++;
    //update losses
    //reset game

  }
}

//set crystals
var setCrystals = function() {
  //create crystal element
  var num = 0;
  var val = 0;
  //loop through crystals
  for (var i = 0; i < crystals.length; i++) {
    var crystal = $('<div>');
    val = Math.floor(Math.random() * (12 - 1)) + 1
    num = i
    //add src to each crystal
    crystal.attr({
      "class": "gem",
      "src": crystals[i],
      "value": val
    }).css({
      "background-image": `url(${crystals[i]})`,
      "background-size": "cover"
    })
    $('.crystals').append(crystal);
  }


  //append onto dom
}

//reset game
var reset = function() {
  playerGuess = 0;
  compNum = Math.floor(Math.random() * (120 - 19)) + 19;
  $('.wins').html(winScore);
  $('.losses').html(lossScore);
}

$(document).ready(function() {
  reset();
  setCrystals();

  //onclick here
  $(document).on("click", ".gem", function() {
    var gemValue = parseInt($(this).attr("value"));
    playerGuess += gemValue;
    console.log(playerGuess);
  })
})