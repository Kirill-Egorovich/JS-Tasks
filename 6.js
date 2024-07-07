/* Задание 1
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
Вам понадобятся методы строк. 
*/

function ucFirst(str) {
    let result = str[0];
    return result.toUpperCase() + str.slice(1);
}

console.log(ucFirst('hello'));



/* Задание 2
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
Функция должна быть нечувствительна к регистру.
*/

function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('badword') || lowerStr.includes('xxx');
}

console.log(checkSpam('This is a badword'));
console.log(checkSpam('This is a XXX'));
console.log(checkSpam('Hi, my name is Marry Jane'));



/* Задание 3
Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет Женя» -> «янеЖ тевирп»
Обратите внимание: метод reverse существует только у массивов. 
*/

function reverseString(str) {
   return str.split('').reverse().join('');
}

console.log(reverseString('привет Женя'));
console.log(reverseString('Hello World'));



/* Задание 4
Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком. 
let stations = [
    'MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield',
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    'SYB4f65hf75f736463;Stalybridge',
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
]; 
Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:
MAN: Manchester Piccadilly
Вывести эти строки в консоль
*/

let stations = [
    'MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield',
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    'SYB4f65hf75f736463;Stalybridge',
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
]; 

stations.forEach(station => {
    let code = station.substring(0, 3);
    let index = station.indexOf(';');
    let name = station.substring(index + 1);
    console.log(`${code}: ${name}`);
});



/* Задание 5
Напишите функцию, которая проверяет, содержит ли массив элементы, равные нулю. Если да - возвращает true.
Проверить работу функции на примере массивов [12, 4, 50, 1, 0, 18, 40], [56, 24, -55, 2, 9, -345] 
*/

let array = [12, 4, 50, 1, 0, 18, 40];
console.log(array.includes(0));

let arrayTwo = [56, 24, -55, 2, 9, -345];
console.log(arrayTwo.includes(0));



/* Задание 6
Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.
Пример:
let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
console.log(unique(strings) ); должен вывести "кришна, харе, :-O" 
*/

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

function unique(arr) {
    let uniqueArr = [];

    arr.forEach(element => {
        if (uniqueArr.includes(element)) {
            
        } else{
            uniqueArr.push(element);
        }
    }); 

    return uniqueArr;
}  

console.log(unique(strings));



/* Задание 7
Женя и Юля изучают кошек. Каждая из них узнала у 10 владельцев кошек о возрасте их кошки и сохранила данные в массиве (по одному массиву для каждой девочки). 
На данный момент им просто интересно узнать, является ли кошка взрослой или котёнком.
Кошка считается взрослой, если ей не менее 2 лет, и котёнком, если ей менее 2 лет.
Создайте функцию verifyCats, которая принимает 2 массива возрастов кошек (catsJane и catsJulia) и выполняет следующие действия:
1. Женя выяснила, что владельцы первой и последней кошки на самом деле имеют собак, а не кошек! Поэтому удалите возраст собак из Жениного массива.
2. Создайте общий массив с данными Жени (исправленными) и Юли.
3. Для каждой кошки этого общего массива выведите в консоль текст:
    - если кошка взрослая -  Кошка № 1 взрослая, ей 6 лет
    - если котёнок - Кошка № 2 ещё котёнок
4. Вызовите функцию для двух наборов тестовых данных.
Тестовые данные:
1.  Данные Жени [4, 5, 3, 11, 6, 2, 4, 1, 5, 9]
Данные Юли [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]
2.  Данные Жени [3, 5, 9, 14, 1, 2, 6, 8, 3, 10]
Данные Юли [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]
*/

let catsJane1 = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
let catsJulia1 = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];

let catsJane2 = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10];
let catsJulia2 = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4];


function verifyCats(catsJane, catsJulia){
    let correctedCatsJane = catsJane.slice(1, -1);
    
    let allCats = correctedCatsJane.concat(catsJulia);

    allCats.forEach((age, index) => {
        if (age >= 2){
            console.log(`Кошка № ${index + 1} взрослая, ей ${age} лет`);
        } else {
            console.log(`Кошка № ${index + 1} ещё котёнок`);
        }
    });
}

console.log(verifyCats(catsJane1, catsJulia1));
console.log(verifyCats(catsJane2, catsJulia2));



/* Задание 8
Определить массив, например let arr = [5, 4, 3, 8, 0];
Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
Например, запуск функции filterFor(arr, 5) дает результат [5,8]
запуск функции filterFor(arr, 10) дает результат []
запуск функции filterFor(arr, 3.11) дает результат [4,5,8]
*/

let arr = [5, 4, 3, 8, 0];

function filterFor(arr,a){
    const newArr = arr.filter(item => item >= a)

    return newArr;
}

console.log(filterFor(arr, 5));
console.log(filterFor(arr, 10));
console.log(filterFor(arr, 3.11));



/* Задание 9
Описать функцию, которая принимает массив строк и возвращает массив, содержащий только строки более 3-х символов. 
Проверить работу функции на примере:  ['yes', 'hello', 'no', 'easycode', 'what'].
*/

let words = ['yes', 'hello', 'no', 'easycode', 'what'];

function filterForWords(arr){
    const newWords = arr.filter(item => item.length > 3)

    return newWords;
}

console.log(filterForWords(words));



/* Задание 10
Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ] 
*/

const arrs = [ [14, 45], [1], ['a', 'c', 'd'] ];

const sortedArrs = arrs.sort((a, b) => a.length - b.length);

console.log(sortedArrs);
