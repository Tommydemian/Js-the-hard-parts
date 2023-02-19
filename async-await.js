import axios from "axios";

async function createFlow(){
  console.log('Me first');
  const response = await axios.get('https://randomuser.me/api/?results=5') // yield suspends the execution context untiil the data from the .get is resolved. 
  console.log(response.data)
}

createFlow()

console.log('Me second')