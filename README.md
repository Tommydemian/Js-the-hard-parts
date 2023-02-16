# CODE EXECUTION: 
[ExecutionContext]: {
- Thread of execution => hilo de ejeccion:
Basicamente es lo que recorre linea tras linea. parse & execute. 
- Live memory of variables with data ( Known as global variable Environment) 
} => [globalExecutionContext]

keyword => [function] => literally means => go and save in memory this particular functionality. 

## Web browsers API:
Async => powered by WebBrowser Features.
- Constant interaction/ interface with browser features.

Async basics: 
- All the Syncronous code runs after. `even if the setTimeout(func, 0)` has to wait(0 sec) => It will wait for all the Syncronous code to run first and poip out the callSatck.


- Now this has potential to be caotic. there's a lot of nuances and ifs that could possibly happen:
``` We need really Strict Rules to define where/When do the Async code return to Js. 
1. Finish runnning all my global Syncronous code.
2. I must have finished emptying my callSatck of any functionality to be run.
```
Examples: 

-setTimeout(func,0) => facade fucntion = >It's going to spin up a web browser feature => [Timer].
Timer(func, 0[time])

0 ----- complete ------- onCompletion  
onCompletion => DONE => fx() goes back to the [callbackQueue] => `Js Engine Feature`
- Callbackqueue => Doesnt actually store f(x)there => It's a reference to the Js Memory place where the f(x) its stored.

[TheEventLoop] => checks is the callStack is empty and all the sync global code has ran.  
- `Js Engine Feature`

## PROMISES: 
 We said that [SetTimeout] => was doing nothing in JavaScript.
 - Now we got [Promises]: The are two-pronged: `The two prongs often work together to achieve a common goal or resolve a situation. The phrase "two-pronged" implies that there are two distinct, yet connected, elements to the approach.`
 They do 2 things: 
 1. They get started some background web browser feature.
 2. Simultaneously it does something in JavaScript.  Produce a spacial object => [Promise] => `placeHolder object` return automatically
 {Promise: value} => onCompletion => data: data from otside => {Promise: data}
 3. It has a hidden property called => [onFulfillment] 

 [xhr] => XMLHttpRequest => needs 3 attrs: 
 1. URL. 
 2. path.
 3. method. 

 <script>
import axios from "axios"

const res = axios.get('https://randomuser.me/api/?results=2')
.then(console.log(res.data))
//console.log(futureData) // => Promise { <pending> }  value: undefined  hiddenProp = onFullfillment:[f(x)] => the trigger automatically after value gets populated with whatever comes from the request

function display(data){
    console.log(data);
};
futureData.then(display)
 </script>

### Whats .then actually doing? 
 [.then] => what's .then doing really? => The promise created an object in Js with an {onFulfillment: vallue} => that value will be stepped with the right-hand-side of the .then 

 Which will be the order: 
  <script>
import axios from "axios"

let results 
 axios.get('https://randomuser.me/api/')
.then(res => console.log(res.data.results[0].gender))
 // => Promise { <pending> }  value: undefined  hiddenProp = onFullfillment:[f(x)] => the trigger automatically after value gets populated with whatever comes from the request


setTimeout(printHello, 1000)

console.log('Me First'); // First to come out. 

//order:
// 1) Me first! => codigo sincrono.
// 2) Promise.then => Promise it's a 2 pronged facade function that's generates a js Object.
// 3) setTimeout(function() {) => Nothing happens in js => All the work is done in the Browser.
</script>




# UNSPLASH API Reference:
Redirect URI
(optional for applications that are only using the 'Public' permissions)
urn:ietf:wg:oauth:2.0:oob
White-listed addresses to redirect to after authentication success OR failure (e.g. https://mysite.com/callback)
Use one line per URI
Use urn:ietf:wg:oauth:2.0:oob for local tests
urn:ietf:wg:oauth:2.0:oob (Authorize)

https://randomuser.me/api/?results=5000
