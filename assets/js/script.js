// JavaScript for Sticky Navigation Bar

window.addEventListener("scroll", function(){
    
    var header = document.querySelector("#Header");
    header.classList.toggle("sticky", window.scrollY > 0);
    
    
})