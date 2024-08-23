/* Задание 2
Запросом на сервер по url https://jsonplaceholder.typicode.com/todos достать задачи.
Отобразить первые 20 задач списком ul на странице. Содержимое каждого li - поле title объекта задачи. 
*/

let ulList = document.querySelector('.list');

let xhr = new XMLHttpRequest();

const createdLi = (item) => {
    const li = document.createElement('li');
    li.textContent = item.title;
    return li;
};

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');

xhr.send();

xhr.onload = function() {
    let tasksArray = JSON.parse(xhr.response);

    tasksArray.forEach((item, index) => {
        if(index < 20){
            ulList.append(createdLi(item));
        }
    });
};
