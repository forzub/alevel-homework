let hw1_arr = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
let hw2_str = 'Вася;Петя;Вова;Олег';
const hw4_arr = ['яблоко', 'ананас', 'груша'];
const fruitsInUpperCase = hw4_arr.map((e)=>{return e.toUpperCase();});
const val = getSum(1, 2, 3, 4);
let hw7_arr = [1, 'hello', 2, 3, 4, '5', '6', 7, null];
const numberArray = hw7_arr.filter(function (e){return typeof e == 'number'});


console.log(hw1_arr.join('|'));
console.log(hw2_str.split(';'));
hello2("Василий");
hello2();

console.log(fruitsInUpperCase);
console.log(addOneForAll(1, 2, 3, 4,1,2,3,4,5));
console.log(val);
console.log(numberArray);
arrayTesting('', 0, NaN, null, undefined, false );
arrayTesting('', 1, NaN, null, undefined, false );
console.log('----- -почему-то не сработало.. ----------');
arrayTesting_2('', 0, NaN, null, undefined, false );
arrayTesting_2('', 1, NaN, null, undefined, false );




function hello2(uname = 'гость'){
    console.log(`Привет, ${uname}`);
}


function addOneForAll(...myargs){
    let new_arr = [];
    myargs.forEach((element,key) => {
        new_arr.push(element + 1);
    });
    return new_arr;
}

function getSum(...myargs){
    let sum_val = 0;
    myargs.forEach((element) => {
        sum_val += element;
    });
    return sum_val;
}

function arrayTesting(...myargs){
    let isTrue = false;
    myargs.forEach((e) => {
        if(e){isTrue = true;}
    });
    return (isTrue) ? console.log(`Нашли true значение`) : console.log(`Ничего нет`);
}

// -------  почему-то не сработало  ----------------
function arrayTesting_2(...myargs){
    myargs.forEach((e) => {
        if(e){return console.log(`Нашли true значение`);}
    });
    return console.log(`Ничего нет`);
}






