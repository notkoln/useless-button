var clicks = localStorage.getItem("taps");

// checks if there is no value called taps, if there is none, add one and set it to zero
if (!clicks) {
  localStorage.setItem("taps", "0");
}

// getting the button from the document
var btn = document.getElementById("clicker");

// loads the amount of taps the user has
var clicksInt = parseInt(localStorage.getItem("taps"));
localStorage.setItem("clicks", clicksInt);
btn.innerText = `${clicksInt}`

btn.onclick = function() {
  // increases the amount of taps by one and saves it to local storage
  var clicksInt = parseInt(localStorage.getItem("taps"))
  localStorage.setItem("taps", ++clicksInt)
  btn.innerText = `${clicksInt}`
}
