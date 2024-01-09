/* Slidern START Jag har använt mig avW3 Schools och Chat Gpt för att finjustera
W3 Schools: https://www.w3schools.com/howto/howto_js_slideshow.asp
Chat Gpt: https://chat.openai.com/  */ 
let slideIndex = 1;
showSlides(slideIndex);

// Nästa/Föregående kontroller
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Bildkontroller
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
/* Slidern slutar här */