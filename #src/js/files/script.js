//функция срабатывающая после того как весь контент на странице загрузится
window.onload = function () {
	//обработка события клик на всём документе
	document.addEventListener("click", documentActions);
	//Actions делегирование события клик
	function documentActions(e) {
		const targetElement = e.target; //присваиваем в константу объект на который мы нажали
		
		if (targetElement.classList.contains('ordering-form-quantity__minus')) {
			quantityForm(false);
		}

		if (targetElement.classList.contains('ordering-form-quantity__plus')) {
			quantityForm();
		}
		if (targetElement.classList.contains('roll-up') || targetElement.closest('.roll-up')) {
			const spoller = targetElement.closest('.roll-up').parentElement.parentElement.previousElementSibling;
			console.log(spoller);
			spoller.classList.remove('_active');
			_slideUp(spoller.nextElementSibling, 500);
		}
		if (targetElement.classList.contains('item-ordering-footer__button')) {
			popup_open('order' + '-message');
		}
		
	}
	//========================================================================================================================================================
	
	//Липкая шапка с фоном========================================================================================================================================================
	//Ищем саму шапку
	const headerElement = document.querySelector('.header');
	//Пишем функцию, которая будет выполняться при пересечении шапки с областью видимости 
	const callback = function (entries) {
		if (entries[0].isIntersecting) {
			headerElement.classList.remove('_scroll');
		} else {
			headerElement.classList.add('_scroll');
		}
	}
	//Создаем IntersectionObserver, котрый вызывает нашу функцию callback
	const headerObserver = new IntersectionObserver(callback);
	//Начинаем наблюдение за шапкой
	headerObserver.observe(headerElement);
	//========================================================================================================================================================

	//========================================================================================================================================================
	const quantity = document.querySelector('.ordering-form-quantity__input');
	const quantityForm = function (plus=true) {
		if (plus) {
			quantity.value = ++quantity.value;
		} else {
			if (quantity.value>0) {
				quantity.value = --quantity.value;
			}
		}
	}
}	
