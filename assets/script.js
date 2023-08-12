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

// Javascript Carrousel
const arrowRight = document.querySelector('.arrow_right');
const arrowLeft = document.querySelector('.arrow_left');
const dots = document.querySelector('.dots');

// Flèches slider
arrowRight.addEventListener("click", ()=>{
	console.log('Flèche droite')
});

arrowLeft.addEventListener("click", ()=>{
	console.log('Flèche gauche')
});

// Ajout des bullets points du slider
const compteurDots = function() {
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