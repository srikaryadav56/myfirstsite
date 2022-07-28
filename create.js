const createuser = document.getElementById("create-user")
const createpassword = document.getElementById("create-password")
const createbtn = document.getElementById("create-btn")
const localStoragelist = JSON.parse(localStorage.getItem("jai"))
let list = []
let sublist = []

if(localStoragelist){
    list = JSON.parse(localStorage.getItem("jai"))
}

createbtn.addEventListener("click", function(){
    sublist.push(createuser.value)
    sublist.push(createpassword.value)
    list.push(sublist)
    localStorage.setItem("jai",JSON.stringify(list))
    location.href = "login.html";
})



