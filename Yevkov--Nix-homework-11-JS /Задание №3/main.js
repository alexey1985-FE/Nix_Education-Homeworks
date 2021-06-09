// Задание No3. Поиск элементов
// Вот документ с таблицей и формой. Как найти?...
// • Таблицу с id="age-table".
// • Все элементы label внутри этой таблицы (их три).
// • Первый td в этой таблице (со словом «Age»).
// • Форму form с именем name="search".
// • Первый input в этой форме.
// • Последний input в этой форме.

let ageTable = document.querySelector('#age-table');
console.log(ageTable);
let tableLabels = ageTable.querySelectorAll('label');
console.log(tableLabels);
console.log(ageTable.rows[0].cells[0]);
let form = document.getElementsByName('search')[0];
console.log(form);
console.log(form.querySelector('input')); 
console.log(form.lastElementChild); 
