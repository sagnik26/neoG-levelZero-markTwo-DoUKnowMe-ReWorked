var readlineSync = require("readline-sync"); // for reading input from console
 
var score = 0;


var highScores = [
  {
    name: "Debajit",
    score: 3,
  },

  {
    name: "Akash",
    score: 2,
  },
]

// array of objects
var questions = [{
  question: "Who is the Prime Minister of India? ",
  answer: "Narendra Modi"
}, 
{
  question: "Who is the Foreign Minister of India? ",
  answer: "Subrahmanyam Jaishankar"
},
{
  question: "What is the National Animal of India? ",
  answer: "Tiger"
},
{
  question: "What is the National Flower of India? ",
  answer: "Lotus"
},
{
  question: "What is the National Bird of India? ",
  answer: "Peacock"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to Online Quiz Contest");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();
