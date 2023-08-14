const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Déclaration des variables
const arrowRight = document.querySelector('.arrow_right');
const arrowLeft = document.querySelector('.arrow_left');
const dots = document.querySelector('.dots');
const bannerImg = document.querySelector('.banner-img');
const pathImag = "./assets/images/slideshow/";
const textImg = document.querySelector('#banner  p');
let currentPosition = 0;

// Fonction pour l'ajout des bullets points du slider
const compteurDots = () => {
	//boucle sur le tableau slides pour créer le nombre exact de bullets points
	for (let i = 0; i < slides.length; i++) {
	// création d'un élément div
	const dot = document.createElement("div") 
	// applique les propriéters CSS au "dot"
	dot.className = "dot"
	// ajoute les éléments "dot" dans le parent dots
	dots.appendChild(dot)
	}
}

// Appel de la fonction
compteurDots();

// Fonction pour mettre à jour le contenu de la bannière et les dots
const updateBanner = () => {
	const slide = slides[currentPosition];
	
	bannerImg.src = pathImag + slide.image;
	bannerImg.alt = slide.tagLine;
	bannerImg.nextElementSibling.innerHTML = slide.tagLine;

	textImg.innerHTML = slide.tagLine;

	// Mettre à jour la classe du dot correspondant
	const allDots = dots.querySelectorAll('.dot');
	allDots.forEach((dot, index) => {
	  if (index === currentPosition) {
		dot.classList.add('dot_selected');
	  } else {
		dot.classList.remove('dot_selected');
	  }
	});
};
  
// Fonction pour avancer  ou reculer le carrousel
const slideRight = () => {
	// console.log('Flèche droite')
	currentPosition = (currentPosition + 1) % slides.length;
	updateBanner();
};
  
const slideLeft = () => {
	// console.log('Flèche gauche')
	currentPosition = (currentPosition - 1 + slides.length) % slides.length;
	updateBanner();
};
  
// Gestionnaires de clic pour les flèches
arrowRight.addEventListener('click', slideRight);
arrowLeft.addEventListener('click', slideLeft);
  
// Fonction pour changer la diapositive en fonction du dot cliqué
dots.addEventListener('click', (event) => {
	if (event.target.classList.contains('dot')) {
	  const dotIndex = Array.from(dots.children).indexOf(event.target);
	  console.log(dotIndex)
	  currentPosition = dotIndex;
	  updateBanner();
	}
});

// Initialisation du carrousel avec la première diapositive
updateBanner();

console.log(slides);