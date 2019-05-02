let navbars = [];

document.querySelectorAll('[data-gp-component="navbar"]').forEach((navbar) => {
	
	navbars.push(new Navbar(navbar));

});

function Navbar (element) {
	this.element = element;
	this.collapse = element.querySelectorAll('[data-collapse]');
	this.responsiveOpen = false;

	this.toggle = () => {
		if ( !this.responsiveOpen ) {
			this.collapse.forEach((collapse) => {
				collapse.classList.remove('hidden');
				this.responsiveOpen = true;
			});
		} else {
			this.collapse.forEach((collapse) => {
				collapse.classList.add('hidden');
				this.responsiveOpen = false;
			});
		}
	};

	let toggle = this.element.querySelector('[data-menu-toggle]');

	if ( toggle !== null ) toggle.addEventListener('click', () => {this.toggle()});

}