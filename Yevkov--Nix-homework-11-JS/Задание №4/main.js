// Задание No4. Подсчет потомков
// Есть дерево, структурированное как вложенные списки ul/li.
// Напишите код, который выведет каждый элемент списка <li>:
// 1. Какой в нём текст (без поддерева) ?
// 2. Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?


let allLi = document.querySelectorAll('li');

for (let li of allLi) {
	let text = li.firstChild.data;
	noSpaces = text.trim();
	let count = li.getElementsByTagName('li').length;
	console.log(noSpaces +'-' + count);
}
