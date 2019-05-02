require('./css/styles.css');
require('../node_modules/animate.css/animate.min.css');
import AOS from 'aos';
import 'aos/dist/aos.css';
import Gumshoe from 'gumshoejs';
import SmoothScroll from 'smooth-scroll';

AOS.init();

let spy = new Gumshoe('#navList a');
let scroll = new SmoothScroll('#navList a[href*="#"], #backToTop');
let scroll2 = new SmoothScroll('#leaveCover, #learnMore', {
	speed: 1500
});

let sideNav = document.getElementById("sideNav"),
	page = document.getElementById("page");

document.getElementById('menuToggle').addEventListener('click', () => {

	sideNav.classList.toggle('navOpen');
	page.classList.toggle('navOpen');

});

let contactLink = document.getElementById('contactLink'),
	contactModal = document.getElementById('contactModal'),
	buttonCloseModal = document.getElementById('buttonCloseModal');

contactLink.addEventListener('click', () => {

	contactModal.classList.remove('hidden');
	contactModal.classList.add('fadeIn');

	contactModal.addEventListener('animationend', afterAnimation);

});

buttonCloseModal.addEventListener('click', () => {

	contactModal.classList.add('fadeOut');

	contactModal.addEventListener('animationend', afterAnimation);

});

function afterAnimation () {

	if ( this.classList.contains('fadeIn') ) {

		this.classList.remove('fadeIn');

	} else {

		this.classList.add('hidden');
		this.classList.remove('fadeOut');

	}

}