// Задание No2. Найдите координаты точек относительно окна браузера
// Ниже располагается код документа с зелёным «полем».
// Используйте JavaScript, чтобы найти координаты углов, обозначенных стрелками.
// В документе уже реализована функциональность, когда при клике на любом месте
// показываются соответствующие координаты.
// Кликните в любом месте для получения координат в контексте окна.
// Это для тестирования, чтобы проверить результат, который вы получили с помощью
// JavaScript.

// Ваш код должен при помощи DOM получить четыре пары координат:
// • верхний левый, внешний угол (это просто).
// • нижний правый, внешний угол (тоже просто).
// • верхний левый, внутренний угол (чуть сложнее).
// • нижний правый, внутренний угол (есть несколько способов, выберите один).
// Координаты, вычисленные вами, должны совпадать с теми, которые возвращаются по
// клику мыши.
// P.S. Код должен работать, если у элемента другие размеры или есть рамка, без
// привязки к конкретным числам.

let elem = field.getBoundingClientRect();

let triangleTopLeftOut = [elem.left, elem.top]; //верхний левый, внешний угол
let triangleBottomRightOut = [elem.right, elem.bottom]; //нижний правый, внешний угол
let triangleTopLeftInside = [elem.left + field.clientLeft, elem.top + field.clientTop]; //верхний левый, внутренний угол
let triangleBottomRightInside = [elem.left + field.clientLeft + field.clientWidth, elem.top + field.clientTop + field.clientHeight]; //нижний правый, внутренний угол

console.log(triangleTopLeftOut.join(' '));
console.log(triangleBottomRightOut.join(' '));
console.log(triangleTopLeftInside.join(' '));
console.log(triangleBottomRightInside.join(' '));
