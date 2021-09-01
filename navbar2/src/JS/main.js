(function () {
	const listeElements = document.querySelectorAll('.menu__item--show');
	const list = document.querySelector('.menu__links');
	const menu = document.querySelector('.menu__hambuerguer');


	const addClick = () => {
		listeElements.forEach(Element => {
			Element.addEventListener('click', () => {

				let submenu = Element.children[1];
				let height = 0;
				Element.classList.toggle('menu__item--active');

				console.log(submenu.clientHeight)

				if (submenu.clientHeight === 0) {
					height = submenu.scrollHeight;

				}
				submenu.style.height = `${height}px`;

			})
		})
	}

	const deleteStyleHeight = () => {
		listeElements.forEach(Element => {
			if (Element.children[1].getAttribute('style')) {
				Element.children[1].removeAttribute('style');
				Element.classList.remove('menu__item--active')

			}
		});
	}


	window.addEventListener('resize', () => {
		if (window.innerWidth > 800) {
			deleteStyleHeight();
			if (list.classList.contains('menu__links--show'))
				list.classList.remove('menu__links--show');
		} else {
			addClick();
		}
	})
	if (window.innerWidth <= 800) {

	}
	menu.addEventListener('click', () => list.classList.toggle('menu__links--show'))
})();
