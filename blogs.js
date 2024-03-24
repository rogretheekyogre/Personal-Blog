

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode")
}
localStorage.getItem("Username")
localStorage.getItem("Title")
localStorage.getItem("Content")

var data =window.location.search;
var params = new URLSearchParams(data);
console.log(params);
var Username = params.get("Username");
var Title = params.get("Title");
var Content = params.get("Content");

var getData = "Username : "+Username+"

document.getElementById("res") .innerHTML = data;