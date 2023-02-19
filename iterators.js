// const numbers = [4,5,6];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// // Creates a fucntion that returns another function.
// function createNewFunction(){
//     function add2(num) {
//         return num + 2;
//     }
//     return add2
// }

// const newFunction = createNewFunction()

// const result = newFunction(3)

// // 

// function createFlow(array) {
//     let i = 0;
//     function inner(){
//         const element = array[i];
//         i++;
//         return element;
//     }
//     return inner;    
// };

// const returnNextElement = createFlow([4,5,6]);

// const element1 = returnNextElement()
// const element2 = returnNextElement()

// refactor of the createFlow function but make it even more analogous to how really iterators work: an object with a method inside it. 

function createFlowAnalog(array) {
    let i = 0;
    const iterator = {
        next: function(){
            const value = array[i];
            i++
            return value;
        }
    }
    return iterator;
}

const iteratorFunc = createFlowAnalog([1,2,3,4,5]);

console.log(iteratorFunc.next());
console.log(iteratorFunc.next());
console.log(iteratorFunc.next());
