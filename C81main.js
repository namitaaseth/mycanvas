canvas = document.getElementById("myCanvas");
console.log(canvas)
ctx=canvas.getContext("2d")
var colour= "black";
var width=3;

ctx.beginPath()
ctx.strokeStyle=colour;
ctx.lineWidth=width
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke()

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouse_x=e.clientX -canvas.offsetLeft;
    mouse_y=e.clientY -canvas.offsetTop;
    console.log("x= " + mouse_x + "y= "+mouse_y)
    circle()
}
function circle(){
ctx.beginPath()
ctx.strokeStyle=colour;
ctx.lineWidth=width
ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
ctx.stroke()
}