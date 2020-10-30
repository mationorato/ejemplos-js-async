const fetch = require('node-fetch');

const apicallr = async (id) =>{
    const res = await fetch(`https://swapi.dev/api/people/${id}`)
    const data = await res.json()  
    return data
}

const apicall = async (id) =>{
    const res = await fetch(`https://swapi.dev/api/people/${id}`)
    const data = await res.json()  
    console.log("call3: " +data.name)
}

console.log("call 1")
fetch(`https://swapi.dev/api/people/1`)
    .then(res => res.json())
    .then(data => console.log("call1: " + data.name)) 

console.log("call 2")
apicallr(2).then(data => console.log("call2: " + data.name))

console.log("call 3")
apicall(3)

