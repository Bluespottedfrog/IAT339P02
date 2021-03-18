var cat         = document.getElementById("bm");
var hamburger   = document.getElementById("hamburger");
var dabcat      = document.getElementById("dabcat");
var bbtCat      = document.getElementById("bbt");
const slider = document.getElementById("indexCarousel");
const slides = document.querySelectorAll(".carousel-item");
const button = document.querySelectorAll(".carousel-button");

var buttonsArray = document.getElementsByClassName('addToCartButton');
console.log(buttonsArray.length);

var anim = bodymovin.loadAnimation({
  container: cat,
  path: 'icons/cat.json',
  renderer: 'svg',
  loop: true,
  autoplay: true,
  name: 'logo',
});

var dabcatAnim = bodymovin.loadAnimation({
  container: dabcat,
  path: 'icons/dabcat.json',
  renderer: 'svg',
  loop: true,
  autoplay: true
});

var burgerAnim = bodymovin.loadAnimation({
  container: hamburger,
  path: 'icons/hamburger.json',
  renderer: 'canvas',
  loop: false,
  autoplay: false,
  name: 'menu'
});

var bbtAnim = bodymovin.loadAnimation({
  container: bbtCat,
  path: 'icons/bbtCat.json',
  renderer: 'canvas',
  loop: true,
  autoplay: true,
  name: 'bbtCat'
})

if(hamburger != null){
  hamburger.addEventListener('mouseenter', () => {
    burgerAnim.setDirection(1);
    burgerAnim.play();
  });

  hamburger.addEventListener('mouseleave', () => {
    burgerAnim.setDirection(-1);
    burgerAnim.play();
  });
}

// Wrap every letter in a span
var textWrapper = document.querySelector('.animateLetters .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.animateLetters .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
});

function showMenu(){
  var getMenu = document.getElementById("mobileMenu");
  getMenu.style.display = "flex";
  getMenu.style.opacity = 1;
  console.log("working");
}

function closeMenu(){
  var getMenu = document.getElementById("mobileMenu");
  getMenu.style.display = "none";
  getMenu.style.opacity = 0;
  console.log("working");
}

//ADD TO CART BUTTON
function redirect(){
  window.location.href = '/cart.html';
}



/* Caresoul Tutorial was referred from https://codepen.io/YousifW/pen/yLeroBz */
if(button.length > 0){
let current = 0;
let prev = 3;
let next = 1;

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);
const gotoNext = () => current < 3 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = number => {
    current = number;
    prev = current - 1;
    next = current + 1;

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
      slides[i].classList.remove("prev");
      slides[i].classList.remove("next");
    }

    if (next == 4) {
      next = 0;
    }

    if (prev == -1) {
      prev = 3;
    }

    slides[current].classList.add("active");
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");

  }

  for (let i = 0; i < button.length; i++) {

      button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());

    }
  }
