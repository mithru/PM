
// other themes to add ?
// bigger memory?

var library = {
  datenight: [
    'img/Dates/1.jpg',
    'img/Dates/2.jpg',
    'img/Dates/3.jpg',
    'img/Dates/4.jpg',
    'img/Dates/5.jpg',
    'img/Dates/6.jpg',
    'img/Dates/7.jpg',
    'img/Dates/8.jpg',
    'img/Dates/9.jpg',
    'img/Dates/10.jpg',
    'img/Dates/1.jpg',
    'img/Dates/2.jpg',
    'img/Dates/3.jpg',
    'img/Dates/4.jpg',
    'img/Dates/5.jpg',
    'img/Dates/6.jpg',
    'img/Dates/7.jpg',
    'img/Dates/8.jpg',
    'img/Dates/9.jpg',
    'img/Dates/10.jpg'
  ],
  hilton: [
    'img/Hilton-Rak/1.jpg',
    'img/Hilton-Rak/2.jpg',
    'img/Hilton-Rak/3.jpg',
    'img/Hilton-Rak/4.jpg',
    'img/Hilton-Rak/5.jpg',
    'img/Hilton-Rak/6.jpg',
    'img/Hilton-Rak/7.jpg',
    'img/Hilton-Rak/8.jpg',
    'img/Hilton-Rak/9.jpg',
    'img/Hilton-Rak/10.jpg',
    'img/Hilton-Rak/1.jpg',
    'img/Hilton-Rak/2.jpg',
    'img/Hilton-Rak/3.jpg',
    'img/Hilton-Rak/4.jpg',
    'img/Hilton-Rak/5.jpg',
    'img/Hilton-Rak/6.jpg',
    'img/Hilton-Rak/7.jpg',
    'img/Hilton-Rak/8.jpg',
    'img/Hilton-Rak/9.jpg',
    'img/Hilton-Rak/10.jpg'
  ],
  jordon: [
    'img/Jordon/1.jpg',
    'img/Jordon/2.jpg',
    'img/Jordon/3.jpg',
    'img/Jordon/4.jpg',
    'img/Jordon/5.jpg',
    'img/Jordon/6.jpg',
    'img/Jordon/7.jpg',
    'img/Jordon/8.jpg',
    'img/Jordon/9.jpg',
    'img/Jordon/10.jpg',
    'img/Jordon/1.jpg',
    'img/Jordon/2.jpg',
    'img/Jordon/3.jpg',
    'img/Jordon/4.jpg',
    'img/Jordon/5.jpg',
    'img/Jordon/6.jpg',
    'img/Jordon/7.jpg',
    'img/Jordon/8.jpg',
    'img/Jordon/9.jpg',
    'img/Jordon/10.jpg'
  ],
  longbeach: [
    'img/Longbeach/1.jpg',
    'img/Longbeach/2.jpg',
    'img/Longbeach/3.jpg',
    'img/Longbeach/4.jpg',
    'img/Longbeach/5.jpg',
    'img/Longbeach/6.jpg',
    'img/Longbeach/7.jpg',
    'img/Longbeach/8.jpg',
    'img/Longbeach/9.jpg',
    'img/Longbeach/10.jpg',
    'img/Longbeach/1.jpg',
    'img/Longbeach/2.jpg',
    'img/Longbeach/3.jpg',
    'img/Longbeach/4.jpg',
    'img/Longbeach/5.jpg',
    'img/Longbeach/6.jpg',
    'img/Longbeach/7.jpg',
    'img/Longbeach/8.jpg',
    'img/Longbeach/9.jpg',
    'img/Longbeach/10.jpg'
  ],
  marjan: [
    'img/Marjan-island/1.jpg',
    'img/Marjan-island/2.jpg',
    'img/Marjan-island/3.jpg',
    'img/Marjan-island/4.jpg',
    'img/Marjan-island/5.jpg',
    'img/Marjan-island/6.jpg',
    'img/Marjan-island/7.jpg',
    'img/Marjan-island/8.jpg',
    'img/Marjan-island/9.jpg',
    'img/Marjan-island/10.jpg',
    'img/Marjan-island/1.jpg',
    'img/Marjan-island/2.jpg',
    'img/Marjan-island/3.jpg',
    'img/Marjan-island/4.jpg',
    'img/Marjan-island/5.jpg',
    'img/Marjan-island/6.jpg',
    'img/Marjan-island/7.jpg',
    'img/Marjan-island/8.jpg',
    'img/Marjan-island/9.jpg',
    'img/Marjan-island/10.jpg'
  ]
}

var images = [],
    tempElt1 = "",
    tempElt2 = "",
    click = -1,
    win = 0,
    score = 0,
    time = 0;

var preElt = document.querySelector("#pre"),
    themesElt = document.querySelector("#themes"),
    boxElts = document.getElementsByClassName("box"),
    mainElt = document.querySelector(".main"),
    timeElt = document.querySelector("#time"),
    scoreElt = document.querySelector("#score"),
    postElt = document.querySelector("#post"),
    finalElt = document.querySelector("#final"),
    againElt = document.querySelector("#again");


// initiate the game with chosen theme
themesElt.addEventListener("click", function(e) {
  if (e.target.classList.contains("themes")) {
    activateTheme(e.target.id);
    preElt.classList.add("hidden");
  }
});

function activateTheme(theme) {
  // insert theme in images array
  switch (theme) {
    case "datenight":
      for (let i=0; i<20; i++) {images.push(library.datenight[i]);}
      document.getElementById("demo").innerHTML = "Fun fact: Monkey's most favorite date night is the one with endless conversations";
      break;
    case "hilton":
      for (let i=0; i<20; i++) {images.push(library.hilton[i]);}
      document.getElementById("demo").innerHTML = "Fun fact: This sums up the whole vacation <a href='img/Hilton-Rak/4.jpg' target='_blank'>Click here</a>";
      break;
    case "jordon":
      for (let i=0; i<20; i++) {images.push(library.jordon[i]);}
      document.getElementById("demo").innerHTML = "Surprise! Cutie and Deepu have a <a href='https://www.youtube.com/watch?v=NdCxHJIYz8I' target='_blank'>Message for Panda</a>";
      break;
    case "longbeach":
      for (let i=0; i<20; i++) {images.push(library.longbeach[i]);}
      document.getElementById("demo").innerHTML = "Let's test your memory for extra points - 'Which room did we stay in at longbeach?'";
      break;
    case "marjan":
      for (let i=0; i<20; i++) {images.push(library.marjan[i]);}
      document.getElementById("demo").innerHTML = "Earn extra points - Which ice cream did we have at Marjan island?";
      break;
  }
  // insert images in memory game
  for (let i=0; i<20; i++) {
    var rand = Math.floor(Math.random() * (images.length-1));
    boxElts[i].innerHTML = "<img src='" + images[rand] + "' alt='image' class='hidden'>";
    images.splice(rand, 1);
  }
}


// Handle the play
mainElt.addEventListener("click", gameLogic);

function gameLogic(e) {
  // make sure the box is playable
  if (e.target.classList.contains("play")) {
    e.target.firstChild.classList.remove("hidden");
    // first of two click
    if (click < 1) {
      tempElt1 = e.target;
      // timer
      if (click === -1) {
        timer = setInterval(function() {
          time++;
          timeElt.innerHTML = time;
        }, 1000);
      }
      click = 1;
    }

    // second click
    else if (e.target !== tempElt1) {
      tempElt2 = e.target;

      // different images
      if (tempElt1.firstChild.src !== tempElt2.firstChild.src) {
        mainElt.removeEventListener("click", gameLogic);
        setTimeout( function() {
          tempElt1.firstChild.classList.add("hidden");
          tempElt2.firstChild.classList.add("hidden");
          mainElt.addEventListener("click", gameLogic);
        }, 400);
        if (score > 0){
          score -= 2;
        }
        scoreElt.innerHTML = score;
      }

      // same images
      else {
        score += 10;
        win += 2;
        tempElt1.firstChild.classList.add("outlined");
        tempElt2.firstChild.classList.add("outlined");
        tempElt1.classList.remove("play");
        tempElt2.classList.remove("play");
        scoreElt.innerHTML = score;

        // game won
        if (win === 20) {
          clearTimeout(timer);
          finalElt.innerHTML = "You won " + score + " points <br> in " + time + " seconds";
          postElt.classList.remove("hidden");
        }
      }
      click = 0;
    }
  }
}

againElt.addEventListener("click", resetGame);

function resetGame() {
  // reset game
  tempElt1 = "";
  tempElt2 = "";
  click = -1;
  win = 0;
  score = 0;
  time = 0;
  postElt.classList.add("hidden");
  preElt.classList.remove("hidden");
  for (let i=0; i<20; i++) {
    boxElts[i].classList.add("play");
    boxElts[i].firstChild.classList.add("hidden");
  }
  timeElt.textContent = time;
  scoreElt.textContent = score;
}

// handle focus of the page
// function checkPageFocus() {
//   if (document.hasFocus()) {
//     preElt.classList.remove("hidden");
//   }
//   else {
//     preElt.classList.add("hidden");
//   }
// }
// var checkPageInterval = setInterval(checkPageFocus, 300);
