// // CHALLENGE 1 - A
// function sumFunc(arr) {
//     // YOUR CODE HERE
//     let acc = 0
//     for (let i = 0; i < arr.length; i++) {
//        acc += arr[i] ;
//     }
//     return acc;
//   }
  
//   // Uncomment the lines below to test your work
//   const array = [1, 2, 3, 4];
//   console.log(sumFunc(array)); // -> should log 10

// // CHALLENGE 1 - B
// function returnIterator(arr) {
//   // YOUR CODE HERE
//   let i = 0;
//   function indIterator(){
//     const element = arr[i];
//     i ++;
//     return element;
//   }
//   return indIterator;
// }

// // Uncomment the lines below to test your work
// const array2 = ['a', 'b', 'c', 'd'];
// const myIterator = returnIterator(array2);
// console.log(myIterator()); // -> should log 'a'
// console.log(myIterator()); // -> should log 'b'
// console.log(myIterator()); // -> should log 'c'
// console.log(myIterator()); // -> should log 'd'

// CHALLENGE 2
function nextIterator(arr) {
   // YOUR CODE HERE
   let i = 0;
   const iterator = {
      next: function () {
         const value = arr[i];
         i++
         return value;
      }
   }
   return iterator;
   }
 
 
 
 // Uncomment the lines below to test your work
 const array3 = [1, 2, 3];
 const iteratorWithNext = nextIterator(array3);
 console.log(iteratorWithNext.next()); // -> should log 1
 console.log(iteratorWithNext.next()); // -> should log 2
 console.log(iteratorWithNext.next()); // -> should log 3

 // CHALLENGE 3

function sumArray(arr) {
  // YOUR CODE HERE
  let acc = 0;
  const iterator = nextIterator(arr)
  for (let i = 0; i < arr.length; i++) {
    acc += iterator.next();
  }
  return acc;
}



//Uncomment the lines below to test your work
const array4 = [1, 2, 3, 4];
console.log(sumArray(array4)); // -> should log 10

// CHALLENGE 4

function setIterator(set) {
  // YOUR CODE HERE
   let i = 0;
  const myarr = [...set]
  const iterator = {
    next: function(){
      const value = myarr[i];
      i++ 
      return value; 
    }
  }
  return iterator 
}

// Uncomment the lines below to test your work
const mySet = new Set('hey');
const iterateSet = setIterator(mySet);
console.log(iterateSet.next()); // -> should log 'h'
console.log(iterateSet.next()); // -> should log 'e'
console.log(iterateSet.next()); // -> should log 'y'

// CHALLENGE 5

function indexIterator(arr) {
  // YOUR CODE HERE
  let i = 0;
  const iterator = {
    next: function(){
      const value = arr[i];
      i++;
      return [i -1, value];

    } // imita el comportameiento de un for loop
  }
  return iterator;
}

// Uncomment the lines below to test your work
 const array5 = ['a', 'b', 'c', 'd'];
const iteratorWithIndex = indexIterator(array5);
console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
console.log(iteratorWithIndex.next()); // -> should log [2, 'c']

// CHALLENGE 6

function Words(string) {
  this.str = string;
}

Words.prototype[Symbol.iterator] = function() {
  // YOUR CODE HERE

}

// Uncomment the lines below to test your work
// const helloWorld = new Words('Hello World');
// for (let word of helloWorld) { console.log(word); } // -> should log 'Hello' and 'World'

const string = 'Hello World';

console.log(string.prototype)

// CHALLENGE 7
// Build a function that walks through an array and returns the element concatenated with the string "was found after index x", where x is the previous index.
// Note: if it is the first element it should say that it is the first

function valueAndPrevIndex(array){
  let index = 0; 
  const iterator = {
    sentence: function(){
      // position
      const value = array[index - 1] == undefined 
      ? `${array[index]} it is the first` 
      : `${array[index]} was found after index ${index - 1}`;
      index ++;
      return value;
      
    }
  }
  return iterator

}

const returnedSentence = valueAndPrevIndex([4,5,6])
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());

// CHALLENGE 8
// Write a function that will console.log "hello there", or "gibberish", every three seconds depending on if the word passed into the function is 'english'.
// Do not use any type of loop constructor and only make the call to createConversation once.

// function* createConversation(string) {
//   function isEnglish(){
//     if (string == 'english') {
//       console.log('hello there')
//     } else console.log('gibberish')
//   }
//   while (true)
//   isEnglish();
//   yield new Promise(resolve => {
//     setTimeout(resolve, 3000)
//   });

// }

function* createConversation(string) {
  function isEnglish() {
    if (string === 'english') {
      console.log('hello there');
    } else {
      console.log('gibberish');
    }
  }
  let count = 0;
  while (count < 10) {
    isEnglish();
    yield new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
    count++;
  }
  return 'Conversation ended';
}

const conversation = createConversation('english');

// This loop will call `conversation.next()` 10 times, and then stop the generator
for (let i = 0; i < 10; i++) {
  conversation.next();
}
conversation.return();



