// Задание No2. Выделите ячейки по диагонали
// Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
// Вам нужно получить из таблицы <table> все диагональные <td> и выделить их,
// используя код:
// в переменной td находится DOM-элемент для тега <td>
// td.style.backgroundColor = 'red';

// table.rows[0].cells[0].style.backgroundColor = 'red';
// table.rows[1].cells[1].style.backgroundColor = 'red';
// table.rows[2].cells[2].style.backgroundColor = 'red';
// table.rows[3].cells[3].style.backgroundColor = 'red';
// table.rows[4].cells[4].style.backgroundColor = 'red';

// или

let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
	table.rows[i].cells[i].style.backgroundColor = 'red';
}
