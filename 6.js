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

// Не получается -->
let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

function unique(arr) {
    let uniqueElements = [];

    arr.forEach(element => {
        if (element.includes() = false) {
            uniqueElements.push(element);
        }
    }); 

    return uniqueElements;
}  

console.log(unique(strings));
