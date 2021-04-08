const swiper = new Swiper('.channel-slider', {
	// Optional parameters
	loop: true,
	slidesPerView: 6,
	// Navigation arrows
	navigation: {
		nextEl: '.channel-button-next',
    	prevEl: '.channel-button-prev',
	},
});

const swiper_recomended = new Swiper('.recommended-slider', {
	// Optional parameters
	loop: true,
	slidesPerView: 3,
	spaceBetween: 40,
	// Navigation arrows
	navigation: {
    	nextEl: '.recommended-button-next',
    	prevEl: '.recommended-button-prev',
  	},
});

const swiper_recomended_chanel = new Swiper('.channel-recommended-slider', {
	// Optional parameters
	loop: true,
	slidesPerView: 6,
	// Navigation arrows
	navigation: {
		nextEl: '.channel-recommended-button-next',
    	prevEl: '.channel-recommended-button-prev',
	},
});