const choices = document.querySelectorAll(".choice")
const human = document.querySelectorAll(".hum")
let num = Math.floor(Math.random() * 3)
function pc() {
  for (let i = 0; i < choices.length; i++) {
    if (choices[i] === num) {
      return choices[i]
    }
    choices[num].style.display = "block"
  }
}

human.forEach(cho => cho.addEventListener("click", pc))
