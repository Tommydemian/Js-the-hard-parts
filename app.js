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

function* getUsers() {
  try {
    const response = yield axios.get('https://randomuser.me/api/?results=5') // yield suspends the execution context untiil the data from the .get is resolved.
    const results = response.data.results
    for (const user of results) {
      yield user
    }
  } catch (error) {
    console.log(error)
  }
}


const userGenerator = getUsers()

userGenerator.next().value.then(res => {
  console.log(res.data.results[0])
})


 // => Promise { <pending> }  value: undefined  hiddenProp = onFullfillment:[f(x)] => the trigger automatically after value gets populated with whatever comes from the request


setTimeout(printHello, 1000)

console.log('Me First'); // First to come out. 






      
