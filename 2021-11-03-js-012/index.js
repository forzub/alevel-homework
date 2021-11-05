// https://github.com/forzub/homework


const cart = {
  wheels : 4,
  driver : "веревка",
  basis : {
    with : "50 см",
    height : "40 см",
    depth : "5 см"
  },
  to_pull : ()=>{console.log("тянуть")},
  to_push : ()=>{console.log("толкать")},
  to_load : ()=>{console.log("грузить")},
  to_unload : ()=>{console.log("разгрузить")},
}

const team = {
  __proto__: cart,
  engine : "лошадь",
  control : "вожжи, кнут",
  sitting : "козлы",

  on_start : (control)=>{console.log("Н-н-н-н-о-о-о-о-о!")},
  on_stop : (control)=>{console.log("тр-р-р-р-р-р-р")},
}

const car = {
  __proto__: team,
  engine : "мотор",
  control : "руль, педали",
  sitting : "кресло",
  tank : "безнобак",
  service : "дворники",
  brend: "",
  on_start : (control) =>{ console.log("фыр-фыр-фыр")},
  on_stop : (control) => {console.log("и-и-и-и-и-и-и-и-и-")}
}


class Cart{
  constructor(c_matherial, c_widht, c_height, c_depth){
    this.with =  c_widht;
    this.height =  c_height;
    this.depth =  c_depth;
    this.mat = c_matherial;
    this.wheels = 4;
    this.driver = "веревка";
  }

  to_pull = ()=>{console.log("тянуть");};
  to_push = ()=>{console.log("толкать");};
  to_load = ()=>{console.log("грузить");};
  to_unload = ()=>{console.log("разгрузить");};

}

class Team extends Cart{
  constructor(c_matherial, c_widht, c_height, c_depth){
    super(c_matherial, c_widht, c_height, c_depth);
    this.engine = "лошадь";
    this.control = "вожжи, кнут";
    this.sitting = "козлы"; 
  }
  
  on_start = (control)=>{console.log("Н-н-н-н-о-о-о-о-о!");};
  on_stop = (control)=>{console.log("тр-р-р-р-р-р-р");};
}

class Car extends Team{
  constructor(c_matherial, c_widht, c_height, c_depth, brend){
    super(c_matherial, c_widht, c_height, c_depth);
    this.engine  = "мотор";
    this.control  = "руль, педали";
    this.sitting  = "кресло";
    this.tank  = "безнобак";
    this.service  = "дворники";
    this.brend = "brend"; 
  }
  
  on_start = (control)=>{console.log("фыр-фыр-фыр");};
  on_stop = (control)=>{console.log("и-и-и-и-и-и-и-и-и-");};
}

