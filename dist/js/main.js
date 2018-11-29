"use strict";

if (document.getElementsByClassName("slider").length !== 0) {
  var currentSlide = function currentSlide(n) {
    clearTimeout(timer);
    showSlides(slideIndex = n);
  };

  var showSlides = function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" dotActive", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " dotActive";
    timer = setTimeout(function () {
      slideIndex++;
      showSlides(slideIndex);
    }, 4000);
  };

  var dots = document.getElementsByClassName("dot");
  Array.from(dots).forEach(function (element, index) {
    element.addEventListener('click', function () {
      currentSlide(index + 1);
    });
  });
  var slideIndex = 1;
  var timer;
  showSlides(slideIndex);
}

var buttonTop = document.getElementById("toUp");
buttonTop.addEventListener('click', function () {
  topFunction();
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    buttonTop.style.display = "block";
  } else {
    buttonTop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}