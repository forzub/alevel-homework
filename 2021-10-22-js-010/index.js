// https://github.com/forzub/homework


const global = {
  main_red : document.getElementById("main_trafic-red"),
  main_yellow : document.getElementById("main_trafic-yellow"),
  main_green : document.getElementById("main_trafic-green"),

  first_red : document.getElementById("first_trafic-red"),
  first_yellow : document.getElementById("first_trafic-yellow"),
  first_green : document.getElementById("first_trafic-green"),

  second_red : document.getElementById("trafic-red"),
  second_green : document.getElementById("trafic-green"),
  button : document.getElementById("button"),
  level_of_insolence : 5000,
  isSecondReady: true
}

//-------------------------------------------------
const delay = (elem,ms) => new Promise((ok) => {
  
  elem.classList.add("on");
  setTimeout(() => ok(elem), ms);
  }).then((elem) => {
  elem.classList.remove("on");
});

//-------------------------------------------------
async function trafficLight(){
  while (true){          
      await delay(global.main_green,3000);
      await delay(global.main_yellow, 2000);          
      await delay(global.main_red,3000);
      await delay(global.main_yellow, 2000);
  }
}

//-------------------------------------------------
async function domEventPromise(element, eventName){ 
  const resolver = (resolve, event)=> resolve(event);
    
  return new Promise((resolve) => { 
      element.classList.add("active");
      element.addEventListener(eventName, (event)=>{
            resolver(resolve,event);
            });
      }).then((event)=>{
          element.removeEventListener(eventName, resolver);
          element.classList.remove("active");
          return event;
      });
}

//-------------------------------------------------
const delay_blink = (elem,ms) => new Promise((ok) => {
  setTimeout(() => ok(elem), ms);
  });
//.then((elem) => {elem.toggle("on");})
//-------------------------------------------------


//-------------------------------------------------
async function first_trafficLight(){
  let isFirstStart = false;
  let isButActive = true;
  let first_promise;
  let second_promise;
  while(true){
      
      if(!isFirstStart){
        first_promise = delay_blink(global.first_yellow,800);
        if(isButActive){second_promise = domEventPromise(global.button, 'click');}
        else{second_promise = null;}
        
        let arr = [];
        arr.push(first_promise);
        if(isButActive){arr.push(second_promise);}

        let fin_promise = Promise.race(arr);
      
        await fin_promise.then( value =>{
            if(value.target){
              isFirstStart = true;
          }else{
              value.classList.toggle("on");
            }
        });
      } 

    if(isFirstStart){
            console.log("but-on2");
            await delay(global.first_yellow,3000);
            global.second_red.classList.remove("on");
            global.second_green.classList.add("on");
            await delay(global.first_red,3000);
            global.second_red.classList.add("on");
            global.second_green.classList.remove("on");
            
            isButActive = false;
            setTimeout(()=> {isButActive = true} ,4000);
            isFirstStart = false;
            
        }

  }
}
//-------------------------------------------------
const delay2 = ms => new Promise(ok => setTimeout(() => ok(ms), ms));


//global.first_green.add("on");
trafficLight();
first_trafficLight();
      

//-------------------------------------------------
async function speedtest(getPromise, count, parallel = 1){

  //console.log(getPromise().then((res)=>console.log(res)));
  console.log(count);
  console.log(parallel);

  let promises_arr = [];
  let start_time = performance.now();

  for(let i = 0; i < count; i++){
    for(let j = 0; j < parallel; j++){
      promises_arr.push(getPromise());
    }
  }
  let count_time = performance.now();
  
  let finish = Promise.all(promises_arr);
  await finish;
    
  let promises_time = performance.now();
    
    return {
      duration : (count_time - start_time), //общую длительность работы цикла
      querySpeed : 1000 / (count_time - start_time) / (count * parallel), //реальное средняя скорость запроса
      queryDuration : (count_time - start_time) / (count * parallel), //реальное среднее время запроса (отталкиваясь от count и времени работы цикла).
      parallelSpeed : 1000 / (promises_time - start_time) / (count * parallel),  //скорость в запросах в миллисекунду
      parallelDuration : (promises_time - start_time) / (count * parallel), //среднее время обработки запроса параллельно (за какое время исполнилось parallel*count промисов),
      }
     
  }

//-------------------------------------------------  
speedtest(() => delay2(1000), 10, 10 ).then(result => console.log(result));
speedtest(() => fetch('http://swapi.dev/api/people/1').then(res => res.json()), 10, 5).then(result => console.log(result));




// async function trafficLight(){
//     while (true){
//         global.main_yellow.remove("on");
//         global.main_green.add("on");
        
//         await delay(5000);
//         global.main_green.remove("on");
//         global.main_yellow.add("on");
        
//         await delay(1000);
//         global.main_yellow.remove("on");
//         global.main_red.add("on");
        
//         await delay(5000);
//         global.main_red.remove("on");
//         global.main_yellow.add("on");

//         await delay(1000);
//     }
// }
//-------------------------------------------------