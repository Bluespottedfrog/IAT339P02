var cat = document.getElementById("bm");
var hamburger = document.getElementById("hamburger");

var anim = bodymovin.loadAnimation({
  container: cat,
  path: 'icons/cat.json',
  renderer: 'svg',
  loop: true,
  autoplay: true,
  name: 'logo',
});

var burgerAnim = bodymovin.loadAnimation({
  container: hamburger,
  path: 'icons/hamburger.json',
  renderer: 'canvas',
  loop: false,
  autoplay: false,
  name: 'menu'
});

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
