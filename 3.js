/* Задание 1
Задайте в коде переменную n с числовым значением. С помощью логического И в условии проверьте, находится ли переменная n в диапазоне чисел от 0 до 100 включительно.
*/

let n = 37;
let compare = n > 0 && n < 101;
console.log(compare);



/* Задание 2
Дан объект с именами и заработными платами:
constEngineers = {
    Den: 1000,
    Matt: 5000,
    Steve: 2000
}
Вывести в консоль через шаблонные строки заработную плату всех работников в таком формате: Заработная плата xxx составляет xxx рублей. 
(Внимание. Ваша прошрамма должна работать для любого количества имён и зарплат!)
*/

const engineers = {
    Den: 1000,
    Matt: 5000,
    Steve: 2000
}

for (let property in engineers){
    console.log(`Заработная плата ${property} составляет ${engineers[property]} рублей`);
}



/* Задание 3
Создать массив из 5 элементов. Используя цикл for, вывести каждый второй элемент масива в консоль.
*/

// Не получается, как каждый второй элемент выводить?

// const names = ["Jack", "Alex", "Emily", "Ben", "Alisa"];

// for (let i = 0; i < names.length; i = ?){
//     console.log());
// }



/* Задание 4
Есть массив произвольных чисел: 
let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:
Индексу 0 соответствует число 42
Индексу 1 соответствует число 65 и т.д.
*/

let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];

for (let key in numbers){
    console.log('Индексу ' + key + ' соответствует число ' + numbers[key]);
}



/* Задание 5
Дан массив объектов, например:
let questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];
Добавить в каждый объект дополнительное поле usersAnswer со значением null.
Решение должно работать для массива любой длины. 
*/

let questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
    usersAnswer: null
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0,
    usersAnswer: null
}];
