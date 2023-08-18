let timer = 60;
var score = 0;
let hitrn;
function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function getNewhit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function makebubble() {
  var clutter = "";
  for (let i = 0; i < 168; i++) {
    let random = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${random}</div>`;
  }
  const bubbles = document.querySelector("#pbtm");
  bubbles.innerHTML = clutter;
}

function runtimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML = `<h2>Game over </h2>`;
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (det) {
  let clickednum = Number(det.target.textContent);
  if (clickednum === hitrn) {
    increaseScore();
    makebubble();
    getNewhit();
  }
});

runtimer();
makebubble();
getNewhit();
