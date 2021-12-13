let darkBut = document.querySelector(".darkMode")
darkBut.addEventListener("click",darkMode)
<<<<<<< Updated upstream
pressed = false; 

=======
>>>>>>> Stashed changes
function darkMode() {
    //change background color to dark and text color to something light
    pressed = !pressed
    light = "Click for Light Mode"
    dark = "Click for Dark Mode"
    if(pressed){
    document.body.style.backgroundColor = "#1e272c";
    document.body.style.color = "white";
    document.querySelector(".darkMode").innerText = light;
<<<<<<< Updated upstream
    document.getElementById("logo").src="img/logodark.png"
=======
>>>>>>> Stashed changes
    }
    else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.querySelector(".darkMode").innerText = dark;
<<<<<<< Updated upstream
        document.getElementById("logo").src="img/logowhite.png"
    }
}
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
  var slides = document.getElementsByClassName("mySlides");
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
=======
    }
    
>>>>>>> Stashed changes
}