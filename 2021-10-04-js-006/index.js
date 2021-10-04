{
console.log(`1. Сделать таблицу умножения, используя DOM createElement и innerText. 
Создайте таблицу, вложенные строки и ячейки в циклах.
Подсветить ячейку.
Подсветить строку и столбец`);

let x_cells = 0;
let y_cells = 0;



function set_input_number(elem){
        let input_num = elem.value;

        if(is_number_valid(input_num)){
            if((+input_num < 0) || (+input_num > 9)){
                system_log("введено слишком большое или отрицательное число");
                elem.value = 0;
            }
        }
        else{
            system_log("введено \"0\" или \"не число\"");
            elem.value = 0;
        }
        multiply_tab_build();
    }

function multiply_tab_build(){
        let doc = document;
        let n_row = doc.getElementById("x_cells").value;
        let n_col = doc.getElementById("y_cells").value;
        let tbody = doc.createElement("tbody");
        let targ_tab = doc.getElementById("table_multiply");
        targ_tab.innerHTML = "";
        
        if(!(+n_row) || !(+n_col)){
            system_log("нулевые длины");
            return;
        }

        for(let i = 0; i <= n_row; i++){
            let row = doc.createElement('tr');
            for(let j = 0; j <= n_col; j++){
                let col = doc.createElement('td');
                if(j === 0){
                    col.innerText = i;
                }else{
                    if(i === 0){col.innerText = (i+1) * j;}
                    else{
                        col.innerText = i * j; 
                    } 
                }
                col.onmouseenter = function(elem){this.classList.add("hovered");};
                col.onmouseleave = function(elem){
                    let class_cleaner;
                    class_cleaner = doc.getElementsByTagName("td");
                    Array.prototype.forEach.call(class_cleaner,el=>el.className = '');
                    class_cleaner = doc.getElementsByTagName("tr");
                    Array.prototype.forEach.call(class_cleaner,el=>el.className = '');
                };
                col.onclick = function(elem){
                    let elem_col_index = this.cellIndex;
                    let parent_element = this.parentNode;
                    let class_browser;

                    if((elem_col_index === 0) || (parent_element.rowIndex === 0)){return;}

                    parent_element.classList.add("click_selected");                
                    class_browser = doc.getElementsByTagName("tr");
                    Array.prototype.forEach.call(class_browser, el=>{
                        let td_elem = el.querySelector('td:nth-child(' + (elem_col_index + 1) + ')');
                        td_elem.classList.add("click_selected");
                    });
                }
                row.append(col);
            }
            tbody.append(row);
        }
        targ_tab.append(tbody);
    }
}
//==============================================================

{
let doc = document;    
let input_simply_inA = doc.getElementById("calk-simplystyle-inA");
let input_simply_inB = doc.getElementById("calk-simplystyle-inB");
let input_button = doc.getElementById("calk-sum-its");
let calk_simply_result = doc.getElementById("calk-simplystyle-result");
let input_live_inA = doc.getElementById("calk-livestyle-inA");
let input_live_inB = doc.getElementById("calk-livestyle-inB");
let calk_live_result = doc.getElementById("calk-livestyle-result");

input_button.onclick = function(){
    calk_simply_result.innerText = +input_simply_inA.value + +input_simply_inB.value;
};

input_live_inA.oninput = function(){calk_live_sum();}
input_live_inB.oninput = function(){calk_live_sum();}

function calk_live_sum(){
    calk_live_result.innerText = +input_live_inA.value + +input_live_inB.value;
}

}

//==============================================================
function system_log(txt){
    let doc = document;
    let conteiner = doc.getElementById("footer-console");
    conteiner.innerText += '\n> ' + txt;
    conteiner.scrollTop = conteiner.scrollHeight;
    console.log(txt);
}

function is_number_valid(num){
    return !!(+num) ? true : false;
}

//==============================================================