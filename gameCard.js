
let loginPage = document.querySelector("#login-page")
let loginBtn = document.querySelector("#login")
let closeLoginBtn = document.querySelector("#close-login-page")

loginBtn.addEventListener("click", openLoginPage)
closeLoginBtn.addEventListener("click", closeLoginPage)

function openLoginPage(){
    loginPage.style.visibility = "visible"
    loginPage.style.transform = "translateY(0)"
}

function closeLoginPage(){
    loginPage.style.transform = "translateY(-500px)"
    loginPage.style.visibility = "hidden"
}

function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }