// Задание No1. Создать уведомление
// Напишите функцию showNotification(options), которая создаёт уведомление: <div
// class="notification"> с заданным содержимым. Уведомление должно автоматически
// исчезнуть через 1,5 секунды.

function showNotification({ top = 0, right = 0, className, html }) {
	let notification = document.createElement('div');
	notification.className = 'notification';
	if (className) {
		notification.classList.add(className);
	}

	notification.style.top = top + 'px';
	notification.style.right = right + 'px';

	notification.innerHTML = html;
	document.body.append(notification);

	setTimeout(() => notification.remove(), 1500);
}

showNotification({
	top: 10,
	right: 10,
	html: 'Hello! ',
	className: 'welcome',
});
