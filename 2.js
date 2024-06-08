/*  Задание 1
Создать произвольную переменную, присвоить ей значение. 
1) C помощью if написать условие: если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”. 
2) Решите задачу с помощью тернарного оператора 
*/
 
let a = 'hidden';

if(a == 'hidden'){
    a = 'visible'
} else{
    a = 'hidden'
}
console.log(a);


a = 'hidden' ? 'visible' : 'hidden';

console.log(a);



/* Задание 2
Создать переменную и присвоить ей число.
Записать условие:
- если переменная равна нулю, присвоить ей 1;
- если меньше нуля - строку “less then zero”;
- если больше нуля - используя оператор “присваивание”, переменную умножить на 10 (использовать краткую запись).
*/

let num = 3;

if(num == 0){
    num = 1
} else if (num < 0){
    num = 'less then zero'
} else if (num > 0){
    num *= 10
}

console.log(num);



/* Задание 3
Запросите у пользователя число и запишите его в переменную. (Не забывайте, что от пользователя мы всегда получаем строку).
Создайте переменную-результат и присвойте ей значение: если введенное пользователем число меньше 5, то результат будет '0', если больше -  '1'. Выведите результат в консоль.
Выполните это задание, используя тернарный оператор (: ?)
*/

let number = Number(prompt());

let result = (number < 5) ? 0 : 1;

console.log(result)    



/* Задание 4
Попросить пользователя ввести одно число, следом - второе число.
Вывести в консоль максимальное из чисел (наибольшее) с текстом: Большее число: 7 (вместо 7 будет максимальное число из введенных пользователем).
* предусмотреть вариант ввода одинаковых чисел. 
*/

let number1 = Number(prompt());
let number2 = Number(prompt());

if(number1 < number2){
    console.log('Большее число: ' + number2)
} else if(number1 > number2){
    console.log('Большее число: ' + number1)
} else if(number1 == number2){
    console.log('Числа равны')
}



/* Задание 5
Определить, является ли введенное пользователем число num1 кратным введенному числу num2. Обе переменные запрашиваем у пользователя, ответ выводим в консоль. 
*/

let num1 = Number(prompt());
let num2 = Number(prompt());

if(num1 % num2 > 0){
    console.log('Число не кратное')
} else if(num1 % num2 == 0){
    console.log('Число кратное')
}



/* Задание 6
Запросить у пользователя средний балл, записать в переменную.
Если средний балл 1-4 - вывести в консоль "Двоечник, иди учись!", если 5-8 - "Неплохо, но давай еще поднажмем!", если 9-10 - "Ого, да ты настоящий отличник!" (можно другие фразы - по желанию).
*/

let mark = Number(prompt('Введите свой средний балл:'));

if(mark <= 4){
    console.log('Двоечник, иди учись!')
} else if(mark <= 8){
    console.log('Неплохо, но давай ещё поднажмём!')
} else if(mark >= 9){
    console.log('Ого, да ты настоящий отличник!')
}



/* Задание 7
Запросить у пользователя ответы на 2 вопроса:
- балл за экзамен (от 0 до 100)
- количество выполненных проектов (от 0 и больше)
Вывести в консоль общий выпускной балл в соответствии с этими значениями:
- 100, если балл за экзамен более 90 или количество проектов более 10.
- 90, если балл за экзамен более 75 и количество проектов не менее 5.
- 75, если балл за экзамен более 50 и количество проектов не менее 2.
- 0 во всех других случаях. 
*/

let point = Number(prompt('Введите балл за экзамен (от 0 до 100):'));
let project = Number(prompt('Введите количество выполненных проектов (от 0 и больше):'));

if(point > 90 || project > 10){
    console.log('Общий выпускной балл - 100')
} else if(point > 75 && project >= 5){
    console.log('Общий выпускной балл - 90')
} else if(point > 50 && project >= 2){
    console.log('Общий выпускной балл - 75')
} else{
    console.log('Общий выпускной балл - 0')
}



/* Задание 8
День аренды автомобиля стоит $40. При аренде на 7 или больше дней вы получаете общую итоговую скидку $50. 
Если вы арендуете авто на 3 или более дней, ваша общая скидка составит $20.
Количество дней, на которые нужно арендовать авто, запрашиваются с помощью prompt. 
Напишите программу, рассчитывающую общую стоимость аренды на запрашиваемое количество дней.
*/
  
let rent = 40;
let sale1 = 50;
let sale2 = 20;
let day = Number(prompt('Введите количество дней, на которое нужно арендовать авто:'))
let sum = day * rent - sale1;
let sum2 = day * rent - sale2;
let sum3 = day * rent;

if(day >= 7){
    alert('Общая стоимость аренды на ' + day + ' дней составит: ' + '$' + sum)
} else if(day >= 3){
    alert('Общая стоимость аренды на ' + day + ' дней составит: ' + '$' + sum2)
} else if(day <= 2){
    alert('Общая стоимость аренды на ' + day + ' дней составит: ' + '$' + sum3)
}