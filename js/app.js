const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
});
document.getElementById("left").addEventListener("click", toLeft);
document.getElementById("right").addEventListener("click", toRight);
let img = document.querySelector(".hero");
let count = 1;
let imgLingth = 4;
// function slide(click)
function slide() {
  for (i = 0; i < imgLingth; i++) {
    img.classList.remove(`act${i}`);
  }
  img.classList.add(`act${count}`);
}
function toLeft() {
  slide();
  if (count == 1) {
    count = imgLingth - 1;
  } else {
    count--;
  }
}
function toRight() {
  slide();
  if (count == imgLingth - 1) {
    count = 0;
  } else {
    count++;
  }
}
//3adna khalfiya tanbta khsna nbadlo khlfiya daba mochlil khalfiyai css hadchi fakart ndir kol khlfiya fi class or ndir animation kol animation ndiro fi class daba b9a liya kifack loop had img fi count man rab3a

// scrool to top with js
let upTuTop = document.getElementById("back-to-top");
window.onscroll = function () {
  this.scrollY >= 200
    ? upTuTop.classList.add("show")
    : upTuTop.classList.remove("show");
};
upTuTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
