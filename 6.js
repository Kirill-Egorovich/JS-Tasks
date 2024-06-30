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

// Не работает
function checkSpam(str) {
    let lowerStr = str.toLoverCase();
    return lowerStr.includes('badword') || lowerStr.includes('xxx');
}

console.log(checkSpam('This is a badword'));
