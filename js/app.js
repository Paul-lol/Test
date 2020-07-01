// Challenge 1: Your Age in Days 

function ageInDays(){
var birthYear = prompt('what year were you born ... Good Friend')
var ageInDayss = (2020 - birthYear) * 365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old.')
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('add').appendChild(h1);
}

function reset() {
  document.getElementById('ageInDays').remove();
}

function catGenerator() {
  img = document.createElement('img');
  img.setAttribute("src", "images/cat.gif")
  img.setAttribute("tag", "A nice cat")
  document.getElementById("catImage").appendChild(img);
}


// this is the rock paper scissors aspect of the code


function botChoiceString(){
  randNo = Math.floor(Math.random()*3)
  switch (randNo){
    case 0: return 'rock';
    case 1: return 'paper';
    case 2: return 'scissors';
    default: return -1;
  }
}

function decideWinner(botChoiceString, humanChoice){
   if (botChoiceString == humanChoice) {
     return "tie";
   }
   else if (humanChoice == "rock"){
     if(botChoiceString == "paper")
     {
       return "lost";
     }
     if(botChoiceString == "scissors")
     {
       return "won"
     }
   }
   else if (humanChoice == "paper"){
     if(botChoiceString == "rock")
     {
       return "won";
     }
     if(botChoiceString == "scissors")
     {
       return "lost"
     }
   }
   else if (humanChoice == "scissors"){
     if(botChoiceString == "paper")
     {
       return "won";
     }
     if(botChoiceString == "rock")
     {
       return "lost"
     }
   }
}

function rpsGame(yourChoice){
  var humanChoice = yourChoice.id;
  console.log(humanChoice);
  var bot = botChoiceString(); 
  var winner = decideWinner(bot, humanChoice);
  console.log(bot);
  message = finalMessage(winner);
  console.log(message);
  rpsFrontEnd(humanChoice, bot , message);
}

function finalMessage(winner){
  if (winner === 'won'){
    return {"message": "You won ", "color": "green"}
  }
  else if (winner === 'lost'){
    return {"message": "You lost ", "color": "red"}
  }
  else {
    return {"message": "You tied  ", "color": "orange"}
  }
}

function rpsFrontEnd(humanChoice, botChoice, finalMessage){
  var images = { 
    'rock' : document.getElementById("rock").src,
    'paper' : document.getElementById("paper").src,
    'scissors' : document.getElementById("scissors").src
  }
// lets remoce all the images 
document.getElementById("rock").remove();
document.getElementById("paper").remove();
document.getElementById("scissors").remove();

var humanDiv = document.createElement("div");
var botDiv = document.createElement("div");
var messageDiv = document.createElement("div")

humanDiv.innerHTML = "<img src='" + images[humanChoice] + "' height = 150 width = 150 style= 'box-shadow : 0px 10px 50px rgba(37, 58, 233, 1);'/>";
botDiv.innerHTML = "<img src='" + images[botChoice] + "' height = 150 width = 150 style= 'box-shadow : 0px 10px 50px rgba(243, 38, 233, 1);'/>";
messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px ; padding: 30px; '>" + finalMessage['message'] + "</h1> ";

document.getElementById("flex-box-img").appendChild(humanDiv);
document.getElementById("flex-box-img").appendChild(messageDiv); 
document.getElementById("flex-box-img").appendChild(botDiv); 
}
