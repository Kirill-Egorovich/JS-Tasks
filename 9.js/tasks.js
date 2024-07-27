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



/* Задание 4
Калькулятор. 
Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.
1) решить с помощью if
2) решить с помощью evel
*/

const resultDiv = document.querySelector('#result');

const calculator = document.querySelector('#calculator');
calculator.addEventListener('submit', function(event) {
    event.preventDefault();

    const num1 = parseFloat(calculator.num1.value);
    const num2 = parseFloat(calculator.num2.value);
    const operator = calculator.operator.value;

// 1) С помощью if

    let result;

    if (operator === '+'){
        result = num1 + num2;
    } else if (operator === '-'){
        result = num1 - num2;
    } else if (operator === '*'){
        result = num1 * num2;
    } else if (operator === '/'){
        result = num1 / num2;
    }

    resultDiv.textContent = result;

// 2) С помощью eval
    const expression = `${num1} ${operator} ${num2}`;
    const result = eval(expression);

    resultDiv.textContent = result
});



/* Задание 5
Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. 
При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.
*/

const button = document.querySelector('button');

function getRandom() {
    return Math.floor(Math.random() * 256);
}

button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
});


function getRandomAngle () {
    return Math.floor(Math.random() * 361) - 180 
}

button.addEventListener('mouseleave', () => {
    button.style.transform = `rotate(${getRandomAngle()}deg)`;
});
