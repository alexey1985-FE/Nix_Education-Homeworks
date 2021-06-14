// Задание No8. Модальное диалоговое окно с формой
// Создайте функцию showPrompt(html, callback), которая выводит форму с
// сообщением (html), полем ввода и кнопками OK/ОТМЕНА.
// • Пользователь должен ввести что-то в текстовое поле и нажать Enter
// или кнопку «OK», после чего должна вызываться функция
// callback(value) со значением поля.
// • Если пользователь нажимает Esc или кнопку «ОТМЕНА», тогда
// вызывается callback(null).
// В обоих случаях нужно завершить процесс ввода и закрыть диалоговое
// окно с формой.

// Требования:

// • Форма должна быть в центре окна.
// • Форма является модальным окном, это значит, что никакое
// взаимодействие с остальной частью страницы невозможно, пока
// пользователь не закроет его.
// • При показе формы, фокус должен находиться сразу внутри <input>.
// • Клавиши Tab/Shift+Tab должны переключать фокус между полями
// формы, не позволяя ему переходить к другим элементам страницы.

function showCover() {
	let coverDiv = document.createElement('div');
	coverDiv.id = 'cover-div';
	document.body.style.overflowY = 'hidden';
	document.body.append(coverDiv);
}

function hideCover() {
	document.querySelector('#cover-div').remove();
	document.body.style.overflowY = '';
}

function showPrompt(text, callback) {
	showCover();
	let form = document.querySelector('#prompt-form');
	let container = document.querySelector('#prompt-form-container');
	document.querySelector('#prompt-message').innerHTML = text;
	form.text.value = '';

	function complete(value) {
		hideCover();
		container.style.display = 'none';
		document.onkeydown = null;
		callback(value);
	}

	form.onsubmit = function () {
		let value = form.text.value;
		if (value == '') return false;

		complete(value);
		return false;
	};

	form.cancel.addEventListener('click', () => complete(null));

	document.addEventListener('keydown', e => {
		if (e.key == 'Escape') {
			complete(null);
		}
	});

	let lastElem = form.elements[form.elements.length - 1];
	let firstElem = form.elements[0];

	lastElem.addEventListener('keydown', () => {
		if (e.key == 'Tab' && !e.shiftKey) {
			firstElem.focus();
			return false;
		}
	});

	firstElem.addEventListener('keydown', () => {
		if (e.key == 'Tab' && e.shiftKey) {
			lastElem.focus();
			return false;
		}
	});

	container.style.display = 'block';
	form.elements.text.focus();
}

document.querySelector('#show-button').addEventListener('click', () => {
	showPrompt('Введите что-нибудь...', function (value) {
		alert('Вы ввели: ' + value);
	});
});
