// https://github.com/forzub/homework

let arr = [31,32,32];

Array.prototype.forEach2 = function(callback){
  let arr0 = this;
  for(let i=0; i < arr0.length; i++){
    callback(arr0[i],i,arr0);
  }
}



arr.forEach2((item, index, array) => {
  console.log({item, index});
  //console.log({array});
})