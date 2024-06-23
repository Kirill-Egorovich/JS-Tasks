/* Задание 1
Перепишите код, заменив цикл for на while, без изменения поведения цикла.
    for (let i = 0; i < 3; i++){
        alert(`number${i}!`);
    }  
*/

let i = 0;
while(i < 3){
    alert(`number${i}!`);
    i += 1;
}



/* Задание 2
Перепишите код с использованием тернарного оператора
    let country = 'Sweden';
    let access;
    if (country == 'Sweden') {
    access = true;
    } else{
    access = false;
}
*/

let country = 'Sweden';
let access;

country == 'Sweden' ? access = 'true' : access = 'false';

console.log(access);



/* Задание 3
Дан массив логических значений (true/false). 
Например: const roles = [true, false, false, true, false]. Каждое значение обозначает админ (true) или пользователь (false).
Из этого массива с помощью цикла сформировать массив объектов - roles, такой же длины, как и заданный массив.
У каждого объекта должно быть одно поле, role, которое равно admin, если значение в заданном массиве - true, и user, если значение в заданном массиве - false.
Т.е. из
    [true, false, false]
должно получиться
    [{ role: 'admin' }, { role: 'user' }, { role: 'user' } ]
*/    

const roles = ['true', 'false', 'false', 'true', 'false'];
const newRoles = [];

for (let i = 0; i < roles.length; i++) {
    const role = roles[i] == 'true' ? 'admin' : 'user';
    newRoles.push({role: role});
}

console.log(newRoles);



/* Задание 4
Создайте функцию findPositiveNumbers(). Она принимает массив в качестве параметра и возвращает новый массив, в котором содержатся только положительны элементы.
Проверьте работу функции на примере массивов:
    const nums = [5, 4, 3, -3, -10, -1, 8, -20, 0]
    const numbers = [443, -39, 0, -105, -21, 38, -20, 3, 90].
*/

const nums = [5, 4, 3, -3, -10, -1, 8, -20, 0];

function findPositiveNumbers(nums){
    let positiveNumbers = [];
    for (let i = 0; i < nums.length; i++){
        if (nums[i] > 0) {
            positiveNumbers.push(nums[i]);
        }
    }

    return positiveNumbers;
}    
console.log(findPositiveNumbers(nums));


const numbers = [443, -39, 0, -105, -21, 38, -20, 3, 90];

function findPositiveNumbersTwo(numbers){
    let positiveNumbersTwo = [];
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] > 0) {
            positiveNumbersTwo.push(numbers[i]);
        }
    }

    return positiveNumbersTwo;
} 
console.log(findPositiveNumbersTwo(numbers));



/* Задание 5
Напишите функцию, которая принимает два параметра: значение и количество элементов. Функция создает новый массив и заполняет его этим значением в указанном количестве.
Например: из переданных значений ('a', 3) получаем массив ['a', 'a', 'a'] 
*/

function valueInQuantity(meaning, quantity){
    const result = [];
    for (let i = 0; i < quantity; i++) {
        result.push(meaning);
    }
    return result;
}
console.log(valueInQuantity('Kirill', 3));
