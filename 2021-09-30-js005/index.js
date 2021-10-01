{
console.log(`
1.
Дан объект с городами и странами. Написать функцию getCity. Эта функция (getCity) должна вернуть новый массив, 
элементы которого будут преобразованы в данный формат: <Столица> - это <Страна>.
Доступ к объекту может быть любым (через контекст, напрямую и т.д.) Можно использовать Object.entries метод )`);

const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};


function get_city(citys_object){
    let arr_city = [];

    for (let key of Object.keys(citys_object)) {
        arr_city.push(`${key} - это ${citys_object[key]}`);
      }
    
    return arr_city;
}

let finish_arr = get_city(citiesAndCountries);
console.log(finish_arr);

}

//------------------------------------------------------------------------------------
{
console.log(`
2.
Cоздать объект с названиями дней недели. Где ключами будут ru и en, a значением свойства ru 
будет массив с названиями дней недели на русском, а en - на английском. После написать функцию которая 
будет выводить в консоль название дня недели пользуясь выше созданным объектом (доступ к объекту можно 
получить напрямую). Все дни недели начинаются с 1 и заканичаются цифрой 7 (1- понедельник, 7 - воскресенье).
Функция принимает в аргументы 2 параметра: lang - название языка дня недели; day - число дня недели
Можно вспомнить про метод indexOf(). А может можно и без него :)`);

    const namesOfDays = {
        ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг','Пятница','Суббота', 'Воскресенье'],
        en: ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday' , 'Saturday' ,'Sunday'],
    }

    function getNameOfDay(lang, datNumber, day_source){
        
        if(!(lang in day_source)) {return `язык '${lang}' не найден / language '${lang}' not found`;}
        if((datNumber < 1) || (datNumber > 7)) {return "неверный индекс дня"; }
        
        if(!!(day_source[lang]) && (day_source[lang].length > 0)){
            return day_source[lang][--datNumber];
        }else{
            return "массив не найден";
        } 

    }
    
    let day_txt = getNameOfDay('en', 7, namesOfDays); console.log(day_txt);
    day_txt = getNameOfDay('en', 3, namesOfDays); console.log(day_txt);
    day_txt = getNameOfDay('ru', 1, namesOfDays); console.log(day_txt);
    day_txt = getNameOfDay('ry', 4, namesOfDays); console.log(day_txt);
    day_txt = getNameOfDay('en', 0, namesOfDays); console.log(day_txt);
}

//------------------------------------------------------------------------------------
{
console.log(`
3.
Написать универсальную функцию setProto, которая принимает 
в себя 2 аргумента (currentObj, protoObj). Функция должна 
устанавливать прототип (protoObj) для currentObj. 
То есть после вызова функции мы должны получить результат:`);

    const person = {
        name: 'Vlad'
    };

    const person1 = {
        age: 1
    };

    let set_prototype = (currentObj, protoObj) => currentObj.__proto__ = protoObj;
    
    set_prototype(person1,person);
    console.log(person1);
    console.log(person1.age);
    console.log(person1.name);
}
//------------------------------------------------------------------------------------
{
console.log(`
4.
Создать базовый объек person. Этот объект должен выступать 
в роли прототипа для объекта person1.   
В объекте person должны быть такие методы:

- метод для установки имени и возвраста (setName, setAge)
 -метод для получения имени и возвраста (getName, getAge)
 -метод для валидации возраста (ageValidation)
 
Метод ageValidation вызывается при вывозе метода setAge (то есть внутри метода setAge). 
Метод ageValidation должен как-то проверить возраст, который мы вводим в setAge. 
Если возраст, который мы ввели, меньше 18, то записываем в age слово 'isvalid_age', 
а есть введенный возраст больше 18, то вписываем в age это значение.
ageValidation только проверяет данные, он ничего не записывает (в ageValidation не должно 
быть this.age = age)
 `);

 let person = {
     setName: function(set_name){this.name = set_name;},
     setAge: function(set_age){this.age = this.ageValidation(set_age);},
     getName: function(){return this.name;},
     getAge: function(){return this.age;},
     ageValidation: function(isvalid_age){return (isvalid_age < 18) ? "isvalid_age" : isvalid_age; },

 };

 let person_Ann = {};
    person_Ann.__proto__ = person;
    person_Ann.setName('Ann');
    person_Ann.setAge(23);

 let person_Vas = {};
    person_Vas.__proto__ = person;
    person_Vas.setName('Vasya');
    person_Vas.setAge(5);

    console.log(`Имя персонилия - ${person_Ann.getName()}`);
    console.log(`Валидный возраст - ${person_Ann.getAge()}`);
    console.log(`Имя персонилия - ${person_Vas.getName()}`);
    console.log(`Валидный возраст - ${person_Vas.getAge()}`);

}