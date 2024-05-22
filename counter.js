var clicks = localStorage.getItem("clicks");

// checks if there is no value called clicks, if there is none, add one and set it to zero
if (!clicks) {
  localStorage.setItem("clicks", "0");
}

// loads the amount of clicks the user has
var clicksInt = parseInt(localStorage.getItem("clicks"))
localStorage.setItem("clicks", clicksInt)
btn.innerText = `${clicksInt}`

var btn = document.getElementById("clicker");
btn.onclick = function() {
  // increases the amount of clicks by one and saves it to local storage
  var clicksInt = parseInt(localStorage.getItem("clicks"))
  localStorage.setItem("clicks", ++clicksInt)
  btn.innerText = `${clicksInt}`
}
