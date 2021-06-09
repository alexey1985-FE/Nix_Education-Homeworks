// Задание No7. Выведите список потомков в дереве
// Есть дерево, организованное в виде вложенных списков ul/li.

// Напишите код, который добавит каждому элементу списка <li> количество вложенных в
// него элементов. Узлы нижнего уровня, без детей – пропускайте.

let allLi = document.querySelectorAll('li');

for (const li of allLi) {
	let count = li.querySelectorAll('li').length
	if (!count) continue;
	li.firstChild.data += ' [' + count + ']';
}
