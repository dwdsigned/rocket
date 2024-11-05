const start = document.getElementById("startButton");
console.log(start);

const body = document.querySelector("body");
console.log(body);
// body.style.background = "black";

const canvas = document.getElementById("canvas");
// console.log(canvas);
const secondCanvas = document.getElementById("secondCanvas");

const secondCanvasWidth = canvas.width = window.innerWidth;
const secondCanvasHeight = canvas.height = window.innerHeight;

const canvasWidth = canvas.width = window.innerWidth;
const canvasHeight = canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
// console.log(ctx);

const secondCTX = secondCanvas.getContext("2d");
console.log(secondCTX);

let y = 0;
let x = 0;
let backgroundStart = false;

start.addEventListener("click", setStatus);

function setStatus() {
    backgroundStart = true;
    if (backgroundStart === true) {
        start.style.display = "none";
        draw();
    } else {
        alert("Houston, we have a problem! 💀");
    }
}


// secondCTX.beginPath();
//     secondCTX.ellipse(canvasWidth*.2+x, canvasHeight*.45+y, 40, 40, Math.PI, 0, 360);
//     secondCTX.fillStyle = "#5C4033";
//     secondCTX.fill();



function draw () {
    for (let i = 0; i < 10000; i++) {
        // ctx.clearRect(0, 0, canvasWidth*.2+x, canvasHeight*.45+i)
        // body.style.background = "black";
        // Background *** DRY (Do Not Repeat Yourself) lul

    // *** Asteroid ***
    ctx.beginPath();
    ctx.ellipse(canvasWidth*.2+x, canvasHeight*.45+i, 40, 40, Math.PI, 0, 360);
    ctx.fillStyle = "#5C4033";
    ctx.fill();

    secondCTX.beginPath();
    secondCTX.ellipse(canvasWidth*.85, canvasHeight*.7+i, 40, 40, Math.PI, 0, 360);
    secondCTX.fillStyle = "#5C4033";
    secondCTX.fill();


    // *** "Written in the Stars" ***
    secondCTX.beginPath();
    secondCTX.ellipse(canvasWidth*.1, canvasHeight*.55+i, 4, 4, Math.PI, 0, 360);
    secondCTX.fillStyle = "white";
    secondCTX.fill();

    secondCTX.beginPath();
    secondCTX.ellipse(canvasWidth*.9, canvasHeight*.5+i, 4, 4, Math.PI, 0, 360);
    secondCTX.fillStyle = "white";
    secondCTX.fill();

    secondCTX.beginPath();
    secondCTX.ellipse(canvasWidth*.3, canvasHeight*.45+i, 4, 4, Math.PI, 0, 360);
    secondCTX.fillStyle = "white";
    secondCTX.fill();

    secondCTX.beginPath();
    secondCTX.ellipse(canvasWidth*.2, canvasHeight*.65+i, 4, 4, Math.PI, 0, 360);
    secondCTX.fillStyle = "white";
    secondCTX.fill();

    secondCTX.beginPath();
    secondCTX.ellipse(canvasWidth*.76, canvasHeight*.7+i, 4, 4, Math.PI, 0, 360);
    secondCTX.fillStyle = "white";
    secondCTX.fill();

    secondCTX.beginPath();
    secondCTX.ellipse(canvasWidth*.2, canvasHeight*.35+i, 4, 4, Math.PI, 0, 360);
    secondCTX.fillStyle = "white";
    secondCTX.fill();

    secondCTX.beginPath();
    secondCTX.ellipse(canvasWidth*.3, canvasHeight*.35+i, 4, 4, Math.PI, 0, 360);
    secondCTX.fillStyle = "white";
    secondCTX.fill();

    secondCTX.beginPath();
    secondCTX.ellipse(canvasWidth*.6, canvasHeight*.45+i, 4, 4, Math.PI, 0, 360);
    secondCTX.fillStyle = "white";
    secondCTX.fill();

    secondCTX.beginPath();
    secondCTX.ellipse(canvasWidth*.15, canvasHeight*.85+i, 4, 4, Math.PI, 0, 360);
    secondCTX.fillStyle = "white";
    secondCTX.fill();

    secondCTX.beginPath();
    secondCTX.ellipse(canvasWidth*.75, canvasHeight*.55+i, 4, 4, Math.PI, 0, 360);
    secondCTX.fillStyle = "white";
    secondCTX.fill();

    secondCTX.beginPath();
    secondCTX.ellipse(canvasWidth*.6, canvasHeight*.25+i, 4, 4, Math.PI, 0, 360);
    secondCTX.fillStyle = "white";
    secondCTX.fill();

    secondCTX.beginPath();
    secondCTX.ellipse(canvasWidth*.8, canvasHeight*.45+i, 4, 4, Math.PI, 0, 360);
    secondCTX.fillStyle = "white";
    secondCTX.fill();

    y = i;
    // console.log(y);
    }    
}







// // Background *** DRY (Do Not Repeat Yourself) lul

//     // *** Asteroid ***
//     ctx.beginPath();
//     ctx.ellipse(canvasWidth*.2+x, canvasHeight*.45+y, 40, 40, Math.PI, 0, 360);
//     ctx.fillStyle = "#5C4033";
//     ctx.fill();

//     ctx.beginPath();
//     ctx.ellipse(canvasWidth*.85, canvasHeight*.7+y, 40, 40, Math.PI, 0, 360);
//     ctx.fillStyle = "#5C4033";
//     ctx.fill();


//     // *** "Written in the Stars" ***
//     ctx.beginPath();
//     ctx.ellipse(canvasWidth*.1, canvasHeight*.55+y, 4, 4, Math.PI, 0, 360);
//     ctx.fillStyle = "white";
//     ctx.fill();

//     ctx.beginPath();
//     ctx.ellipse(canvasWidth*.9, canvasHeight*.5+y, 4, 4, Math.PI, 0, 360);
//     ctx.fillStyle = "white";
//     ctx.fill();

//     ctx.beginPath();
//     ctx.ellipse(canvasWidth*.3, canvasHeight*.45+y, 4, 4, Math.PI, 0, 360);
//     ctx.fillStyle = "white";
//     ctx.fill();

//     ctx.beginPath();
//     ctx.ellipse(canvasWidth*.2, canvasHeight*.65+y, 4, 4, Math.PI, 0, 360);
//     ctx.fillStyle = "white";
//     ctx.fill();

//     ctx.beginPath();
//     ctx.ellipse(canvasWidth*.76, canvasHeight*.7+y, 4, 4, Math.PI, 0, 360);
//     ctx.fillStyle = "white";
//     ctx.fill();

//     ctx.beginPath();
//     ctx.ellipse(canvasWidth*.2, canvasHeight*.35+y, 4, 4, Math.PI, 0, 360);
//     ctx.fillStyle = "white";
//     ctx.fill();

//     ctx.beginPath();
//     ctx.ellipse(canvasWidth*.3, canvasHeight*.35+y, 4, 4, Math.PI, 0, 360);
//     ctx.fillStyle = "white";
//     ctx.fill();

//     ctx.beginPath();
//     ctx.ellipse(canvasWidth*.6, canvasHeight*.45+y, 4, 4, Math.PI, 0, 360);
//     ctx.fillStyle = "white";
//     ctx.fill();

//     ctx.beginPath();
//     ctx.ellipse(canvasWidth*.15, canvasHeight*.85+y, 4, 4, Math.PI, 0, 360);
//     ctx.fillStyle = "white";
//     ctx.fill();

//     ctx.beginPath();
//     ctx.ellipse(canvasWidth*.75, canvasHeight*.55+y, 4, 4, Math.PI, 0, 360);
//     ctx.fillStyle = "white";
//     ctx.fill();

//     ctx.beginPath();
//     ctx.ellipse(canvasWidth*.6, canvasHeight*.25+y, 4, 4, Math.PI, 0, 360);
//     ctx.fillStyle = "white";
//     ctx.fill();

//     ctx.beginPath();
//     ctx.ellipse(canvasWidth*.8, canvasHeight*.45+y, 4, 4, Math.PI, 0, 360);
//     ctx.fillStyle = "white";
//     ctx.fill();





// We're going on a trip, in our favorite rocket ship. Prepare for take off.
// Rocket blades visible
ctx.beginPath();
ctx.arc(canvasWidth*.5, canvasHeight*.9, 200, Math.PI, 0, false);
ctx.fillStyle = "red";
ctx.fill();

// Rocket blades clipping
ctx.beginPath();
ctx.ellipse(canvasWidth*.5, canvasHeight*.9, 200, 125, Math.PI, 0, 360);
ctx.fillStyle = "black";
ctx.fill();

// "Fire" background
ctx.beginPath();
ctx.ellipse(canvasWidth*.5, canvasHeight*.85, 35, 200, Math.PI, 0, 360);
ctx.fillStyle = "#ff5a00";
ctx.fill();

// "Fire" foreground 1
ctx.beginPath();
ctx.ellipse(canvasWidth*.5, canvasHeight*.85, 30, 200, Math.PI, 0, 360);
ctx.fillStyle = "yellow";
ctx.fill();

// "Fire" foreground 2
ctx.beginPath();
ctx.ellipse(canvasWidth*.5, canvasHeight*.85, 25, 200, Math.PI, 0, 360);
ctx.fillStyle = "#ff9a00";
ctx.fill();

// "Fire" foreground 1
ctx.beginPath();
ctx.ellipse(canvasWidth*.5, canvasHeight*.85, 17, 200, Math.PI, 0, 360);
ctx.fillStyle = "yellow";
ctx.fill();

// Rocket ship body
ctx.beginPath();
ctx.ellipse(canvasWidth*.5, canvasHeight*.625, 80, 200, Math.PI, 0, 360);
ctx.fillStyle = "whitesmoke";
ctx.fill();
ctx.stroke();

// Rocket window
ctx.beginPath();
ctx.ellipse(canvasWidth*.5, canvasHeight*.55, 40, 40, Math.PI, 0, 360);
ctx.fillStyle = "red";
ctx.fill();

// Rocket outer window
ctx.beginPath();
ctx.ellipse(canvasWidth*.5, canvasHeight*.55, 30, 30, Math.PI, 0, 360);
ctx.fillStyle = "blue";
const gradient = ctx.createRadialGradient(0, 90, 0, 100, 75, 700);
gradient.addColorStop(0.5, "white");
gradient.addColorStop(1, "#007FFF");
ctx.fillStyle = gradient;
ctx.fill();
ctx.stroke();

// Fire base of rocket
ctx.beginPath();
ctx.arc(canvasWidth*.5, canvasHeight*.82, 51, Math.PI, 0, true);
ctx.fillStyle = "gray";
ctx.fill();

// // Blaster of rocket base
// ctx.fillStyle = "gray";
// ctx.fillRect(canvasWidth*.47, canvasHeight*.85, 80, 30);




