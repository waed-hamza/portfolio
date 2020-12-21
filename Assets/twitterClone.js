// Header
document.getElementsByClassName("nav-ul-a")[2].style.color = '#FFFF77';
document.getElementsByClassName("nav-ul-a")[2].style.borderBottom = "2px solid #FFFF77";
for(let i=0; i<7; i++){
  document.getElementsByClassName("nav-ul-a")[i].addEventListener('click', function(){
    for(let j=0; j<7; j++){
      document.getElementsByClassName("nav-ul-a")[j].style.color = '#fefefe'; 
      document.getElementsByClassName("nav-ul-a")[j].style.borderBottom = "none";
    }
    document.getElementsByClassName("nav-ul-a")[i].style.color = '#FFFF77';  
    document.getElementsByClassName("nav-ul-a")[i].style.borderBottom = "2px solid #FFFF77"; 
  });
}


// Slide Show
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");

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
}