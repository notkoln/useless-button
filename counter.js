var clicks = localStorage.getItem("clicks");

if (!clicks) {
  localStorage.setItem("clicks", "0");
}

var btn = document.getElementById("clicker");
btn.onclick = function() {
  var clicksInt = parseInt(localStorage.getItem("clicks"))
  localStorage.setItem("clicks", clicksInt)
  btn.innerText = `${clicksInt}`
}
