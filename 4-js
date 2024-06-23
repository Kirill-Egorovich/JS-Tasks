/* Задание 1
Перепишите код, заменив цикл for на while, без изменения поведения цикла.
    for (let i = 0; i < 3; i++){
        alert(`number${i}!`);
    }  
*/

let i = 0;
while(i < 3){
    alert(`number${i}!`);
    i += 1;
}



/* Задание 2
Перепишите код с использованием тернарного оператора
    let country = 'Sweden';
    let access;
    if (country == 'Sweden') {
    access = true;
    } else{
    access = false;
}
*/

let country = 'Sweden';
let access;

country == 'Sweden' ? access = 'true' : access = 'false';

console.log(access);



/* Задание 3
Дан массив логических значений (true/false). 
Например: const roles = [true, false, false, true, false]. Каждое значение обозначает админ (true) или пользователь (false).
Из этого массива с помощью цикла сформировать массив объектов - roles, такой же длины, как и заданный массив.
У каждого объекта должно быть одно поле, role, которое равно admin, если значение в заданном массиве - true, и user, если значение в заданном массиве - false.
Т.е. из
    [true, false, false]
должно получиться
    [{ role: 'admin' }, { role: 'user' }, { role: 'user' } ]
*/    

const roles = ['true', 'false', 'false', 'true', 'false'];
const newRoles = [];

for (let i = 0; i < roles.length; i++) {
    const role = roles[i] == 'true' ? 'admin' : 'user';
    newRoles.push({role: role});
}

console.log(newRoles);
