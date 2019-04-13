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
    $(".win-score").text(winScore);
    //reset game
    reset();

  } else if (playerGuess > compNum) {
    //increment loss
    lossScore++;
    //update losses
    $(".loss-score").text(lossScore);
    //reset game
    reset();
  }
}

//set crystals
var setCrystals = function() {
  //create crystal element
  var val = 0;
  //loop through crystals
  for (var i = 0; i < crystals.length; i++) {
    var crystal = $('<img>');
    val = Math.floor(Math.random() * (12 - 1)) + 1
    //add src to each crystal
    crystal.attr({
      "class": "gem",
      "src": crystals[i],
      "value": val
    })
    $('.crystals').append(crystal);
  }


  //append onto dom
}

//reset game
var reset = function() {
  playerGuess = 0;
  compNum = Math.floor(Math.random() * (120 - 19)) + 19;
  $('.win-score').text(winScore);
  $('.loss-score').text(lossScore);
  $(".comp-num").text(compNum);
  $(".player-num").text(playerGuess);
}

$(document).ready(function() {
  reset();
  setCrystals();

  //onclick here
  $(document).on("click", ".gem", function() {
    var gemValue = parseInt($(this).attr("value"));
    playerGuess += gemValue;
    $(".player-num").text(playerGuess);
    checkWins();
  })
})