var heading = document.querySelector("h1");
var playButton = document.querySelector(".btn");

playButton.addEventListener("click", Play);

function Play() {
  var Player1RandomNum = Math.random() * 6;
  Player1RandomNum = Math.floor(Player1RandomNum + 1);

  var Player2RandomNum = Math.random() * 6;
  Player2RandomNum = Math.floor(Player2RandomNum + 1);

  if (Player1RandomNum > Player2RandomNum) {
    heading.innerHTML = "<i class='bi bi-flag'></i> Player 1 Wins!";
  } else if (Player1RandomNum < Player2RandomNum) {
    heading.innerHTML = "<i class='bi bi-flag'></i> Player 2 Wins!";
  } else {
    heading.textContent = "Draw";
  }

  diceNumer(".player-1-dicee", Player1RandomNum);
  diceNumer(".player-2-dicee", Player2RandomNum);
}

function diceNumer(player, num) {
  if (num === 1) {
    hidden(player, 0, 0);
    hidden(player, 0, 1);
    hidden(player, 1, 0);
    hidden(player, 2, 0);
    hidden(player, 2, 1);
    acitve(player, 1, 1);
  } else if (num === 2) {
    hidden(player, 0, 0);
    hidden(player, 0, 1);
    hidden(player, 2, 0);
    hidden(player, 2, 1);
    acitve(player, 1, 1);
    acitve(player, 1, 0);
  } else if (num === 3) {
    hidden(player, 0, 0);
    acitve(player, 0, 1);
    hidden(player, 1, 0);
    hidden(player, 1, 1);
    acitve(player, 2, 0);
    acitve(player, 2, 1);
  } else if (num === 4) {
    hidden(player, 1, 0);
    hidden(player, 1, 1);
    acitve(player, 0, 0);
    acitve(player, 0, 1);
    acitve(player, 2, 0);
    acitve(player, 2, 1);
  } else if (num === 5) {
    acitve(player, 0, 0);
    acitve(player, 0, 1);
    acitve(player, 1, 0);
    hidden(player, 1, 1);
    acitve(player, 2, 0);
    acitve(player, 2, 1);
  } else {
    acitve(player, 0, 0);
    acitve(player, 0, 1);
    acitve(player, 1, 0);
    acitve(player, 1, 1);
    acitve(player, 2, 0);
    acitve(player, 2, 1);
  }
}

function acitve(player, rowNum, colNum) {
  var PlayerDice = document.querySelector(player).querySelectorAll(".dice-row");

  var col = PlayerDice[rowNum].children[colNum];
  col.classList.add("active");
  col.classList.remove("hidden");
}
function hidden(player, rowNum, colNum) {
  var PlayerDice = document.querySelector(player).querySelectorAll(".dice-row");

  var col = PlayerDice[rowNum].children[colNum];
  col.classList.add("hidden");
  col.classList.remove("active");
}
