// BEGIN DARK MODE 
function toggleDarkMode() {
  backgroundChange();
  pictureChange();
  iconChange();
  textChange();
} 

function backgroundChange() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function pictureChange() {
  if (document.getElementById("cc-avatar").src.match("self_portrait_dark_mode")) {
    document.getElementById("cc-avatar").src = "img/self_portrait.gif";
    document.getElementById("cc-footer").src = "img/cc-footer.gif";
    // document.getElementById("cc-dark-mode-toggle").src = "img/sun.svg";
  }
  else {
    document.getElementById("cc-avatar").src = "img/self_portrait_dark_mode.gif";
    document.getElementById("cc-footer").src = "img/cc-footer-dm.gif";
    // document.getElementById("cc-dark-mode-toggle").src = "img/moon.svg";
  }
}

function iconChange() {
  if (document.getElementById("cc-dark-mode-toggle").src.match("moon")) {
    document.getElementById("cc-dark-mode-toggle").src = "img/sun.svg";
  }
  else {
    document.getElementById("cc-dark-mode-toggle").src = "img/moon.svg";
  }
}

function textChange() {
  // document.querySelectorAll("a")[0].style.color = "white";
  var link = document.querySelectorAll("a:not(.prev):not(.next):not(.cc-caption-link)");
  
  if (document.getElementById("cc-dark-mode-toggle").src.match("moon")) {
    for (var i=0, max=link.length; i < max; i++) {
      link[i].style.color = " #D0D0D0";
    }
    document.getElementsByClassName("cc-subheader")[0].style.color = "#D0D0D0";
  } else {
    for (var i=0, max=link.length; i < max; i++) {
      link[i].style.color = "#272727";
    }
    document.getElementsByClassName("cc-subheader")[0].style.color = "#272727";
  }
}

// END DARK MODE

//BEGIN MODAL

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

document.addEventListener('keydown', function(event){
  if(event.key === "Escape"){
    closeModal();
  } if(event.key === "ArrowLeft"){
      plusSlides(-1);
  } if (event.key === "ArrowRight"){
      plusSlides(1);
  }
});

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
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
}

// END MODAL
