//Запросите у пользователя его имя. Выведите в окошке фразу: Привет, Николай! (вместо Николай должно показываться имя, которое ввёл пользователь)

let user = prompt('Введите ваше имя');
alert('Привет, ' + user + '!');



//Запросите у пользователя число. Затем запросите степень, в которую нужно возвести это число. Выведите в консоль результат.

let number = prompt('Введите число');
let number2 = prompt('Введите степень');
console.log(number ** number2);