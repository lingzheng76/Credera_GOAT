"use strict";

var selections = [];
$(document).ready(function () {
  start(questionNumber);
  $(".submit-answer").on("click", function (event) {
    var userAnswer = parseInt($(this).attr("id"));
    selections.push(userAnswer);
    $("#" + userAnswer).addClass("clickStyle");
    setTimeout(function () {
      $(".submit-answer").removeClass("clickStyle");
      start(questionNumber);
    }, 1000);
    questionNumber++;
  });
});
var questionNumber = 0,
    optionFinal = 0;
var allQuestions = [{
  question: 'What kind of food do you like?',
  choices: ["Hamburger", "Ice cream", "Pizza", "Salad"]
}, {
  question: "Which year will you graduate?",
  choices: ["2020", "2021", "2022", "2023"]
}, {
  question: "Which one is your dream pet?",
  choices: ["Unicorn", "Sphinx", "Spider", "Crocodile"]
}, {
  question: 'Which one is the most relaxing place in the world?',
  choices: ["Beach", "Moon", "Mountain", "Internet"]
}]; // continue with next question or end

var start = function start(questionNumber) {
  $('h2').hide().fadeIn(400);

  if (questionNumber !== allQuestions.length) {
    question(questionNumber);
  } else {
    end();
  }
}; // show question and possible answers


function question(questionNum) {
  $("h2").text(allQuestions[questionNum].question);
  $.each(allQuestions[questionNum].choices, function (i, answers) {
    $("#" + i).html(answers);
  });
}

;

function end() {
  finalImage();
  $("ul").hide();
  $("h2").text("Here is your result!");
  $("#image").html('<img src=' + "" + ' alt="">').fadeIn(1000);
  restart();
}

; // TODO

function finalImage() {
  if (selections[0] = 1) {}
}