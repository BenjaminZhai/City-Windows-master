// CITYSCAPE ASGN START CODE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 300;
cnv.height = 650;

// BLUE BACKGROUND
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, cnv.width, cnv.height);

// DRAW LEFT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(0, 350, 150, 300);
// Middle Section
ctx.fillRect(20, 200, 110, 150);
// Triangle Top
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(130, 200);
ctx.lineTo(130, 100);
ctx.fill();

// DRAW RIGHT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(150, 100, 150, 550);
// Medium Top
ctx.fillRect(170, 40, 110, 60);
// Small Top
ctx.fillRect(190, 20, 70, 20);

// Smol Windows
for(x = 40; x<=115; x +=25){
ctx.fillStyle = "white"
ctx.fillRect(x, 210, 10, 10)
for(y = 210; y <= 335; y+=25){
    ctx.fillStyle = "white"
    ctx.fillRect(x, y, 10, 10)
}
}

// Wide Windows
for(y = 370; y<=600; y+=46){
ctx.fillStyle = "white"
ctx.fillRect(20, y, 110, 20)
}

// Longo Windows
for(x = 170; x<=270; x+=25){
ctx.fillStyle = "white"
ctx.fillRect(x, 130, 10, 492)}

