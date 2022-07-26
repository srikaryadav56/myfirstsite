let priramynav = document.getElementById("nav-b")
let btn = document.getElementById("mobile-nav")

btn.addEventListener("click", function(){ 

    const visibility = priramynav.getAttribute("data-visible")
    console.log(visibility)

    if(visibility == "false"){
        priramynav.setAttribute("data-visible",true)
        btn.setAttribute("area-expanded",true)

    }

    else if(visibility ==  "true"){
        priramynav.setAttribute("data-visible",false)
        btn.setAttribute("area-expanded",false)

    }

})

