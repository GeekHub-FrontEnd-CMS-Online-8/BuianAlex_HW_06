"use strict";

//////slider
if (document.getElementsByClassName("slider").length!==0){
  var dots = document.getElementsByClassName("dot");

  Array.from(dots).forEach(function (element, index) {
    element.addEventListener('click', function () {
      currentSlide(index+1);
    });
  });

  var slideIndex = 1;
  var timer;
  showSlides(slideIndex);

  function currentSlide(n) {
    clearTimeout(timer);
    showSlides(slideIndex = n);
  }


  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" dotActive", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " dotActive";
    timer=setTimeout(function () {
      slideIndex++; 
      showSlides(slideIndex);
    }, 4000);
  }

}


///TO TOP button
let buttonTop = document.getElementById("toUp");
buttonTop.addEventListener('click', function () {
  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': 0
  });
});

window.onscroll = function () { scrollFunction() };


function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    buttonTop.style.display = "block";
  } else {
    buttonTop.style.display = "none";
  }
}


///anchors smooth scroll
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
let navLink = document.getElementById('main-nav').querySelectorAll('a');
navLink.forEach(function (element, index) {
  element.addEventListener('click', function () {
    let nav =  document.getElementById('main-nav');
    if (nav.classList.contains('nav-modal')){
      document.getElementById('burger').firstChild.classList.remove('burger-active');
      nav.classList.remove('nav-modal');
      nav.classList.add('main-nav');
    }
  });
});



document.querySelector('.burger-wraper').addEventListener('click', function () {
   toggleNav()
});

function toggleNav() {
  document.getElementById('burger').firstChild.classList.toggle('burger-active');
  document.getElementById('main-nav').classList.toggle('nav-modal');
  document.getElementById('main-nav').classList.toggle('main-nav');
}

