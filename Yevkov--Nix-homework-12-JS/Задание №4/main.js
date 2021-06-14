// Задание No4. Скрыть элемент по нажатию кнопки
// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.

let buttonHide = document.querySelector('#hider');
let textHide = document.querySelector('#text');

buttonHide.addEventListener('click', () => {
	textHide.style.display = 'none';
});
