let hamburgerIcon = document.querySelector(".hamburger-icon");
let hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerIcon.addEventListener("click", function () {
	hamburgerMenu.classList.toggle("active");
});

// Close the hamburger menu by clicking the 'X' icon
let closeIcon = document.querySelector(".menu-close");
closeIcon.addEventListener("click", function () {
	hamburgerMenu.classList.remove("active");
});

/* Slidern START Jag har använt mig avW3 Schools och Chat Gpt för att finjustera
W3 Schools: https://www.w3schools.com/howto/howto_js_slideshow.asp
Chat Gpt: https://chat.openai.com/  */
let slideIndex = 0; // Startar med 0 eftersom vi kommer att öka indexet omedelbart i showSlides-funktionen

// Initierar bildspelet automatiskt när sidan laddas
showSlides();

// Nästa/Föregående kontroller
function plusSlides(n) {
	// Rensar och återställer intervallet vid manuell kontroll
	clearInterval(slideInterval);
	slideIndex += n;
	showSlides(slideIndex);
	// Startar intervallet igen
	slideInterval = setInterval(function () {
		slideIndex++;
		showSlides(slideIndex);
	}, 10000); // 10 sekunder
}

// The function that shows the images
function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("slides");
	if (n === undefined) {
		n = ++slideIndex;
	}
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}
// Set the interval to automatically change image every ten seconds
let slideInterval = setInterval(function () {
	slideIndex++;
	showSlides(slideIndex);
}, 10000); // 10000 ms = 10 seconds

/* Slidern slutar här */
