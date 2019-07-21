let timeSec = document.getElementById("time");
let picture = document.querySelector("img");
let activity = document.getElementById("activities");

// show time
function renderTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let pmOrAm = hh >= 12 ? "pm" : "am";
  if (hh >= 12) {
    hh = hh - 12;
  }
  if (hh == 0) {
    hh = 12;
  }
  timeSec.innerHTML = `${hh} : ${mm} : ${ss} ${pmOrAm}`;
  if (hh >= 8 && pmOrAm === "am") {
    picture.src = "images/wake.jpg";
    activity.innerHTML = "Good morning";
  }
  if (hh >= 10 && pmOrAm === "am") {
    picture.src = "images/work.jpg";
    activity.innerHTML = "work Time";
  }
  if (hh >= 12 && pmOrAm === "pm") {
    picture.src = "images/work.jpg";
    activity.innerHTML = "work Time";
  }

  if (hh >= 1 && pmOrAm === "pm") {
    picture.src = "images/lunch.jpg";
    activity.innerHTML = "Lunch break";
  }

  if (hh >= 3 && pmOrAm === "pm") {
    picture.src = "images/work.jpg";
    activity.innerHTML = "Work Time";
  }

  if (hh >= 6 && hh < 7 && pmOrAm === "pm") {
    picture.src = "images/family.jpg";
    activity.innerHTML = "Family Time";
  }

  if (hh >= 7 && hh < 9 && pmOrAm === "pm") {
    picture.src = "images/study.jpg";
    activity.innerHTML = "Study Time";
  }

  if (hh >= 9 && hh < 12 && pmOrAm === "pm") {
    picture.src = "images/tv.jpg";
    activity.innerHTML = "Tv Time";
  }

  if (hh >= 12 && pmOrAm === "am") {
    picture.src = "images/sleep.jpg";
    activity.innerHTML = "Good Night";
  }
  setTimeout("renderTime()", 1000);
}
renderTime();
