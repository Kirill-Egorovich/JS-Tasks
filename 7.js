/* Задание 1
Примените каждый из этих методов округления к трем числам: 5.4, 5.5, 5.6:
Math.round(x)
Math.ceil(x)
Math.floor(x)
В комментариях к каждой строке напишите, как работают эти округления. 
*/

Math.round(5.4, 5.5, 5.6); // Возвращает значение числа, округлённое до ближайшего целого
console.log(Math.round(5.4, 5.5, 5.6));


Math.ceil(5.4, 5.5, 5.6); // Возвращает значение числа, округлённое к большему целому
console.log(Math.ceil(5.4, 5.5, 5.6));

Math.floor(5.4, 5.5, 5.6); // Возвращает значение числа, округлённое к меньшему целому
console.log(Math.floor(5.4, 5.5, 5.6));



/* Задание 2
Выведите в консоль фразы в 2 строки:
Сегодня 27 октября 2022 (здесь будет ваша дата) - используйте options для вывода месяца словом
19 часов 20 минут (здесь будет ваше время) - используйте шаблонную строку, в которую подставьте значения с помощью методов getHours() и getMinutes() 
*/

let now = new Date();

let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

console.log('Сегодня ' + now.toLocaleString('ru-RU', options));


let hours = now.getHours();
let minutes = now.getMinute();

console.log(`${hours} часов ${minutes} минут`);
