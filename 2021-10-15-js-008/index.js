// https://github.com/forzub/homework

{
/*
С помощью следующего кода считать и вывести информацию о Люке Скайвокере
Напишите функцию для отображения любого JSON в форме таблицы.
Если одно из полей строка или массив.
Если строки или строка содержат в себе https://swapi.dev/api/
То выводить вместо текста строки кнопку, при нажатии на которую:
делается fetch данных по этой ссылке
функция отображения запускает сама себя(рекурсивно) для отображения новых данных в том же элементе.
*/
console.log(`1.`);

fetch('https://swapi.dev/api/people/1/')
  .then(res =>  res.json(),error => console.error(error))
  .then(luke => {output_request('responce_content',luke);});


const output_request = (elem,responce)=>{
    let responce_dom = document.getElementById(elem);
        responce_dom.innerHTML = "<table class='request_info'><tbody id='responce_tab'></tbody></table>";
    let responce_tab = document.getElementById("responce_tab");
    if (Object.keys(responce).length == 0){
        responce_tab.innerText = `Объект пуст`;
        return;
    }
    
    for(key in responce){
        let tr = document.createElement("tr");
            tr.className = "tr";
        let td_key = document.createElement("td");
            td_key.className = "td_key";
            td_key.innerText = key;
            tr.append(td_key);
        let td_val = document.createElement("td");
            td_val.className = "td_val";
        if(Array.isArray(responce[key])){
            if(responce[key].length > 0){
                responce[key].map((el)=>{
                    let analizator = "" + el;
                    if(analizator.indexOf('http') !== -1){
                        td_val.append(but_creator(el));
                    }else{
                        let div = document.createElement("div");
                        div.className = "td-div";
                        div.innerText = el;
                        td_val.append(div);
                    }    
                });
            }
       }else{

            let analizator = "" + responce[key];
            if(analizator.indexOf('http') !== -1){
                td_val.append(but_creator(analizator));
            }else{
                td_val.innerText = responce[key];
            }            
        }
        tr.append(td_val);
        responce_tab.append(tr); 
    }
    //console.log(responce);  
}

const but_creator = (link)=>{
    let but = document.createElement("button");
    but.className = "link_button";
    but.onclick = ()=>request_it(link);
    but.innerText = "перейти";
    get_name(link, but);
    return but;
}

const request_it = (path) => {
    fetch(path)
    .then(res =>  res.json(),error => console.error(error))
    .then(luke => {output_request('responce_content',luke);}); 
}

const get_name = (path, el)=>{
    fetch(path)
    .then(res =>  res.json(),error => console.error(error))
    .then(luke => {
        el.innerText = "перейти";
        if("name" in luke){
            el.innerText = luke.name + ": перейти";
        }
        if("title" in luke){
            el.innerText = luke.title + ": перейти";
        }        
    });
}

}

//------------------------------------------------------------------------------------
{
/*
Используя XMLHTTPRequest, напишите промисифицированную функцию myfetch, т. е. функцию, 
которая возвращает промис, и работает схоже с fetch, только в один этап
myfetch('https://swapi.dev/api/people/1/')
.then(luke => console.log(luke))
Функция myfetch ожидает что ответ будет в формате JSON (используйте JSON.parse(response.text)) 
В случае ошибок (request.onerror или request.status не 200) не забудьте вызывать reject
*/    
console.log(`2.`);

function myfetch(url){
    return new Promise(function (resolve, reject){
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = () => {
            if (xhr.status != 200){
                reject(`Ошибка ${xhr.status}: ${xhr.statusText}`);
            }else{
                let responce_obj = JSON.parse(xhr.responseText);
                resolve(responce_obj);
            }
        }
            
        xhr.onerror = () => reject(`Ошибка, запрос не удался. ${xhr.statusText}`);
        xhr.send();    
    });
}


myfetch('https://swapi.dev/api/people/1/')
  .then(luke => console.log(luke), error=>console.error(error));

}

//------------------------------------------------------------------------------------
{
/*
Используя Promise.race запустите запрос на API (myfetch) параллельно с delay. 
По результату определите, что было быстрее, запрос по сети, или определенный интервал времени. 
Подберите параметр delay так, что бы результат был неизвестен изначально, 
и при многократных запусках быстрее был то delay, то myfetch.
*/    
console.log(`3.`);

let promise2 = myfetch('https://swapi.dev/api/people/1/')
  .then(luke => luke, error=>console.error(error));


let promise1 = delay(Math.floor(900*Math.random()))
.then(() => "Hello!");

Promise.race([promise1, promise2]).then((value) => {
    console.log(`value = `,value);    
  });


  function delay(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });
  }

}
