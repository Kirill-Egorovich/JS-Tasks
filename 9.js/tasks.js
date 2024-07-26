/* Задание 1
Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.
*/

const input = document.querySelector('input');
const ul = document.querySelector('ul');

input.addEventListener('keypress', function(event) {
    const li = document.createElement('li');
    li.textContent = event.key;
    ul.appendChild(li);
});



/* Задание 2
Вставить в html тег input (просто предусмотреть в разметке).
Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля). 
Вам понадобится считывать значение поля, это input.value 
*/

const inputElement = document.querySelector('#ex-2')
inputElement.addEventListener('keyup', () => {
    console.log(inputElement.value);
});



/* Задание 3
Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. 
Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value). 
*/

const ulList = document.querySelector('.list');
const string = document.querySelector('.string');

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const li = document.createElement('li');
    li.textContent = string.value;
    ulList.appendChild(li);
    string.value = '';
});
