var cat         = document.getElementById("bm");
var hamburger   = document.getElementById("hamburger");
var dabcat      = document.getElementById("dabcat");
var bbtCat      = document.getElementById("bbt");

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

hamburger.addEventListener('mouseenter', () => {
  burgerAnim.setDirection(1);
  burgerAnim.play();
});

hamburger.addEventListener('mouseleave', () => {
  burgerAnim.setDirection(-1);
  burgerAnim.play();
});

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
