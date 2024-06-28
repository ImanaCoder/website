// scroll to top (#to home) btn

let scrollBtn = document.getElementById("to-home");

window.addEventListener("scroll", ()=>{
    if (window.scrollY > 0) {
        scrollBtn.style.visibility = "visible";
    } else {
        scrollBtn.style.visibility = "hidden";
    }

            


});

