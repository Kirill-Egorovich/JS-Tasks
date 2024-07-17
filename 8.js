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



/* Задание 4
Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу. 
*/

const paragraph = document.createElement('p');
paragraph.style.fontSize = '36px';
paragraph.style.fontWeight = 'bold';

document.body.append(paragraph);



/* Задание 5
Написать в html тег заголовка с текстом "Сегодня:" 
После заголовка подготовить в html пустой параграф. С помощью js добавить в него сегодняшнюю дату. 
*/

// Не работает -->
const forDate = document.querySelector('.for-Date');

let now = new Date();

let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

forDate.innerText = now.toLocaleDateString('ru-RU', options);
