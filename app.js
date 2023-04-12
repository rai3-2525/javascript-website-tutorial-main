var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

var rotatevalue = circle.style.transform;
// console.log(rotatevalue);
var rotateSum;

upBtn.onclick = function() {
  // 時計回りに90度回転
  rotateSum = rotatevalue + "rotate(-90deg)";
  circle.style.transform = rotateSum;
  rotatevalue = rotateSum;
}

downBtn.onclick = function() {
  // 反時計回りに90度回転
  rotateSum = rotatevalue + "rotate(90deg)";
  circle.style.transform = rotateSum;
  rotatevalue = rotateSum;
}

