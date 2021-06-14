// Задание No6. Создать раскрывающееся меню
// Создать меню, которое по нажатию открывается либо закрывается.
// P.S. HTML/CSS исходного документа можно и нужно менять.

let menu = document.querySelector('.menu');
let menuTitle = menu.querySelector('.title');

menuTitle.addEventListener('click', () => {
	menu.classList.toggle('open');
});
