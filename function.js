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

materials.forEach(material=>{
console.log("player:",material)
})

const scores =[15,30,20,45,65,100]

const filted = scores.filter((score)=>{
   return score <20
})
console.log(filted)

const users =[
    {name:"james",premium:true},
    {name:"shawn",premium:true},
    {name:"bby",premium:false},
    {name:"dine",premium:false}

]
const premiumUser =users.filter(user=>{
return user.premium
})
console.log(premiumUser)


const prices =[15,30,20,45,65,100,150]

const newPrice = prices.map((price)=>{
    return price /2
})
console.log(newPrice)

const products =[
    {name:"james",price:20},
    {name:"shawn",price:100},
    {name:"bby",price:150},
    {name:"dine",price:180},
    {name:"dine",price:180}

]
const newProduct = products.map((product)=>{
    if (product.price >30) {
        return {name:product.name , price :
            product.price/2}
    }else{
        return product
    }
})
console.log(newProduct)

const chips =['mario','shaun','chun-li','yoshi','luigi']
chips.sort()
console.log(chips)