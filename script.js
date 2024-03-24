
function myFunction2() {
    var element = document.body;
    element.classList.toggle("dark-mode")
}

function myFunction() {
    alert("Please complete form!");
 const username = document.querySelector("#Uname");
 const Title = document.querySelector("#title");
 const content = document.querySelector("#content");
    localStorage.setItem("Username" , username);
    localStorage.setItem("Title" , Title);
    localStorage.setItem("Content" , content);

    window.location.href = "blogs.html"
}

function getblog(){
    localStorage.getItem("Username")
    console.log(localStorage.getItem("Username"))

    localStorage.getItem("Title")
    console.log(localStorage.getItem("Title"))

    localStorage.getItem("Content")
    console.log(localStorage.getItem("Content"))


}

