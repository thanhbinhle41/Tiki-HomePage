
//  HEADER DROPDOWN MENU


var showDropdown = document.querySelector('.list-item');
 
var menuDropdown = document.querySelector('.dropdown-menu');
var container = document.getElementById('container');


showDropdown.onmouseenter = function () {
    menuDropdown.classList.add('show');
    container.classList.add('hover-background');
}

menuDropdown.onmouseleave = function () {
    if (menuDropdown.classList.contains('show')) {
        menuDropdown.classList.remove('show');  
        container.classList.remove('hover-background');
    }
}

showDropdown.onmouseleave = function () {
    if (menuDropdown.classList.contains('show')) {
        menuDropdown.classList.remove('show');  
        container.classList.remove('hover-background');
    }
}

menuDropdown.onmouseenter = function () {
    menuDropdown.classList.add('show');
    container.classList.add('hover-background');
}

// ////////////////////////////////////////////

// USER DROPDOWN
var userDropdown = document.querySelector('.user-dropdown');
var user = document.querySelector('.wrapper-user');


user.onmouseover = function () {
    userDropdown.classList.add('show');
}

user.onmouseleave = function () {
    if (userDropdown.classList.contains('show')) {
        userDropdown.classList.remove('show');
    }
}

// /////////////////////////////////////////////
// SLIDER 

var slideIndex = 0;
autoSlides();

showSlides(slideIndex);

function plusSlides (n) {
    showSlides(slideIndex += n);
}

function currentSlide (n) {
    showSlides(slideIndex = n);
}



function showSlides (n) {
    var dots = document.getElementsByClassName('dot');
    var slides = document.getElementsByClassName('img-slider');
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot-active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " dot-active";
}

function autoSlides() {
    var dots = document.getElementsByClassName('dot');
    var slides = document.getElementsByClassName('img-slider');
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}  

    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" dot-active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " dot-active";
    setTimeout(autoSlides, 4000); // Change image every 2 seconds
  }


//   COUNT CLOCK


var countDownDate = new Date(2021, 07, 05);


//Update the count down every 1s
var x = setInterval(function() {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    document.querySelector('.hours-count-clock').innerHTML = hours;
    document.querySelector('.minutes-count-clock').innerHTML = minutes;
    document.querySelector('.seconds-count-clock').innerHTML = seconds;

})

// ///////////////////////////////////////

// POPULAR SEARCH

var popularSearchIndex = 1;
showPopularSearch(popularSearchIndex);

var PSmore = document.querySelector('.header-right');

var PSmore_icon = document.querySelector('.header-right i');

PSmore_icon.classList.add('rotate');


PSmore.onclick = function () {
    popularSearchIndex++;
    PSmore_icon.classList.toggle('rotate');
    PSmore_icon.classList.toggle('rotate2');
    showPopularSearch(popularSearchIndex);
}


function showPopularSearch(n) {
    var PS_list = document.getElementsByClassName('popular-product');
    if (n > PS_list.length) {
        n = 1;
        popularSearchIndex = 1;
    }
    for (var i=0; i < PS_list.length; i++) {
        // PS_list[i].style.display="none";
        PS_list[i].classList.add('hide');
    }

    // PS_list[n - 1].style.display= "block";
    PS_list[n - 1].classList.remove('hide');
    PS_list[n - 1].classList.add('show');
}

document.querySelector('.header-right > a').onclick = function (e) {
    PSmore_icon.classList.toggle('rotate');
    e.preventDefault();
}


// //////////////////////////
// DEAL SHOCK

var slideTransIndex = 0;
var slideTrans = document.getElementsByClassName('slide-transform');

function plusTransform(n) {
    slideTransIndex+=n;
    console.log(slideTransIndex);
    slideTransform();
}

function slideTransform () {
    if (slideTransIndex > slideTrans.length - 1) slideTransIndex = 0;
    if (slideTransIndex < 0) slideTransIndex = slideTrans.length - 1;
    for (var i = 0; i < slideTrans.length; i++) {
        slideTrans[i].style.transform = `translateX(${100*(-slideTransIndex)}%)`;
    }
}



