let korz = document.querySelector(".korz");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let apple = document.querySelector(".apple");
let death = document.querySelector(".deathochk");

let dviz = 0;
right.addEventListener("click", function () {
  dviz = dviz + 100;
  if (dviz >= 900) {
    dviz = 900;
  }
  korz.style.left = dviz + "px";
});
left.addEventListener("click", function () {
  dviz = dviz - 100;
  if (dviz <= 0) {
    dviz = 0;
  }
  korz.style.left = dviz + "px";
  
});

function draw(apple) {
  console.log(dviz);
  let dviz2 = 0;
  apple.style.left = Math.floor(Math.random() * 9) * 100 + "px";
  setInterval(function () {
    dviz2 = dviz2 + 50;
    if (dviz2 <= 600) {
      apple.style.top = dviz2 + "px";
    }
  }, 1000);
}

let game = draw(apple);

console.log(apple, dviz);
