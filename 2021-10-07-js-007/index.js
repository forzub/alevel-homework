// https://github.com/forzub/homework

{
/*
Напишите функцию makeProfileTimer, которая служит для замера времени выполнения 
другого кода и работает следующим образом:
var timer = makeProfileTimer()
alert('Замеряем время работы этого alert');  
//некий код, время выполнения которого мы хотим измерить с высокой точностью
alert(timer()); //alert должен вывести время в микросекундах 
от выполнения makeProfileTimer до момента вызова timer(), 
// т. е. измерить время выполнения alert
Используйте performance.now()
*/
console.log(`1.`);

function makeProfileTimer(){
    let saved_time = performance.now();
    return ()=>{let delta = performance.now() - saved_time;return delta;}
}

let timer = makeProfileTimer();
// alert('Замеряем время работы этого alert');
// alert(timer());

for(let i = 0; i < 1000; i++){console.clear();console.log(i);}
console.log("");
console.log('Замеряем время работы цикла.');
console.log(timer());

}

//------------------------------------------------------------------------------------
{
/*
Напишите функцию makeSaver, которая:
var saver = makeSaver(Math.random) 

//создает функцию-хранилище результата переданной в качестве параметра функции (Math.random в примере).
//На этом этапе Math.random НЕ вызывается

var value1 = saver() //saver вызывает переданную в makeSaver функцию, запоминает результат и возвращает его
var value2 = saver() //saver в дальнейшем просто хранит результат функции, и более НЕ вызывает переданную 
//в makeSaver функцию;

value1 === value2 // всегда true
var saver2 = makeSaver(() => console.log('saved function called') || [null, undefined, false, '', 0, Math.random()][Math.ceil(Math.random()*6)])
var value3 = saver2()
var value4 = saver2()
value3 === value4 // тоже должно быть true
Таким образом makeSaver решает две задачи:
Навсегда сохраняет результат функции. Это актуально, например, для Math.random.
Действует лениво, то есть вызывает Math.random только тогда, когда результат 
действительно нужен. Если же по каким-то причинам значение не понадобится, 
то Math.random даже не будет вызван
*/    
console.log(`2.`);

function makeSaver(num){
    let saved_num = num();
    return ()=> saved_num;
}

let saver = makeSaver(Math.random);
let value1 = saver();
let value2 = saver();

console.log(``);
console.log(`saver = ${saver()}`);
console.log(`value1 = ${value1}`);
console.log(`value2 = ${value2}`);
console.log(`value1 === value2: ${value1 === value2}`)
console.log(``);

let saver2 = makeSaver(() => console.log('saved function called') || [null, undefined, false, '', 0, Math.random()][Math.ceil(Math.random()*6)]);
let value3 = saver2();
let value4 = saver2();
console.log(`saver2 = ${saver2()}`);
console.log(`value3 = ${value3}`);
console.log(`value4 = ${value4}`);
console.log(`value3 === value4: ${value3 === value4}`)

}

//------------------------------------------------------------------------------------
{
/*
Напишите код, который будет делать обратный ежесекундный отсчёт в консоли, 
используя console.log. Используйте Self Invoked Function для создания замыкания 
и setTimeout для задержки вывода. Результатом должно быть:
   5 //пауза 1 секунда
   4 //пауза 1 секунда
   3 //пауза 1 секунда
   2 //пауза 1 секунда
   1 //пауза 1 секунда
   "поехали!"
*/    
console.log(`3.`);


(function(){
    let countdown = 5;
    let zero_text = 'поехали';
    
    function counter(){
        let result = '';
        !!(countdown) ?  result = countdown : result = zero_text;
        console.log(result);
        countdown--; 

        if(countdown < 0){return;}
        timerid = setTimeout(counter,1000);               
    }
    let timerid = setTimeout(counter,1000);
})();

}
//------------------------------------------------------------------------------------
{
/*
Изучите встроенную функцию bind, и сделайте свою версию, которая позволит 
определить "значение по умолчанию" не только для первых параметров, но для любых других, 
например для степени в Math.pow:
var pow5 = myBind(Math.pow, Math, [undefined, 5]) 
// первый параметр - функция для биндинга значений по умолчанию, 
// второй - this для этой функции, третий - массив, в котором undefined означает
// параметры, которые должны передаваться при вызове,
// а другие значения являются значениями по умолчанию:

var cube = myBind(Math.pow, Math, [undefined, 3]) // cube возводит число в куб
pow5(2) // => 32, вызывает Math.pow(2,5), соотнесите с [undefined, 5]
cube(3) // => 27

var chessMin = myBind(Math.min, Math, [undefined, 4, undefined, 5,undefined, 8,undefined, 9])
chessMin(-1,-5,3,15) // вызывает Math.min(-1, 4, -5, 5, 3, 8, 15, 9), результат -5
var zeroPrompt = myBind(prompt, window, [undefined, "0"]) 

// аналогично, только теперь задается "0" как текст по умолчанию в prompt, 
// а текст приглашения пользователя задается при вызове zeroPrompt
var someNumber = zeroPrompt("Введите число")              // вызывает prompt("Введите число","0")

myBind((...params) => params.join(''), null, [undefined, 'b', undefined, undefined, 'e', 'f'])('a','c','d') === 'abcdef'
Массив, который идет третьим параметром определяет, 
какие поля должны подменяться значением по умолчанию, а какие - задаваться в последствии (undefined).
*/    
console.log(`4.`);
    
let pow5 = myBind(Math.pow, Math, [undefined, 5]);
let chessMin = myBind(Math.min, Math, [undefined, 4, undefined, 5,undefined, 8,undefined, 9]);
let zeroPrompt = myBind(prompt, window, [undefined, "0"]);


function arg_mixer(){
    let bind_arg = [...arguments[0]];
    let work_ars = [...arguments[1]];
    let index_arr = [];    
    
    if((bind_arg.length > 0) && (work_ars.length > 0)){
        bind_arg.forEach((el,i) =>{
            if(el === undefined){index_arr.push(i);}
        });
    }else{
        return 0;
    }

    if((index_arr.length > 0) && (index_arr.length === work_ars.length)){
        index_arr.forEach((el,i)=>bind_arg[el] = work_ars[i]);
    }else{
        return 0;
    }

    console.log("final args");
    console.log(bind_arg);
    return bind_arg;
}


function myBind(func, context,bindArgs){        
        return function(){
            var args = arg_mixer(bindArgs,arguments);
            if(args === 0){return "ошибки в аргументах";}
            else{
                return func.apply(context, args);
            }  
        }
}

let pow_res = pow5(4);
let min_res = chessMin(-1,-5,3,-48);
let someNumber = zeroPrompt("Введите число");

let call_res = myBind((...params) => params.join(''), null, [undefined, 'b', undefined, undefined, 'e', 'f'])('a','c','d');
let test_res = 'abcdef';

console.log(`возведение в степень 4**5 = ${pow_res}`);
console.log(`минимальное число = ${min_res}`);
console.log(`получено через prompt = ${someNumber}`);
console.log(`прямой вызов myBind = ${call_res}`);
console.log(`тестовый результат прямого вызова = ${test_res}`);


}