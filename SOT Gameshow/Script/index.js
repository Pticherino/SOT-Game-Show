
/*Hiding overlay on answers*/
const words = document.querySelectorAll('.word');

function disable(overlay){
    overlay.style.visibility=  "hidden";
    overlay.style.opacity=  "0";
    overlay.style.transition= " visibility 0s 0.3s, opacity 0.3s linear";
    
  }

words.forEach(word => {
  const overlay = word.querySelector('.overlay');
  overlay.addEventListener('click', () => disable(overlay));
});


/*Slide animations*/
function slideToPage1() {
  const container = document.querySelector('.game-container');
  container.style.transition = 'transform 0.5s ease-in-out';
  container.style.transform = 'translateX(400%)';
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 500);
}
  
function slideToPage2() {
  const container = document.querySelector('.game-container');
  container.style.transition = 'transform 0.5s ease-in-out';
  container.style.transform = 'translateX(-400%)';
  setTimeout(() => {
    window.location.href = 'page2.html';
  }, 500);
}
function slideToPage2FromRight() {
  const container = document.querySelector('.game-container');
  container.style.transition = 'transform 0.5s ease-in-out';
  container.style.transform = 'translateX(400%)';
  setTimeout(() => {
    window.location.href = 'page2-right.html';
  }, 500);
}

function slideToPage3() {
  const container = document.querySelector('.game-container');
  container.style.transition = 'transform 0.5s ease-in-out';
  container.style.transform = 'translateX(-400%)';
  setTimeout(() => {
    window.location.href = 'page3.html';
  }, 500);
}

function slideToPage3FromRight() {
  const container = document.querySelector('.game-container');
  container.style.transition = 'transform 0.5s ease-in-out';
  container.style.transform = 'translateX(400%)';
  setTimeout(() => {
    window.location.href = 'page3-right.html';
  }, 500);
}

function slideToPage4() {
  const container = document.querySelector('.game-container');
  container.style.transition = 'transform 0.5s ease-in-out';
  container.style.transform = 'translateX(-400%)';
  setTimeout(() => {
    window.location.href = 'page4.html';
  }, 500);
}

function slideToPage4FromRight() {
  const container = document.querySelector('.game-container');
  container.style.transition = 'transform 0.5s ease-in-out';
  container.style.transform = 'translateX(400%)';
  setTimeout(() => {
    window.location.href = 'page4-right.html';
  }, 500);
}