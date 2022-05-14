new Swiper('#homeCarousel', {
	loop: true,
	autoplay: {
		delay: 5000,
	},
	speed: 1000,
});

const contact_section = document.querySelector('section.home-contact');
if (typeof contact_section != 'undefined') {
	document.addEventListener('scroll', (e) => {
		const scroll_value = (scrollY * innerHeight) / (innerHeight / 0.15) - 200;
		contact_section.style.backgroundPosition = `0 ${scroll_value}px`;
		console.log('scroll_value :>> ', scroll_value);
	});
}
