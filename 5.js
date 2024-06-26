/* Задание 1
Написать функцию, которая принимает два параметра и складывает их.
Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обработайте случай, если не было введено два параметра.
Примеры результатов вызова функции:
sum(2,4); // 6
sum('d',4); // введенные данные не являются числами
sum(1, [2]); // введенные данные не являются числами
sum(1); // введите два параметра
sum(); // введите два параметра
*/

function sum (a, b) {  
    if (arguments.length < 2) {
        return 'Введите два параметра';
    }
    
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Введённые данные не являются числами';
    }

    return a + b;  
}

console.log(sum(2, 4));
console.log(sum('d', 4));
console.log(sum(1, [2]));
console.log(sum(1));
console.log(sum());



/* Задание 2
Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error):
"Функция "square" не может быть вызвана без аргумента"
function square(a) {
  console.log(a * a)
}
square(10) // 100
square()
// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента
*/

function square(a) {
    if (arguments.length === 0){
        console.error('Функция "square" не может быть вызвана без аргумента'); 
        return 'Uncaught Error: Функция "square" не может быть вызвана без аргумента'; // Как я понял надо чтобы вместо NaN, в консоль выводился этот текст <--
    }

    console.log(a * a);
}

console.log(square(10));
console.log(square());



/* Задание 3
Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
Написать функцию в стрелочном синтаксисе.
*/

let guessNumber = (number) => {
    if (number < 1 || number > 10) {
        return 'Число должно быть от 1 до 10';
    }

    let randomNumber = Math.floor(Math.random() * 10) + 1;

    if (number === randomNumber) {
        return 'Вы выиграли';
    } else {
        return 'Вы не угадали, ваше число - ' + number + ' а выпало число ' + randomNumber;
    }
};

console.log(guessNumber(3));



/* Задание 4
Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива - forEach или map. 
*/

const arr = ['Apple', 'Banana', 'Cherry'];

const copyArr = arr.map(item => item);

console.log(copyArr);



/* Задание 5
Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.
Проверить работу функции можно на объекте:
const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
} 
*/

const objectWithNumbers = {
    a: 10,
    b: 20,
    c: 'string',
    d: 12,
}

function sumObjectValues(value){
    let summa = 0;
    for (let item in value){
        if (typeof value[item] === 'number'){
            summa += value[item];
        }
    }

    return summa;
}

console.log(sumObjectValues(objectWithNumbers));
