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
// 2) Promise.then => Promise it's a 2 pronged facade function that's generates a js Object. => MicroTask Queue.
// 3) setTimeout(function() {) => Nothing happens in js => All the work is done in the Browser. => Callback Queue.
</script>

``` The EventLoop priorityze the MicroTask Queue. 
```

# UNSPLASH API Reference:
Redirect URI
(optional for applications that are only using the 'Public' permissions)
urn:ietf:wg:oauth:2.0:oob
White-listed addresses to redirect to after authentication success OR failure (e.g. https://mysite.com/callback)
Use one line per URI
Use urn:ietf:wg:oauth:2.0:oob for local tests
urn:ietf:wg:oauth:2.0:oob (Authorize)

https://randomuser.me/api/?results=5000

# ITERATORS & GENERATORS: 
- We so concerned on how to access the data that we lose focus on the purpose, what to do with the data Itself. 

- The normal process would be: 
1. the process of accessing each element.
2. What we want to do with each element.

[Iterators] => automate the way we access data so wa can focus on waht we want to do with each element.

``` It all starts returning a fucncton from a function => perhaps like all the most elegant things in Js (functional programmers would be pleased by mey claim)
```
Simple example of function returning new function: 
 <script>
function createNewFunction(){
    function add2(num) {
        return num + 2;
    }
    return add2
}

const newFunction = createNewFunction()

const result = newFunction(3)
 </script>

 - Lets make this claer => newFunction doesn't care about createNewFunction(), only its resolution. So when it  get's resolved and newFunction stores add2 functionallity, there's no point in looking back. => createNewFunction execution context is deleted and we as developers shouldn't look back at all. All we know and care is that newFunction = add2 functionallity. => [thatsAll]

 - Visually we need to see it to remember what add2 function does => But in our minds it shouldn't exist anymore.

 ## Why did I do this? 
 - Why didn't I just declare add2 globally? 

 Because a returned function is MUCH MORE than just a function => returns a underline collection of surrounding data and makes it persistent.
 - the data is stored in a hidden property called [[scope]]

### Lexical scope language:
 A language who's rules, or it's rules about what data is available to you when a function is called, is about where the function was born/ defined is called as a lexically scoped language.
  In resume, that's a language that says => Where you defined me, the position of my definition inside another function is what determines, what data is available to me when I'm eventually ran, eventually called.
`It can also be names statically scoped language`

 <script>
function createFlow(array) {
    let i = 0;
    function inner(){
        const element = array[i];
        i++;
        return element;
    }
    return inner;    
};

const returnNextElement = createFlow([4,5,6]);

const element1 = returnNextElement()
const element2 = returnNextElement()
 </script> 

 Now things get interesting because element1 it's calling returnNextElement() which given the within functionallity:

 <script>
  function inner(){
        const element = array[i];
        i++;
        return element;
    }
 </script>

## CLOSURE: The function can have memory. 

 will do the next thing: 
 
1. create a const=element with the array[0] => BUT WE DO NOT HAVE THE ARRAY SO IT SHOULD BE UNDEFINED RIGHT?
 `So know, where is that array im looking for? => I mean, certainly I cannot look for it in the [createFlow] execution context => It's long gone! `
``` results that as soon as I defined inner() function inside createFlow() function I got a bond to all the surrounding live memory, the surrounding data.
```
- So when I returned that function I returned in it's back [backpack] all its surrounding data => which in this case turns to be the array = [4,5,6] and that's why I got access to the indexes.

- So before going to look on the global Memory I look on the [backpack] of my returned function.

### What is the posh name for returnNextElement? => ITERATOR
- Iterators turn our collection data into [streams] => flows of actual values that we can access one after another. 

### ITERATORS CHALLENGE: 

Iterators
Challenge 1
A) Create a for loop that iterates through an array and returns the sum of the elements of the array.
B) Create a functional iterator for an array that returns each value of the array when called, one element at a time.
Challenge 2
Create an iterator with a next method that returns each value of the array when .next is called.
Challenge 3
Write code to iterate through an entire array using your nextIterator and sum the values.
Challenge 4
Create an iterator with a next method that returns each value of a set when .next is called
Challenge 5
Create an iterator with a next method that returns an array with two elements (where the first element is the index and the second is the value at that index) when .next is called.
Challenge 6
Create an iterator that returns each word from a string of words on the call of its .next method (hint: use regex!)
Then attach it as a method to the prototype of a constructor Words. Hint: research Symbol.iterator!
Challenge 7
Build a function that walks through an array and returns the element concatenated with the string "was found after index x", where x is the previous index.
Note: if it is the first element it should say that it is the first
Challenge 8
Write a function that will console.log "hello there", or "gibberish", every three seconds depending on if the word passed into the function is 'english'.
Do not use any type of loop constructor and only make the call to createConversation once.
Challenge 9
Use async/await to console.log a sentence comprised of a noun and verb in which the non async function takes in a noun, concatenates it with a hard coded verb and returns it to the async function to be console.logged after a duration of 3 seconds. Call the async function only once, feeding it a noun to make this happen.

### SET: 
A set is a [dataStructure] => could be similar to simlar to Arrays 
1. In a set you can't store duplicated values.

# ITERATORS: 
Are basically objects with a method instead of justa a fucntion. => We already built a lot of them.

# GENERATORS: 
- New type of functions => Create a flow of data.
- This type of functions start with a [*]
- CALL TO CREATE [FLOW]

<script>
function *createFlow(){
    yield 3
    yield 4
    yield 5
};
const returnNextElement = createFlow() // This returns a [specialObject] with a property called {next: function} on it.
const element1 = returnNextElement.next() // .next() => means execution of the method and now ya, we have a brand new EXECUTION CONTEXT.
const element2 = returnNextElement.next()

console.log(element1)
console.log(element2)
</script>

- createFlow won't create an execution context => It will return a [specialObject] with a property called {next: function} on it.

### yield:
- super powerfull [keyword] => its a [return] statement esentially. but is does suspend/ PAUSE the execution context.
