import axios from "axios"

function doWhenDataReceived(value){
    returnNextElement.next(value)    
}

function *createFlow(){
    const response = yield axios.get('https://randomuser.me/api/?results=5') // yield suspends the execution context untiil the data from the .get is resolved. 
    console.log(response.data) // response is not storing nothing!!
}

const returnNextElement = createFlow() // Creates a special object with the .next method on it.
const futureData = returnNextElement.next() // enters createFlow() execution context. => Receives the unapologetically kicked out response Promise object from createFlow()

console.log(futureData.value)
futureData.value
.then(doWhenDataReceived)
.catch(error => console.log(error)) // que hago ahora con el value de la promise ?
// futureData.value => of course Promises are objects with .value inside.