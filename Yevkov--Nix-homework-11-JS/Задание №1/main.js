// Задание No1. Дочерние элементы в DOM
// Для страницы:
// <html>
// <body>
// <div>Пользователи:</div>
// <ul>
// <li>Джон</li>
// <li>Пит</li>
// </ul>
// </body>
// </html>
// Как получить:
// • Напишите код, который получит элемент <div>?
// • Напишите код, который получит <ul>?
// • Напишите код, который получит второй <li> (с именем Пит)?


console.log(document.body.firstElementChild);
console.log(document.body.children[1]);
console.log(document.body.children[1].children[1]);