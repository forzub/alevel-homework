{
console.log("task - 1");
console.log(`1. Написать функцию bindFunc, которая принимает в себя 2 + аргументов 
(Точно должна принять 2 аргумента, а дальше сколько угодно).
1 аргумент - какая-то функция
2 аргумент - значение контекста
3 + ... аргументы - любое кол-во аргументов
Эта функция, должна устанавливать контекст для функции, которая в первом аргументе, 
и возвращать эту функцию с новым контекстом.
Сам контекст, который мы хотим установить, находиться во втором аргументе`);

let output_arr = [1,3,4,5,7,8,9,]

function bindFunc(func,context,...arg){
    return func.call(context, arg);
}

    function print_arg(...args){
        let printing_els = this.reduce((str, current) => '' + str + ' ' + current);
        console.log(printing_els);
    }
bindFunc(print_arg, output_arr, output_arr);

}

// ----------------------------------------------------------------------- 
{
console.log("task - 2");
console.log(`2. Написать функцию, которая не принимает никаких аргументов. 
В теле функции написать логику для нахождения суммы значений 
любого количества ключей (значения ключей должны быть больше нуля) 
из переданного контекста.
Обращаться к objectA напрямую нельзя`);

const objectA = {
    a: 1,
    b: 2,
    c: 3,
   }

   const func = function() {
       let sum = 0;
       let keys_arr = [...Object.keys(this)];
       let response =`BAD ARGUMENTS`;


       if(keys_arr.length){
            for(let i of keys_arr){
                sum += this[i];
            }
        }
        response = `sum = ${sum}`; 
        return console.log(response);
   }

func.call(objectA);
}
  
// -----------------------------------------------------------------------
{
console.log("task - 3");
console.log(`3. Написать функцию, которая возвращает новый массив, 
в котором должны быть только четные числа, которые больше двуx и меньше 10. 
Новый массив будет состоять из значений ключа values из контекста, 
если такого ключа нет, то выводим сообщение "Не найдено".
Обращаться к valObject0 напрямую нельзя :)
Если хотите использовать map, то внутри map this всегда равен глобальному объекту. 
Чтобы это поменять передаем нужное значение this во второй аргумент map -
arr.map(() => {}, this);`);

const valObject0 = { 
                    values: [1, '2', 4, 8, '8',  3, 10, null, false],
                    };

    function getNewArray() {
        let response = 'Не найдено';
 
            if('values' in this){
                response = this['values'].filter((curval)=> (typeof curval === 'number') &&  (curval > 2) && (curval < 10) && ((curval % 2) === 0));
            }
               
        return response;
       };

let sort_arr = getNewArray.bind(valObject0)();
console.log(sort_arr);
}

// -----------------------------------------------------------------------
{
    console.log("task - скобки");
    let str = "((()((())()()((()()()(()())()()()()())((())))(((()()()()())()()()()))(()))";
    let round_brackets = 0;
    let str1 = "";
    let str2 = "";

    for(let i = 0; i < str.length; i++){
        
        if(round_brackets < 0){break;}

        if(str[i] === "("){ 
            round_brackets++;
            str1 += "(";
        }
        
        if(str[i] === ")"){
            round_brackets--;
            str2 += ")";
        } 

    }

    console.log(`round_brackets = ${round_brackets}`);
    console.log(`( = ${str1}`);
    console.log(`) = ${str2}`);

}    
