// Задание No7. Добавить кнопку закрытия
// Есть список сообщений.
// При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку
// закрытия.

document.querySelectorAll('.pane').forEach(item => {
	item.insertAdjacentHTML('afterbegin', '<button class="remove-button">[x]</button>');
	item.firstChild.addEventListener('click', () => item.remove());
});
