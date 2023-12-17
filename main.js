var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d")
color="red"
ctx.beginPath()
ctx.strokeStyle="blue"
ctx.lineWidth=2
mouseEvent=""
widthline=3
var last_position_of_x, last_position_of_y
canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(e){
    mouseEvent="mousedown"
    if (mouseEvent=="mousedown") {
        
    }
}
canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent=="mousedown") {
       color=document.getElementById("color").value
       widthline=document.getElementById("width").value
       
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=widthline
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();
    }
    last_position_of_x=current_position_of_mouse_x
    last_position_of_y=current_position_of_mouse_y
    
}
canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e){
    mouseEvent="mouseleave"
}
canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup(e){
    mouseEvent="mouseup"
}
function clearcanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}
canvas.addEventListener("touchstart", my_touchstart)
function my_touchstart(e){
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove)
function my_touchmove(e){
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    color=document.getElementById("color").value
    widthline=document.getElementById("width").value
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=widthline
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();
    last_position_of_x=current_position_of_touch_x
    last_position_of_y=current_position_of_touch_y
}