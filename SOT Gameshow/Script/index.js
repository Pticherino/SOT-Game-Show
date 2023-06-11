
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

function slideToPage1FromRight() {
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

function slideToPage5() {
  const container = document.querySelector('.game-container');
  container.style.transition = 'transform 0.5s ease-in-out';
  container.style.transform = 'translateX(-400%)';
  setTimeout(() => {
    window.location.href = 'page5.html';
  }, 500);
}

function slideToPage5FromRight() {
  const container = document.querySelector('.game-container');
  container.style.transition = 'transform 0.5s ease-in-out';
  container.style.transform = 'translateX(400%)';
  setTimeout(() => {
    window.location.href = 'page5-right.html';
  }, 500);
}

function slideToPage6() {
  const container = document.querySelector('.game-container');
  container.style.transition = 'transform 0.5s ease-in-out';
  container.style.transform = 'translateX(-400%)';
  setTimeout(() => {
    window.location.href = 'page6.html';
  }, 500);
}

function slideToPage6FromRight() {
  const container = document.querySelector('.game-container');
  container.style.transition = 'transform 0.5s ease-in-out';
  container.style.transform = 'translateX(400%)';
  setTimeout(() => {
    window.location.href = 'page6-right.html';
  }, 500);
}


function slideToPage7() {
  const container = document.querySelector('.game-container');
  container.style.transition = 'transform 0.5s ease-in-out';
  container.style.transform = 'translateX(-400%)';
  setTimeout(() => {
    window.location.href = 'page7.html';
  }, 500);
}


function slideToPage8() {
  const container = document.querySelector('.game-container');
  container.style.transition = 'transform 0.5s ease-in-out';
  container.style.transform = 'translateX(-400%)';
  setTimeout(() => {
    window.location.href = 'page8.html';
  }, 500);
}

function slideToPage9() {
  const container = document.querySelector('.game-container');
  container.style.transition = 'transform 0.5s ease-in-out';
  container.style.transform = 'translateX(-400%)';
  setTimeout(() => {
    window.location.href = 'page9.html';
  }, 500);
}
function slideToPage10() {
  const container = document.querySelector('.game-container');
  container.style.transition = 'transform 0.5s ease-in-out';
  container.style.transform = 'translateX(-400%)';
  setTimeout(() => {
    window.location.href = 'page10.html';
  }, 500);
}
function slideToPage11() {
  const container = document.querySelector('.game-container');
  container.style.transition = 'transform 0.5s ease-in-out';
  container.style.transform = 'translateX(-400%)';
  setTimeout(() => {
    window.location.href = 'page11.html';
  }, 500);
}
function slideToPage12() {
  const container = document.querySelector('.game-container');
  container.style.transition = 'transform 0.5s ease-in-out';
  container.style.transform = 'translateX(-400%)';
  setTimeout(() => {
    window.location.href = 'page12.html';
  }, 500);
}
function slideToPage13() {
  const container = document.querySelector('.game-container');
  container.style.transition = 'transform 0.5s ease-in-out';
  container.style.transform = 'translateX(-400%)';
  setTimeout(() => {
    window.location.href = 'page13.html';
  }, 500);
}
function slideToPage14() {
  const container = document.querySelector('.game-container');
  container.style.transition = 'transform 0.5s ease-in-out';
  container.style.transform = 'translateX(-400%)';
  setTimeout(() => {
    window.location.href = 'page14.html';
  }, 500);
}
function slideToPage15() {
  const container = document.querySelector('.game-container');
  container.style.transition = 'transform 0.5s ease-in-out';
  container.style.transform = 'translateX(-400%)';
  setTimeout(() => {
    window.location.href = 'page15.html';
  }, 500);
}