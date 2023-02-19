// function *createFlow(){
//     yield 3
//     yield 4
//     yield 5
// };

// const returnNextElement = createFlow()

// const element1 = returnNextElement.next()
// const element2 = returnNextElement.next()

// console.log(element1)
// console.log(element2)

// Generators wityh dynamic data: 
// This allows us to dyunamically set what data flows to us.

function *createDynamicFlow(){
    const num = 10;
    const newNum = yield num;
    yield 5 + newNum;
    yield 6;
}

const returnNextElement = createDynamicFlow() // Gives back the object with the .next() method

const element1 = returnNextElement.next()
const element2 = returnNextElement.next()

