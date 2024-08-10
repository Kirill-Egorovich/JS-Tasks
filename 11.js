/* Задание 1
1) 
Задать объект с полем name. 
Задать переменную, которая будет хранить JSON упомянутого объекта. 
Задать переменную, которая будет хранить результат парсинга предыдущей переменной.

2)
Создать переменную user, в которой хранится объект. 
Записать переменную в localStorage. 
Создать переменную newUser, в которой будет храниться JS объект из localStorage. 
*/

// 1)

const object = {name: 'Peter'};
let jsonObject = JSON.stringify(object);
let parcing = JSON.parse(jsonObject);

// 2) 

const user = {name: 'Jane'};
localStorage.setItem('user', JSON.stringify(user));
const newUser = JSON.parse(localStorage.getItem('user'));
