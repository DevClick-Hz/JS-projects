let users = [
  {
    username: "Ahmad",
    password: 123
  },

  {
    username: "Sarah",
    password: 456
  },

  {
    username: "Erin",
    password: 789
  }
];

let logBtn = document.getElementById("log-btn");

// check info
function checkInfo() {
  let Uname = document.getElementById("u-input").value;
  let Pword = document.getElementById("p-input").value;
  for (let i = 0; i < users.length; i++) {
    if (Uname == users[i].username && Pword == users[i].password) {
      alert(Uname + " you loged in!");
      return;
    } else if (Uname === "" || Pword === "") {
      alert("Please Enter username and password ");
      return;
    }
  }
  alert("username or password is wrong");
}

// log button
logBtn.addEventListener("click", function() {
  checkInfo();
});
