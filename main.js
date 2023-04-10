canvas= document.getElementById("myCanvas")
color="red"
ctx=canvas.getContext("2d")
width_of_line=2
var width= screen.width
var height= screen.height
new_width=width-70
new_height=height-300

if (width<992) {
    document.getElementById("myCanvas").width=new_width
    document.getElementById("myCanvas").height=new_height
    document.body.style.overflow="hidden"

}
var lastpositonofx,lastpositonofy
var mouseevent=""
canvas.addEventListener("touchstart",my_touchstart)
function my_touchstart(e){
    lastpositonofx=e.touches[0].clientX-canvas.offsetLeft
    lastpositonofy=e.touches[0].clientY-canvas.offsetTop
}
canvas.addEventListener("touchmove",my_touchmove)
function my_touchmove(e){
    curentpositionofmousex=e.touches[0].clientX-canvas.offsetLeft
    curentpositionofmousey=e.touches[0].clientY-canvas.offsetTop
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=width_of_line
    ctx.moveTo(lastpositonofx,lastpositonofy)
    ctx.lineTo(curentpositionofmousex,curentpositionofmousey)
    ctx.stroke() 

    lastpositonofx=curentpositionofmousex
    lastpositonofy=curentpositionofmousey
 } 

canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
    color=document.getElementById ("color").value
    width_of_line=document.getElementById ("width").value
    mouseevent="mousedown"
}
canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){
    curentpositionofmousex=e.clientX-canvas.offsetLeft
    curentpositionofmousey=e.clientY-canvas.offsetTop
if (mouseevent=="mousedown") {
    

    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=width_of_line
    ctx.moveTo(lastpositonofx,lastpositonofy)
    ctx.lineTo(curentpositionofmousex,curentpositionofmousey)

    ctx.stroke() 
}
    lastpositonofx=curentpositionofmousex
    lastpositonofy=curentpositionofmousey
 }
 canvas.addEventListener("mouseup",my_mouseup)
 function my_mouseup(e){
    mouseevent="mouseup"
}
canvas.addEventListener("mouseleave",my_mouseleave)
 function my_mouseleave(e){
    mouseevent="mouseleave"
}





















