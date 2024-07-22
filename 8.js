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

const today = new Date();

const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

const formattedDate = today.toLocaleDateString('ru-RU', options);

document.getElementById('date').innerText = formattedDate;



/* Задание 6
Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое.
Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. 
Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу. 
*/

function generatedTags(tagName, color, content){
    const tag = document.createElement(tagName);
    tag.style.color = color;
    tag.innerText = content;
    
    return tag;
}

const createdTag = generatedTags('h1', 'red', 'Heading'); 

console.log(createdTag);

document.body.append(createdTag);



/* Задание 7
Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020. 
*/

const yearSelect = document.getElementById('yearSelect');

for (let i = 1960; i <= 2020; i++){
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    yearSelect.appendChild(option);
}



/* Задание 8

Вставить в страницу (в html документ) ul.
Предусмотреть в коде следующий массив:

const clients = [
    {name: "Женя", order: true},
    {name: "Кристина", order: true},
    {name: "Павел", order: false},
    {name: "Виолетта", order: false},
    {name: "Костя", order: true}
]

Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
- Клиент Женя оплатил заказ
- Клиент Павел отменил заказ
... остальные li с контентом 

Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), 
статус зависит от от свойства order: если true – то оплатил, если false – то отменил.
*/

const clients = [
    {name: "Женя", order: true},
    {name: "Кристина", order: true},
    {name: "Павел", order: false},
    {name: "Виолетта", order: false},
    {name: "Костя", order: true}
]

const clientsList = document.getElementById('clientsList');

clients.forEach(client => {
    const li = document.createElement('li');
    
    const status = client.order ? 'оплатил' : 'отменил';

    li.textContent = `Клиент ${client.name} ${status} заказ`;

    clientsList.appendChild(li);
});



/* Задание 9

Есть массив ссылок:
    let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];
Вам нужно:
1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
3) Добавить DIV из пункта 1 (со ссылками внутри) в BODY
*/

let linksArr = [
    'https://www.amazon.com/', 
    'https://www.youtube.com/', 
    'https://devby.io/', 
    'https://www.google.com/', 
    'https://apple.com/'
];

let div = document.createElement('div');
div.style.backgroundColor = 'lightGreen';
div.style.padding = '30px';


linksArr.forEach(link => {
    let a = document.createElement('a');
    a.href = link;
    a.textContent = link;
    a.setAttribute('target', '_blank');
    a.style.display = 'block';

    div.appendChild(a);
});

document.body.appendChild(div);



/* Задание 10
Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их. 
*/

let elementsToRemove = document.querySelectorAll('.forRemove');

elementsToRemove.forEach(element => {
    element.remove();
});



/* Задание 11*
Создать массив объектов с полями name, age. Например:

const users = [
    {name: 'Mark', age: 12},
    {name: 'Olga', age: 30},
    {name:'Tom', age: 25},
    {name:'Den', age: 43}
]

Создать в html таблицу (table).
C помощью js заполнить таблицу информацией из массива, в одной колонке будут имена, во второй возраст. Имена должны быть красного цвета, age - синего.
*/

// Не работает. выдает ошибки 'at tasks.js:235:21' и 'at tasks.js:223:7'
const users = [
    {name: 'Mark', age: 12},
    {name: 'Olga', age: 30},
    {name:'Tom', age: 25},
    {name:'Den', age: 43}
];

let table = document.querySelectorAll('table');

users.forEach(user => {
    let row = document.createElement('tr');

    let nameCell = document.createElement('td');
    nameCell.textContent = user.name;
    nameCell.style.color = 'red';

    let ageCell = document.createElement('td');
    ageCell.textContent = user.age;
    ageCell.style.color = 'blue';

    row.appendChild(nameCell);
    row.appendChild(nameAge);
    table.appendChild(row);
});
