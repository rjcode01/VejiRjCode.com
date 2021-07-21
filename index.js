const myslide = document.querySelectorAll('.myslider');
const dot = document.querySelectorAll('.dot');


let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 6000);
function autoslide() {
    counter += 1;
    slidefun(counter);
}

function plusSlide(n) {
    counter += n;
    slidefun(counter);
    // resetTimer();
}
function currentSlide(n) {
    counter = n;
    slidefun(counter);
    // resetTimer();

}


// function resetTimer(){
//     clearInterval(timer);
//     timer = setInterval(autoslide,000);
// }

function slidefun(n) {
    let i;
    for (i = 0; i < myslide.length; i++) {
        myslide[i].style.display = "none";
    }
    for (i = 0; i < dot.length; i++) {
        dot[i].classList.remove('active');

    }
    if (n > myslide.length) {
        counter = 1;
    }
    if (n < 1) {
        counter = myslide.length;
    }
    myslide[counter - 1].style.display = "block";
    dot[counter - 1].classList.add('active');

}


// OTHER SLIDER 

const otherslider = document.querySelectorAll('.otherslider');
const ohterdot = document.querySelectorAll('.others-dot');
let counter2 = 1;
slidefun2(counter2);

function autoslide2() {
    counter2 += 1;
    slidefun2(counter2);
}


function OtherSlide(n) {
    counter = n;
    slidefun(counter);
    // resetTimer();

}
function slidefun2(n) {

    for (i = 0; i < otherslider.length; i++) {
        otherslider[i].style.display = "none";
    }
    for (i = 0; i < ohterdot.length; i++) {
        ohterdot[i].classList.remove('active');

    }
    if (n > otherslider.length) {
        counter2 = 1;
    }
    if (n < 1) {
        counter2 = otherslider.length;
    }
    otherslider[counter2 - 1].style.display = "block";
    ohterdot[counter2 - 1].classList.add('active');
}


/*


  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000);
}*/





