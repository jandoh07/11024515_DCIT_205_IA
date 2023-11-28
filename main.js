

let listIcon = document.getElementById("listIcon");
let closeIcon = document.getElementById("closeIcon");
let navLinks = document.getElementById("navLinks");

closeIcon.style.display = "none";

listIcon.addEventListener("click" , function(){
    listIcon.style.display = "none";
    closeIcon.style.display = "block";
    navLinks.style.display = "block";

})

closeIcon.addEventListener("click" , function(){
    listIcon.style.display = "block";
    closeIcon.style.display = "none";
    navLinks.style.display = "none";

})


const caretDown1 = document.getElementById("#caretDown1");
const caretUp1 = document.getElementById("#caretUp1");

caretUp1.style.position = "absolute";