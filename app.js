function printHello(){
  console.log("Hello");
};
function blockFor1Sec(){
    // blocks in the Js thread for 1 sec
} // When this function gets called its gonna sit on teh callStack for 1000 ms/1 sec. => [It could be a Loop] 

//setTimeout(printHello, 1000) // a facade function => for functionality happening outside of Js => in the Web Browser => Js has no [timer].
// After 1000ms this function is added to teh callStack where ikt's runned.
//setTimeout(Hello, 0) 

blockFor1Sec()

import axios from "axios"

const futureData = axios.get('https://randomuser.me/api/?results=2')
console.log(futureData) // => Promise { <pending> }  value: undefined  hiddenProp = onFullfillment:[f(x)] => the trigger automatically after value gets populated with whatever comes from the request


console.log('Me First'); // First to come out. 

// Two Pronged Solution => Promise.
function display(data){
    console.log(data);
};





      
