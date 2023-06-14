function login(){
    var user, password
    
    user = document.getElementById("usuario").value;
    password= document.getElementById("password").value;


    if(user == "usuario" && password =="1234"){
       location.href="index.html"

       localStorage.usuario=user
    }
    
    else{
     alert("error")    
    }
}

const passwordInput = document.querySelector("#password")
const eye = document.querySelector("#eye")
eye.addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash")
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
    passwordInput.setAttribute("type", type)
  })