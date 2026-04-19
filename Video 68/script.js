// console.log("Jayesh");
 

// document.getElementById("target").style.backgroundColor = "red"


let targetBox = document.getElementsByClassName("box")

// targetBox[3].style.color = "pink"
// targetBox[4].style.color = "purple"
// targetBox[1].style.color = "yellow"
// targetBox[0].style.color = "blue"

//query selector

// document.querySelector(".box").style.backgroundColor = "pink"

//query selector for all .box class element

 
    document.querySelectorAll(".box").forEach(e => {
        e.style.backgroundColor = "green";
    });
 

    document.getElementById("target").style.backgroundColor ="red"
    document.getElementById("target").style.color ="blue"

    targetBox[1].style.color = "pink"

    document.querySelectorAll(".box").forEach(e =>{
        e.style.color = "white";
    })

    document.querySelector(".box").style.color = "blue"

    

