const pencilButton = document.getElementById("pen");
const drawingCanvas = document.getElementById("drawingCanvas");
ctx = drawingCanvas.getContext("2d");
drawingCanvas.height = window.innerHeight;
drawingCanvas.width = window.innerWidth;


let isDrawing = false;
let x = 0;
let y = 0;

drawingCanvas.addEventListener('mousedown', (e) => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

drawingCanvas.addEventListener('mousemove', (e) => {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  x = e.offsetX;
  y = e.offsetY;
});


drawingCanvas.addEventListener('click', () => {
    isDrawing = false
});


// Variables to store the canvas's position
 //const canvasRect = drawingCanvas.getBoundingClientRect();



// let isDrawing = false;
// pencilButton.addEventListener("click", () => {
//  //toggle drawing mode
//  isDrawing = !isDrawing;
//  if(isDrawing){
//     //Enable drawing mode
//     drawingCanvas.style.cursor = "crosshair";
//     drawingCanvas.addEventListener("mousedown", startDrawing);
//     drawingCanvas.addEventListener("mousemove", draw);
//     drawingCanvas.addEventListener("mouseup", stopDrawing);
//  }
//  else{
//     //disable drawing mode
//     drawingCanvas.style.cursor = "auto";
//     drawingCanvas.removeEventListener("mousedown", startDrawing);
//     drawingCanvas.removeEventListener("mousemove", draw);
//     drawingCanvas.removeEventListener("mouseup", stopDrawing);
//  }
// });

// function startDrawing(e){
//     isDrawing = true;
//     ctx.beginPath();
//     const { clientX, clientY} = e;
//     const offsetX = clientX - canvasRect.left;
//     const offsetY = clientY - canvasRect.top;

//     ctx.moveTo(offsetX, offsetY);
//     ctx.strokeStyle = "black";
//     ctx.lineWidth = 0.5;
// }
// function draw(e){
//     if(!isDrawing) return;
//     const { clientX, clientY} = e;
//     const offsetX = clientX - canvasRect.left;
//     const offsetY = clientY - canvasRect.top;
//     ctx.strokeStyle = "black";
//     ctx.lineTo(offsetX, offsetY);
//     ctx.stroke();
// }

// function stopDrawing(){
//     isDrawing = false;
//     ctx.closePath();
// }