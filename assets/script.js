// images et txt sous forme de tableau
(function() {
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
];

let presentSlide = 0; // Index de la slide actuelle
const nbrSlides = slides.length; // Nbr total de slides
const bannerImg = document.querySelector('.banner-img'); // Img du slider
const tagline = document.querySelector('#banner p'); // Text sur la slide
const dotsContainer = document.querySelector('.dots'); // Conteneur des dots
const left = document.querySelector('.arrow_left'); // Flèche gauche
const right = document.querySelector('.arrow_right'); // Flèche droite
let dots = []; // Tableau des dots

function createDot() {
    if (nbrSlides === 1) {
      dotsContainer.classList.add('hide-dots'); // Masquer les dots s'il n'y a qu'une seule slide
      return;
    }

    for (let d = 0; d < nbrSlides; d++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dotsContainer.appendChild(dot);
      dots.push(dot); // Ajouter le dot au tableau des dots
    }
  }

function slider() {
    bannerImg.src = `./assets/images/slideshow/${slides[presentSlide].image}`;
    tagline.innerHTML = slides[presentSlide].tagLine;

    dots.forEach((dot) => dot.classList.remove('dot_selected')); // Réinitialiser la classe 'dot_selected' pour tous les dots
    dots[presentSlide].classList.add('dot_selected'); // Ajouter la classe 'dot_selected' au dot correspondant à la slide actuelle
  }

function toLeft() {
    presentSlide = (presentSlide - 1 + nbrSlides) % nbrSlides; // Décrémenter l'index de la slide actuelle avec gestion de la boucle
    slider();
  }

function toRight() {
    presentSlide = (presentSlide + 1) % nbrSlides; // Incrémenter l'index de la slide actuelle avec gestion de la boucle
    slider();
  }

createDot(); // Créer les dots
right.addEventListener('click', () => toRight()); // Ajouter un eventlistener pour la flèche droite
left.addEventListener('click', () => toLeft()); // Ajouter un eventlistener pour la flèche gauche

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      //option click sur dot : presentSlide = index; // Mettre à jour la slide actuelle lorsque l'utilisateur clique sur un dot
      slider();
    });
  });

slider(); // Afficher la première slide au chargement de la page
})();