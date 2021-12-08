// https://github.com/forzub/homework


class Human {
  constructor(c_name, c_age){
    this.name = c_name;
    this.age = c_age;

    
  }
  getName = ()=>{console.log(this.name);};
  getAge = ()=>{console.log(this.age);};
  static getType = ()=>{console.log("Человек");};
  
}

class Programmer extends Human{
  constructor(c_name, c_age){
    super(c_name, c_age);
    this.job = "Programmer";

  }
  static getJob = (object)=>{console.log(object.job);};
}

class Tester  extends Human{
  constructor(c_name, c_age){
    super(c_name, c_age);
    this.job = "Tester";

  }
  static getJob = ()=>{console.log("Tester");};
}

class ITCompany {

  constructor(){
    this.create = (name, age, job)=>{
      switch (job){
        case 'Programmer':
          return new Programmer(name,age);
        case 'Tester':
          return new Tester(name,age);
        default:
          return undefined;
      }
    }
  }
}

const Company = new ITCompany();
const programmer = Company.create("Vasia",30,"Programmer");
const tester = Company.create("Kolia",18,"Tester");

console.log(Programmer.getJob(programmer));
console.log(Tester.getJob());
console.log(Tester.getType());
console.log(tester.getName());
console.log(tester.getAge());
console.log(programmer);
console.log(tester);

const lock_volwels = (obj)=>{
  const vowels = ['a','e','i','o','u'];
  for(let keys in obj){
    if(vowels.includes(keys)){
      Object.defineProperty(obj,keys,{writable : false});
    }
  }
  
 
}

const obj = {
  a: '1',
  b: '2',
  c: '3',
  e: '4',
  o: '5'
}


console.log(`исходный объект: `);
console.log(obj);

lock_volwels(obj);
console.log(`каждому - по 25`);
obj.a = 25;
obj.b = 25;
obj.c = 25;
obj.e = 25;
obj.o = 25;
console.log(`после переработки:`);
console.log(obj);