const userid = document.getElementById("userid-in")
const password =  document.getElementById("password-in")
const login =  document.getElementById("login-btn")
const create = document.getElementById("create-a")
const noaccount = document.getElementById("no-account")
let accountlist = localStorage.getItem("jai")

accountlist = JSON.parse(accountlist)

login.addEventListener("click", function(){
    for(i in accountlist){
        if(accountlist[i][0] === userid.value & accountlist[i][1] === password.value ){
            location.href = "nav.html";
            break
        }
        else{
            noaccount.innerHTML = "Username or Password you entered is incorrect !"
        }
    }
})




