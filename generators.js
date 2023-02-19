function *createFlow(){
    yield 3
    yield 4
    yield 5
};

const returnNextElement = createFlow()

const element1 = returnNextElement.next()
const element2 = returnNextElement.next()

console.log(element1)
console.log(element2)
