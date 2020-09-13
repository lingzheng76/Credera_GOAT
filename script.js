var selections = [];
var questionNumber = 0;

$(document).ready(function () {
  start(questionNumber);

  $(".submit-answer").on("click", function (event) {
    var userAnswer = parseInt($(this).attr("id"));
    selections.push(userAnswer);
    $("#" + userAnswer).addClass("clickStyle");
    setTimeout(function () {
      $(".submit-answer").removeClass("clickStyle");
      start(questionNumber);
    }, 250);

    questionNumber++;
  });
});

var images = [
  {
    paths: [
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/relieved-face_1f60c.png",
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/smiling-face-with-sunglasses_1f60e.png",
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/grinning-face-with-star-eyes_1f929.png",
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/face-with-uneven-eyes-and-wavy-mouth_1f974.png"
    ]
  },
  {
    paths: [
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/party-popper_1f389.png",
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/school-satchel_1f392.png"
    ]
  },
  {
    paths: [
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/llama_1f999.png",
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/sloth_1f9a5.png",
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/turtle_1f422.png",
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/crocodile_1f40a.png"
    ]
  },
  {
    paths: [
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/hamburger_1f354.png",
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/ice-cream_1f368.png",
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/burrito_1f32f.png",
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/green-salad_1f957.png"
    ]
  }
];

var resultimg = [
  "http://drive.google.com/thumbnail?id=1mx31yg84BAmwdflh7FmFR8s1cfS1bbDo",
  "http://drive.google.com/thumbnail?id=1eUpqEGpKg-0VIyuk0XKVM2xhrk6PTPv6",
  "http://drive.google.com/thumbnail?id=1PsEZgQPYu_Jh-4QYABM1unIQ1jt29unu",
  "http://drive.google.com/thumbnail?id=1sy3gPn34Z-gVAWHvXa_ecIBiupfWKJaL"
];

var allQuestions = [
  {
    question: "How are you feeling today?",
    choices: ["Calm.", "Cool-", "Excited!", "Kinda Tired"]
  },
  {
    question: "Are you graduating this year?",
    choices: ["Yes!", "Not yet!"]
  },
  {
    question: "Which one is your dream pet?",
    choices: ["Llama", "Sloth", "Turtle", "Crocodile"]
  },
  {
    question: "Which one is your favorite food?",
    choices: ["Hamburger", "Ice cream", "Burrito", "Salad"]
  }
];

function showfairmoji(questionNum) {
  document.getElementById("fairtext").style.visibility = "visible";
  if (questionNum !== 0) {
    document.getElementById("fairmoji").style.visibility = "visible";
    document.getElementById("fairmoji").src = resultimg[questionNum - 1];
  }
}

// continue with next question or end
var start = function (questionNumber) {
  $("h2").hide().fadeIn(400);
  if (questionNumber !== allQuestions.length) {
    question(questionNumber);
  } else {
    end();
  }
};

// show question and possible answers with images
function question(questionNum) {
  $("h2").text(allQuestions[questionNum].question);
  if (questionNumber == 1) {
    document.getElementById("2").style.visibility = "hidden";
    document.getElementById("3").style.visibility = "hidden";
    document.getElementById("img2").style.visibility = "hidden";
    document.getElementById("img3").style.visibility = "hidden";
  } else {
    document.getElementById("2").style.visibility = "visible";
    document.getElementById("3").style.visibility = "visible";
    document.getElementById("img2").style.visibility = "visible";
    document.getElementById("img3").style.visibility = "visible";
  }

  $.each(allQuestions[questionNum].choices, function (i, answers) {
    $("#" + i).html(answers);
  });
  $.each(images[questionNum].paths, function (j, path) {
    document.getElementById("img" + j + "").src = path;
  });
  showfairmoji(questionNum);
}

function end() {
  document.getElementById("fairtext").style.visibility = "hidden";
  $("ul").hide();
  $("h2").text("Here is your result!");
  document.getElementById("fairmoji").src = resultimg[3];

  setTimeout(redirect, 3000);

}

function redirect() {
  if (
    window.confirm(
      "You are the next one in line to speak with John from Credera. Click OK to be redirected to the meeting room!"
    )
  ) {
    window.location =
      "https://illinois.zoom.us/j/7864448219?pwd=SFpvMEdxVTlYV1orU3J1VWlEUVE1QT09";
  } else {
    alert("You exited the line!");
  }
}
