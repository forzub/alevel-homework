// https://github.com/forzub/homework


/*
{func: 'addMessage', nick: "Anon", message: 'Я не умею копипастить в консоль, зато умею жать красную кнопку.'}

addMessage
{func: "addMessage", nick: 'msg', message: 'msg'}
В ответ вы получите так же объект:
{nextMessageId: 100500}

getMessages
Позволяет прочесть часть массива сообщений от отпределенного индекса и до конца. 
Используется для последовательной дочитки новых сообщений.
{func: "getMessages", messageId: 0}
При значении 0 в messageId сервер отдаст сообщения от 0 до конца

Делаем Stage 3 в setInterval для периодической проверки сообщений (раз в 2 -5 секунд)
*/
function my_global(){
    let http = '';
    let nick = '';
    let isStart = true;
    let isScroll = false;
    let mess_count = 0;
    let mess_history_showed = 0;
    let prev_history_showed = 0;
    let steep_history_show = 50;
    let interval = 5000;

    return {
        sethttp: (val)=>http = val,
        setnick: (val)=>nick = val,
        set_isStart: (val)=>isStart = val,
        set_isScroll: (val)=>isScroll = val,
        set_mess_count: (val)=>mess_count = val,
        set_mess_history_showed: (val)=>mess_history_showed = val,
        set_prev_history_showed: (val)=>prev_history_showed = val,
                
        gethttp: ()=>http,
        getnick: ()=>nick,
        get_isStart: ()=>isStart,
        get_isScroll: ()=>isScroll,
        get_mess_count: ()=>mess_count,
        get_mess_history_showed: ()=>mess_history_showed,
        get_prev_history_showed: ()=>prev_history_showed,
        get_interval: ()=>interval,
        get_steep_history_show: ()=>steep_history_show,
    }
}

const global = my_global();
//jsonPost("", {func: 'addMessage', nick: "Anon", message: 'Я не умею копипастить в консоль, зато умею жать красную кнопку.'});

window.addEventListener('load',  () => {
 let doc = document;
 let input_nick = doc.getElementById("nickname");
    input_nick.value = "Писотметрофкраснойтряпки";
    global.setnick(input_nick.value);
    global.sethttp("http://students.a-level.com.ua:10012");
    getMessages(0);      
});

//------------------------------------------------------------------------------------
/*async function getMessages(id){

    let beep = document.getElementById("beep");
    //let promise = jsonPost(global.gethttp(), {func: "getMessages", messageId: id});
    let promise = jsonPost_fetch(global.gethttp(), {func: "getMessages", messageId: id});
    beep.classList.add("on");

    // let result = await promise.then((result)=>result,(error)=>console.error("Error is: ", error));
    let result = await promise.then((result)=>result.json(),(error)=>console.error("Error is: ", error));
    // console.log(result);

    beep.classList.remove("on");
    global.set_mess_count(result.nextMessageId);
    

    if(global.get_isStart()){
        global.set_isStart(false);
        global.set_mess_history_showed(0);

        if(result.nextMessageId > global.get_steep_history_show()){
            global.set_mess_history_showed( result.nextMessageId - global.get_steep_history_show() );
            let show_mess_arr = result.data.slice(global.get_mess_history_showed());
            // console.log(show_mess_arr);
            show_chat(show_mess_arr);
            checkLoop.start();            
        } 
    }else{
        // console.log(result.data);
        if(result.data.length > 0){
            show_chat(result.data);
            global.set_mess_count(result.nextMessageId);
        }
    }    
}*/

//------------------------------------------------------------------------------------
function getMessages(id){

    let beep = document.getElementById("beep");
    //let promise = jsonPost(global.gethttp(), {func: "getMessages", messageId: id});
    let promise = jsonPost_fetch(global.gethttp(), {func: "getMessages", messageId: id});
    beep.classList.add("on");

    
    promise.then((result)=>result.json(),(error)=>console.error("Error is: ", error))
    .then((result)=>{
        beep.classList.remove("on");
        global.set_mess_count(result.nextMessageId);

        if(global.get_isStart()){
            global.set_isStart(false);
            global.set_mess_history_showed(0);

            if(result.nextMessageId > global.get_steep_history_show()){
                global.set_mess_history_showed( result.nextMessageId - global.get_steep_history_show() );
                let show_mess_arr = result.data.slice(global.get_mess_history_showed());
                // console.log(show_mess_arr);
                show_chat(show_mess_arr);
                checkLoop.start();            
            } 
        }else{
            // console.log(result.data);
            if(result.data.length > 0){
                show_chat(result.data);
                global.set_mess_count(result.nextMessageId);
            }
        }
    });
        
}

//------------------------------------------------------------------------------------
const show_chat = (show_arr) =>{
    if(show_arr.length === 0){return;}

    let show_div = document.getElementById("message-list");
    if(global.get_isScroll()){show_div.innerHTML = '';}

    show_arr.forEach((element,key) => {
        if(element.nick.length === 0){return;}
        if(element.message.length === 0){return;}
        let elem_div = document.createElement("div");
        let elem_p = document.createElement("p");
        let elem_span_time = document.createElement("span");
        let elem_span_nick = document.createElement("span");
        let elem_span_mess = document.createElement("span");
        elem_div.className = "mess_item";
        if(key === global.get_prev_history_showed()){elem_div.id = "scroll";}
        elem_span_time.className = "mess_time_item";
        elem_span_nick.className = "mess_nick_item";
        elem_span_mess.className = "mess_mess_item";

        elem_span_time.innerText = new Date(element.timestamp).toLocaleString().slice(0,-3);
        elem_span_nick.innerText = element.nick;
        elem_span_mess.innerText = element.message;
        elem_div.append(elem_p);
        elem_p.append(elem_span_time,elem_span_nick,elem_span_mess);
        show_div.append(elem_div);
    });
    if(!global.get_isScroll()){ 
        show_div.scrollTop = show_div.scrollHeight;
    }else{
        document.getElementById("scroll").scrollIntoView();
        global.set_isScroll(false);
    }
    
}

//------------------------------------------------------------------------------------
const set_nick = () => {
    let sourse = document.getElementById("nickname");
    if(sourse.value.length > 0){
        global.setnick(sourse.value);
    }else{
        sourse.value = global.getnick();
    }
}

//------------------------------------------------------------------------------------
async function sendAndCheck(){
    let sourse = document.getElementById("message");
    if(sourse.value.length === 0){return;}
    checkLoop.stop();
    // let promise = jsonPost(global.gethttp(), {func: 'addMessage', nick: global.getnick(), message: sourse.value });
    let promise = jsonPost_fetch(global.gethttp(), {func: 'addMessage', nick: global.getnick(), message: sourse.value });  
    sourse.value = '';

    // let result = await promise.then((result)=>result,(error)=>console.error("Error is: ", error));
    let result = await promise.then((result)=>result.json(),(error)=>console.error("Error is: ", error));
    getMessages(result.nextMessageId -1);
    checkLoop.start();
}

//------------------------------------------------------------------------------------
function mycheckLoop(){
    let setinterval;
    return {
        start : ()=>{
            setinterval = setInterval(()=>{
            getMessages(global.get_mess_count());
        },
        global.get_interval());},
        stop: ()=>{clearTimeout(setinterval);}
    }    
}

const checkLoop = mycheckLoop();

//------------------------------------------------------------------------------------
document.getElementById('message-list').addEventListener('scroll',()=>{
    if(document.getElementById('message-list').scrollTop < 1){
        global.set_isScroll(true);
        let nmess = global.get_mess_history_showed();
        let steep = global.get_steep_history_show();

        if(nmess ===  0){global.set_isScroll(false); return;}
        if(nmess > steep){
            global.set_prev_history_showed(steep);
            nmess -= steep; 
        }else{
            global.set_prev_history_showed(steep- nmess);
            nmess = 0;
        }
        getMessages(nmess);
        global.set_mess_history_showed(nmess);
        console.log(global.get_prev_history_showed());
    }
});

//-----------------------------------------------------------------------


function jsonPost(url, data)
{
    return new Promise((resolve, reject) => {
        var x = new XMLHttpRequest();   
        x.onerror = () => reject(new Error('jsonPost failed'))
        //x.setRequestHeader('Content-Type', 'application/json');
        x.open("POST", url, true);
        x.send(JSON.stringify(data))

        x.onreadystatechange = () => {
            if (x.readyState == XMLHttpRequest.DONE && x.status == 200){
                resolve(JSON.parse(x.responseText))
            }
            else if (x.status != 200){
                reject(new Error('status is not 200'))
            }
        }
    });
}
//-----------------------------------------------------------------------
function jsonPost_fetch(url, data){
    let data_obj = {
        method: 'POST',
        body: JSON.stringify(data),
    };
    return fetch(url,data_obj);
}