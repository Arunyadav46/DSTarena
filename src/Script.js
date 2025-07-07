
var main = document.querySelector("#main")
var crsr = document.querySelector("#gola")
window.addEventListener("mousemove",function(dets){
    gsap.to("#gola",{
        x:dets.x,
        y:dets.y,
        
    })
})