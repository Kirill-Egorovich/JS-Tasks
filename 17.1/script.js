/* Задание
Напишите асинхронную функцию, которая получает список пользователей с сервера jsonplaceholder. Выведите список пользователей на страницу.
В задании используйте синтаксис async-await и предусмотрите обработку ошибок. 
*/

let createList = async () => {
    try{
        let responce = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await responce.json();
    
        let ul = document.getElementById('list');
    
        for(let i = 0; i < data.length; i++){
            let userName = data[i].name;
    
            let li = document.createElement('li');
            li.textContent = userName;
            ul.appendChild(li);
        }
    } catch(error) {
        alert('Возникла ошибка: ' + error);
    }
};

createList()
