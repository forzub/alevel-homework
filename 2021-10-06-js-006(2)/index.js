{
console.log(`
1.
Создать функцию конструктор Animal c аргументами name, age, color. 
Написать логику для того, чтобы функцию можно было вызывать как с, так и без new:
При вызове без new новый обьект все равно должен создаться`);

function Animal(name, age, colour) {
        
        if( this instanceof Animal){
            load_data(this);
        }else{
            let newobj = {};
            load_data(newobj);
            return newobj;
        } 
        
        function load_data(ref){
            ref.name = name;
            ref.age = age;
            ref.colour = colour;
        }
   }

const cat = new Animal("Hamster", 2, "Зонарный");
const dog = Animal("Sparky", 4, "Чепрачный");

console.log(cat);
console.log(dog);

}
/*
//------------------------------------------------------------------------------------
{
console.log(`
2.Создайте функцию-конструктор Calculator, который создаёт объекты с такими методами:
read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
setAction() запрашивает действие при помощи prompt, которые мы хотим сделать (+, -, / и т.д)
doAction() выполняет действие, которое юзер ввел (будет вызывать в себя методы sum, mul, min и т.д)
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств.
min() возвращает разницу введённых свойств.
другие методы можете добавит если хотите (метод для квадратного корня и т.д.)
`);

function Calculator(){
    this.xreg = 0;
    this.yreg = 0;
    this.result = 0;
    this.action_arr =  ["+","-","/","*"];
    this.action = "";

    this.read = function(){
        function set_num(text){
            let checker;
            let variable;
            function is_num_valid(num){return (!!(+num) || (+num === 0))  ? true : false; }            
            
            variable = prompt(text);
            checker = is_num_valid(variable);
            checker ? variable = +variable : variable = 0;
            return variable;
        }
        this.xreg = set_num('запрашиваю первое значение "\n"(только цифры, иначе считаю его как "0")');
        this.yreg = set_num('запрашиваю второе значение "\n"(только цифры, иначе считаю его как "0")');

    };

    this.setAction = function(){
            let variable;
            this.action = "";
            variable = prompt('укажите действие,"\n"которое хотите произвести с первым и вторым значениями"\n"[ + , - , / , * ]');

            for(let i = 0; i < this.action_arr.length; i++){
                if(variable === this.action_arr[i]){
                    this.action = variable;
                }
            }
        }   
    this.onAction = function(){
        switch(this.action){
            case this.action_arr[0]:
                this.result = this.sum();
                break;
            case this.action_arr[1]:
                this.result = this.min();
                break;
            case this.action_arr[2]:
                this.result = this.div();
                break;
            case this.action_arr[3]:
                this.result = this.mul();
                break;
            default:
                alert("использовано неизвестное действие ");
        }
    }
    this.sum = function(){return this.xreg + this.yreg;}
    this.mul = function(){return this.xreg * this.yreg;}
    this.min = function(){return this.xreg - this.yreg;}
    this.div = function(){return this.xreg / this.yreg;}
    this.show_result = function(){console.log(`результат = ${this.result}`)}
    
}

let calculator = new Calculator;

calculator.read();
calculator.setAction();
calculator.onAction();

console.log(`первое значение: ${calculator.xreg}`);
console.log(`второе значение: ${calculator.yreg}`);
console.log(`выбранное действие: ${calculator.action}`);
calculator.show_result();
}
*/
//------------------------------------------------------------------------------------
{
console.log(`
3.
Создать функцию конструктор Nums, которая принимает бесконечное множество аргументов, 
и они записываются в свойство args в виде массива
Добавить в прототип для всех объектов, которые создадим от конструктора Nums, 2 метода:
метод getSum должен вернуть сумму всех элементов (которые только целые числа) массива args
метод myFilterReverse должен отфильтровать массив и оставить только целые числа 
и развернуть массив (было [1, 2, 3] -> стало [3, 2, 1])
Метод .reverse использовать нельзя :)
только целые числа -> Number.isInteger(1); // true Number.IsInteger(1.2); // false`);

function Nums(...my_args){
    this.args = [...my_args];
    this.getSum = function(){
        return this.args.reduce((sum,current)=> Number.isInteger(current) ? sum + current : sum,0);
    };
    this.myFilterReverse = function(){
        var output = [];
        while (this.args.length) {
            output.push(this.args.pop());
        }
        return output.filter(item => Number.isInteger(item));
    }
}

const nomero = new Nums(1,2.2,5,8,12,3.5,46,1.8);
console.log(`сам объект ->`);
console.log(nomero);
console.log(`сумма целых -> ${nomero.getSum()}` );
console.log(`массив развернутых целых -> ${nomero.myFilterReverse()}`);


}
//------------------------------------------------------------------------------------
{
console.log(`
4.Есть массив [1, 1, 2, 2, 3]
Создать свой метод getUnique для любых массивов, который отфильтрует массив 
и оставит в нем только уникальные значения
Подсказка: чтобы было легче почитайте про метод .includes()
 `);

 let data_arr1 = [1, 1, 2, 2, 3];
 let data_arr2 = [10, 2, [3, 4, [3, 7, [7, 8, [9, 10]]]]];

 Array.prototype.getUnique = function(){
    let work_arr = [];
    work_arr = this.flat(Infinity);
    return work_arr.filter((item,index)=>work_arr.indexOf(item) === index);   
 }

 let result1 = data_arr1.getUnique();
 let result2 = data_arr2.getUnique();
 let result3 = [1, ,2, 7,5, 2,44,17,32, [3, 4, [5,1,32,3,44,7, 6]]].getUnique();

 console.log(result1);
 console.log(result2);
 console.log(result3);
}

//------------------------------------------------------------------------------------
{
    console.log(`
    5.Есть объект {a: 1, b: 2, c: 3, d: false, e: 0}; Нужно создать 2 метода для любых объектов:
    метод getKeySum, который найдет сумму значений всех ключей, которые true.
    метод reversKey который поменяет местави key и value (ключ и значение)
    Пример Был объект {a: 1, b: 2}.reversKey() -> стало {1: 'b', 2: 'a'}
     `);
    
    let my_obj = {a: 1, b: 2, c: 3, d: false, e: 0, false: 'd'}
    let sum = 0;
    let revers_obj = {}

     Object.prototype.getKeySum = function(){
        let val_arr = [];
        val_arr = Object.values(this);
        return val_arr.reduce((sum,item)=> !!(item) ? sum + item : sum);
     }
     Object.prototype.reversKey = function(){

        let val_arr = [];
        let new_obj = {};
        val_arr = Object.keys(this);

        for(let key in this){
            if(typeof this[key] !== "function"){
                new_obj[this[key]] = key;
            }           
        }
        return new_obj;
     }



     console.log(my_obj);

     sum = my_obj.getKeySum();
     console.log(sum);

     revers_obj = my_obj.reversKey();
     console.log(revers_obj);
    
    }