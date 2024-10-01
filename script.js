var upper = document.querySelector(".upper")
var ghoom = document.querySelector(".ghoom")
var main = document.querySelector(".main")
var drone1 = document.querySelector(".drone1")

upper.addEventListener("mousemove",function(dets) {
    gsap.to(ghoom,{
        x:dets.x,
        y:dets.y,
        duration:1
    })
})
drone1.addEventListener("mouseenter",function () {
     ghoom.innerhtml = "View",
    gsap.to(ghoom,{
        scale:3
    })    
})
drone1.addEventListener("mouseleave",function () {
ghoom.innerHTML = "",
    gsap.to( ghoom, {
        scale:1
    })    
})
const scroll =new locomotivescroll({
el: document.querySelector(".main"),
smooth:ture
})



