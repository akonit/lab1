
//describe buttons
document.getElementById("sinXButton").onclick = function() {return draw(sinX)};
document.getElementById("cosXButton").onclick = function() {return draw(cosX)};
document.getElementById("simpleXButton").onclick = function() {return draw(simpleX)};
document.getElementById("squareXButton").onclick = function() {return draw(squareX)};
document.getElementById("expXButton").onclick = function() {return draw(expX)};
document.getElementById("lnXButton").onclick = function() {return draw(lnX)};

var canvas = document.getElementById("graphics");
init(canvas, canvas.getContext("2d"))

//start drawing
function draw(func) {
    var canvas = document.getElementById("graphics");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    init(canvas, ctx);

    drawFunction(ctx, canvas, func);
}

//draw exact function
function drawFunction(ctx, canvas, func) {

  var xx, yy; 
  var dx = 0.05;
  var x0 = 0.5 + 0.5 * canvas.width;
  var y0 = 0.5 + 0.5 * canvas.height;
  var scale = 20;
  var iMax = Math.round((ctx.canvas.width - x0) / dx);
  var iMin = Math.round(-x0 / dx);
    
  ctx.beginPath();
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = "rgb(66,44,255)";

  for (var i = iMin; i <= iMax; i++) {
    xx = dx * i; 
    yy = scale * func(xx / scale);
    if (i == iMin) {
      ctx.moveTo(x0 + xx, y0 - yy);
    } else {
      ctx.lineTo(x0 + xx, y0 - yy);
    }
  }
  ctx.stroke();
}

//draw axes
function init(canvas, ctx) {

    ctx.beginPath();
    for (var x = 0.5; x < canvas.width; x += 10) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.width);
    }

    for (var y = 0.5; y < canvas.height; y += 10) {
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.height, y);
    }

    ctx.strokeStyle = "#eee";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0.5 * canvas.width, 0);
    ctx.lineTo(0.5 * canvas.width, canvas.height);
    ctx.moveTo(0, 0.5 * canvas.height);
    ctx.lineTo(canvas.width, 0.5 * canvas.height);

    ctx.strokeStyle = "rgb(180, 180, 180)";
    ctx.lineWidth = 2;
    ctx.stroke();


    ctx.font = "15px Arial";
    ctx.fillText("x", canvas.width - 10, 0.5 * canvas.height - 5);
    ctx.fillText("y", 0.5 * canvas.width + 5, 10);
    ctx.fillText("0", 0.5 * canvas.width + 5, 0.5 * canvas.height + 15);
}

function sinX(x) {
    return Math.sin(x);  
}

function cosX(x) {
    return Math.cos(x);  
}

function squareX(x) {
    return Math.pow(x, 2);  
}

function simpleX(x) {
    return x;
}

function expX(x) {
    return Math.exp(x);
}

function lnX(x) {
    return Math.log(x) / Math.log(10);
}
