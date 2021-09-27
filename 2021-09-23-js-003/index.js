// HomeWork:
// 1.
// 1. Получить от юзера число.
// 2. Получить сумму квадаров всех чисел от 1 до числа, которое ввел юзер.

console.log(`task 1` );

let user_number;
let sum_of_squares = 0;

user_number = +prompt("введите целое число:");
if(!!user_number){
    for(let i = 1; i <= user_number; i++){
        sum_of_squares += i ** 2;
    }
}else{
        console.log("введено \"0\" или не число");
    }   
console.log(`Sum of squares = ${sum_of_squares} \n\n` );


// 2. 
// Есть массив [3, 5, 12, 9, 23, 93, 17]
// 1. Отфильтровать его так, чтобы остались только те числа, которые больше 2 и меньше 20. 
// 2. Получить их сумму.
console.log(`task 2` );

let array_to_be_sorted = [3, 5, 12, 9, 23, 93, 17];
let sum_array_items = 0;

array_to_be_sorted.sort((a, b) => a - b);
console.log(array_to_be_sorted);

for(let arr_item of array_to_be_sorted){
    if(arr_item > 2){
        if(arr_item >= 20){
            break;
        }
        console.log(`arr_itms = ${arr_item}`);
        sum_array_items += arr_item;
    }
}

// console.log(`Sum of array items = ${sum_array_items} \n\n` );

// 3.
// 1. Дан массив [[1, 6, 3, '6'], [10, 15, 13, '10']]. 
// Найти сумму элементов, которые являются числами и которые кратны двум
console.log(`task 3` );

let given_array = [[1, 6, 3, '6'], [10, 15, 13, '10']];
let summ = 0;

for(let elements of given_array){
    if(typeof elements === 'object'){
        for(let sub_elements of elements){
            if(typeof sub_elements === 'number'){
                summ += sub_elements;
            }
        }
    }else{
        if(typeof elements === 'number'){
            summ += elements;
        }
    }
}

console.log(`fin sum = ${summ}`);


// 4.
// Написать функцию, которая устанавливает новые свойства в объект.
// 1. Функция принимает в себя 3 аргумента - key, value, obj
//      key - свойство, которое хотим добавить. Принимаем это от юзера.
//      value - значение свойства. Принимаем это от юзера.
//      obj - объект, в который хотим добавить новое свойство.
// 2. Если юзер ввел ключ, который уже есть в объекте, то выводим сообщение - "Уже есть" 
// 3. Если ключа нет, то устанавливаем его в объект.
console.log(`task 4` );

const test_subject = {}
let user_wants_key;
let user_wants_val;
let check_add_key;

check_add_key = (key,val,obj) => {
    let isExist = false;

    for(let obj_key in obj){
        if(key === obj_key){
            isExist = true;
            console.log(`Уже есть`);
            break;
        }
    }
    if(!isExist){
        obj[key] = val;
        // console.log("обновленный объект" + obj.toString());
    }
}


while(true){

    user_wants_key = prompt(`введите название поля (отмена, цифра или ничего, если - закончить)`);

    if((!user_wants_key) || (!!+user_wants_key)){
        console.log(`завершено юзером`);
        break;
    }

    user_wants_val = prompt(`введите значение поля \"${user_wants_key}\" (отмена или ничего, если - закончить)`);
    if(!user_wants_val) {
        console.log(`завершено юзером`);
        break;
    }

    check_add_key(user_wants_key, user_wants_val, test_subject);
    
}

for(let key in test_subject){
    console.log(`${key} : ${test_subject[key]}`);
}




