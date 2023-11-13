// function declaration

function name() {
    console.log('mukunzi ndahiro james')
}
name()
// function expression
const title =function() {
    console.log('head master')
}
title()

// function hello (name){
//     console.log(`good morning ${name}`)
// }
// hello('james')

const hello =  function(name){
console.log(`greeting ${name}`)
}
hello('james')

// arrow function
const calcArea = (radius) => 3.14*radius**2;

const area =calcArea(5)
console.log(area)

const bill = (product,tax)=>{

}
// call back and foreach
const myFunc = (callbackFunk) =>{
    let value = 50
    callbackFunk(value)
}
myFunc(function(value){
console.log(value)
})

const materials =['shoes','clothes','hoes','basket','rack']

materials.forEach(person=>{
console.log("player:",person)
})