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

const names = ["Jack", "Alex", "Emily", "Ben", "Alisa"];

for (let i = 0; i < names.length; i += 2) {
    console.log(names[i]);
}



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
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

questions.push({usersAnswer: 'null'});

console.log(questions);




/* Задание 6
Есть массив произвольных чисел:
let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
1) Вывести в консоль все элементы массива, используя 2 разных цикла: for-of и for со счетчиком
2) Посчитать и вывести в консоль сумму элементов в массиве.
3) Посчитать и вывести в консоль сумму только четных чисел в массиве.
4) Найти и вывести в консоль максимальное число массива.
5) Определить и вывести в консоль индекс максимального числа массива (или индексы, если число встречается более одного раза). Само максимальное число мы уже нашли в прошлой части задачи, повторно его искать не нужно. 
*/

// 1
let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];

for (let item of numbers){
    console.log(item);
}

for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}


// 2
let sum = 0;

for (let i = 0; i < numbers.length; i++){
    sum = sum + numbers[i];
}
console.log(sum);


// 3
let sumEven = 0;

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 === 0) {
        sumEven = sumEven + numbers[i];
    }
}

console.log(sumEven);
                                 

// 4    
let max = numbers[0];

for (let i = 0; i < numbers.length; i++){
    if (max < numbers[i]){
        max = numbers[i];
    }
}
console.log(max);


// 5 - я не уверен, что это правильно т.к. нужно выводить индексы двух цифр 70, а у меня только первой выводится
let maxIndex = 0;

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > max){
        maxIndex = i;
    }
}

console.log(maxIndex);


/* Задание 7
Определить массив let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
Создать новый массив из элементов массива arr, но в новом должны содержаться только положительные элементы.
*/

let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
let newArr = [];

for (let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        newArr.push(arr[i]);
    }
}
console.log(newArr);



/* Задание 8
Определить массив, например let nums = [5, 4, 3, 8, 0] и переменную let limit = 5;
Создать новый пустой массив. В цикле наполнить его элементами nums, но в новом должны содержаться элементы, больше и равные (>=) значению переменной limit. 
*/

let nums = [5, 4, 3, 8, 0];
let limit = 5;

let mas = [];
for (let i = 0; i < nums.length; i++){
    if (nums[i] >= limit){
        mas.push(nums[i]);
    }
}

console.log(mas);



/* Задание 9
Существует массив объектов, описывающих пользователей, например:
const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 12}, {name: 'Anna', age: 22}, {name: 'Alex', age: 18}, {name: 'Valery', age: 8}]
Пройти в цикле по массиву и вывести имена всех пользователей, возраст которых больше 15.
*/

const users = [
    {name: 'Vasya', age: 23}, 
    {name: 'Olya', age: 12}, 
    {name: 'Anna', age: 22}, 
    {name: 'Alex', age: 18}, 
    {name: 'Valery', age: 8}
]

for (let i = 0; i < users.length; i++){
    if (users[i].age > 15){
        console.log(users[i].name);
    }
}

/* Задание 10
Задать массив слов. Например: let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
1) Создать новый массив. С помощью цикла наполнить его объектами с ключами word (само слово), length (длина слова):
[{word:'морковь', length: 7}, {word:'баклажан', length: 8} и т.п.] Вывести этот массив в консоль
2) Пройтись по полученному массиву объектов и вывести в консоль строки вида "слово - длина_слова", например "картошка - 8"
*/

// 1
let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];

let vegetablesNew = [];

for (let i = 0; i < vegetables.length; i++){
    vegetablesNew.push({word: vegetables [i], length: vegetables[i].length});
}

console.log(vegetablesNew);

// 2
for (let i = 0; i < vegetablesNew.length; i++){
    console.log(vegetablesNew[i].word + ' - ' + vegetablesNew[i].length);
}

console.log(vegetablesNew);
