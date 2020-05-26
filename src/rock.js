// variables 
const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
const rock_p = document.querySelector(".rock-p");
const scissors_p = document.querySelector(".scissors-p");
const paper_p = document.querySelector(".paper-p");
let pcChos = [rock_p, paper_p, scissors_p];
let userChos = [rock, paper, scissors];
const pc = document.querySelector(".pc");
const you = document.querySelector(".you");
const btn = document.querySelector(".btn");
let num = Math.floor(Math.random() * 3)
let comp;

// computer pick option randomly 

function pcChoice () {
  for (let i = 0;i < pcChos.length;i++) {
    pcChos[num].style.display = "block";
    comp = pcChos[num];
  }
}

// when the user click on rock here what will happen

function roclk () {
  paper.style.display = "none";
  scissors.style.display = "none";
  pcChoice();
  switch (comp) {
    case rock_p:
      let draw = document.createElement("h2");
      draw.textContent = "Draw";
      document.querySelector(".bg").appendChild(draw);
      break;
    case paper_p:
      let lost = document.createElement("h2");
      lost.textContent = "You Lost";
      document.querySelector(".bg").appendChild(lost);
      pc.textContent++
      break;
    case scissors_p:
      let won = document.createElement("h2");
      won.textContent = "You Won";
      document.querySelector(".bg").appendChild(won);
      you.textContent++
      break;
  }
  stopLsn(rock, roclk);
}

// when user click on paper here what will happen 

function papclk () {
  rock.style.display = "none";
  scissors.style.display = "none";
  pcChoice();
  switch (comp) {
    case rock_p:
      let won = document.createElement("h2");
      won.textContent = "You Won"
      document.querySelector(".bg").appendChild(won);
      you.textContent++
      break;
    case paper_p:
      let draw = document.createElement("h2");
      draw.textContent = "Draw"
      document.querySelector(".bg").appendChild(draw);
      break;
    case scissors_p:
      let lost = document.createElement("h2");
      lost.textContent = "You Lost"
      document.querySelector(".bg").appendChild(lost);
      pc.textContent++
      break;
  }
  stopLsn(paper, papclk);
}

// when user click on sicssors here what will happen 

function scisclk () {
  paper.style.display = "none";
  rock.style.display = "none";
  pcChoice();
  switch (comp) {
    case rock_p:
      let lost = document.createElement("h2");
      lost.textContent = "You Lost"
      document.querySelector(".bg").appendChild(lost);
      pc.textContent++
      break;
    case paper_p:
      let won = document.createElement("h2");
      won.textContent = "You Won"
      document.querySelector(".bg").appendChild(won);
      you.textContent++
      break;
    case scissors_p:
      let draw = document.createElement("h2");
      draw.textContent = "Draw"
      document.querySelector(".bg").appendChild(draw);
      break;
  }
  stopLsn(scissors, scisclk);
}

//.................................... again button will reset the game............................//

btn.addEventListener('click', function reshow () {
  for (let c = 0;c < userChos.length;c++) {
    userChos[c].style.display = "block";
  }
  document.querySelector(".bg").removeChild(document.querySelector(".bg").lastChild);
  for (let i = 0;i < pcChos.length;i++) {
    pcChos[i].style.display = "none";
  }
  pc.textContent = 0;
  you.textContent = 0;
  rock.addEventListener("click", roclk);
  paper.addEventListener("click", papclk);
  scissors.addEventListener("click", scisclk);

});

// function to stop lsning to clicking after being clicking an option

function stopLsn (targ, func) {
  targ.removeEventListener("click", func)
}

// adding event listeners to the user options

rock.addEventListener("click", roclk);

paper.addEventListener("click", papclk);

scissors.addEventListener("click", scisclk);
