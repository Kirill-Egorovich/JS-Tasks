/* Задание 1
Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.
Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.
Выведите в консоль строку:
На компьютере с ОС ... с помощью браузера ... я открыл страничку ... 
(необходимые значения добавьте с помощью BOM) */

console.log('На компьютере с ОС ' + navigator.platform + ' с помощью браузера ' + navigator.userAgent + ' я открыл страничку ' + location.href); // Вроде правильно



/* Задание 2
В файле html есть разметка:
<ul id="list">
    <li>Джон</li>
    <li>Пит</li>
    <li>Джессика</li>
    <li>Сара</li>
</ul>
Вывести в консоль каждое из имен (содержимое каждого li). 
*/

const listItems = document.querySelectorAll('#list li');

listItems.forEach(item => console.log(item.innerText));



/* Задание 3
Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.) 
*/

listItems.forEach((item, index) => item.innerText = index);
