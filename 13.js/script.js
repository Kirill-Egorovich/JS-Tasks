/* Задание 1
Вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
Сообщение номер 1
Сообщение номер 2
Сообщение номер 3
Сообщение номер 4
Сообщение номер 5 
*/

let i = 1;

const message = setInterval(() => {
    console.log(`Сообщение номер ${i}`);
    i++
}, 2000);

setTimeout(() => {
    clearInterval(message);
}, 11000);



/* Задание 2
Сделать виджет - цифровые часы, оформить по желанию.
Вам нужно будет каждую секунду запускать функцию, которая будет создавать новый объект Date и забирать из него необходимую информацию.
*/

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}  

setInterval(updateTime, 1000);
updateTime();
