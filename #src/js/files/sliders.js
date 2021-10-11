//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}
function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}

function sliders_bild_callback(params) { }

if (document.querySelector('.slider-about__body')) {
	new Swiper('.slider-about__body', {
		//Для того чтобы обновлялся после изменения стилей (должно упрощать разработку)
		//Сам слайдер
		observer: true,
		//Родительские элементы
		observeParents: true,
		//Количество слайдов для показа
		slidesPerView: 'auto',
		//Если слайдов недостаточно, то слайдер не будет работать
		watchOverflow: true,
		//Продолжительность перехода между слайдами (в мс)
		speed: 800,
		/*Включает режим цикла
		Из-за того, как работает режим цикла, будут добавлены дублированные слайды. 
		У таких дублированных слайдов будут дополнительные классы:
			swiper-slide-duplicate - представляет собой дублированный слайд
			swiper-slide-duplicate-active - представляет слайд, дублированный текущим активным слайдом
			swiper-slide-duplicate-next - представляет слайд, дублированный на слайд рядом с активным
			swiper-slide-duplicate-prev - представляет слайд, дублированный на слайд, предшествующий активному
		*/
		loop: true,
		//Курсор рука
		grabCursor: true,
		//Добавление количества слайдов, которые будут клонированы после создания цикла
		loopAdditionalSlides: 5,
		//При включении Swiper принудительно загружает все изображения
		preloadImages: false,
		// Dotts
		pagination: {
			el: '.slider-about__pagination',
			clickable: true,
		},
		// Arrows
		navigation: {
			nextEl: '.slider-about .slider-arrow_next',
			prevEl: '.slider-about .slider-arrow_prev',
		},
		breakpoints: {
			320: {
				spaceBetween: 10
			},
			768: {
				spaceBetween: 16.55
			},
			992: {
				spaceBetween: 17.55
			},
		}
	});
}

if (document.querySelector('.canvas-color-slider__body')) {
	new Swiper('.canvas-color-slider__body', {
		//Для того чтобы обновлялся после изменения стилей (должно упрощать разработку)
		//Сам слайдер
		observer: true,
		//Родительские элементы
		observeParents: true,
		//Количество слайдов для показа
		//Ставлю авто, чтобы самому контролировать ширину слайда
		slidesPerView: 'auto',
		//Продолжительность перехода между слайдами (в мс)
		speed: 400,
		// Arrows
		navigation: {
			nextEl: '.canvas-color-slider .slider-arrow_next',
			prevEl: '.canvas-color-slider .slider-arrow_prev',
		},
		breakpoints: {
			320: {
				spaceBetween: 10,
				enabled: true
			},
			475: {
				enabled: false
			},
		}
	});
}
if (document.querySelector('.edging-color-slider__body')) {
	new Swiper('.edging-color-slider__body', {
		//Для того чтобы обновлялся после изменения стилей (должно упрощать разработку)
		//Сам слайдер
		observer: true,
		//Родительские элементы
		observeParents: true,
		//Количество слайдов для показа
		//Ставлю авто, чтобы самому контролировать ширину слайда
		slidesPerView: 'auto',
		//Продолжительность перехода между слайдами (в мс)
		speed: 400,
		// Arrows
		navigation: {
			nextEl: '.edging-color-slider .slider-arrow_next',
			prevEl: '.edging-color-slider .slider-arrow_prev',
		},
		breakpoints: {
			320: {
				spaceBetween: 10,
				enabled: true,
			},
			475: {
				enabled: false
			},
		}
	});
}

