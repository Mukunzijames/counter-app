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



let age = 26;
let year = 2003;
console.log(`she has ${age} age and her birth year is ${year}`)

// string concetantion

let firstName ="james";
let lastName ="ndahiro";

let fullName = firstName + " " + lastName

console.log(fullName)

// getting characters in string

let shop = "markettskjhdsa"

let newShop = shop.toUpperCase()

console.log(newShop)

let email = "mukunzindahiro@gmail.com"

let index = email.indexOf('@')

console.log(index)

// slice method

let store ="carrotorange"

let print = store.slice(1,5)

console.log(print)

// substring

let stores = "cajsk.jashkjhda"

let prints = stores.substring(0,6)
console.log(prints)

// template string

const titles = "best read of 2019";

const author ="ndahiro james"

const likes = 30;



// concatanation way
// template string or template literal

let results =`the blog called ${titles} by ${author} has ${likes} likes`

let res = results.includes('b')

console.log(res)

let user = {
  name:"james",
  age:30,
  email:"mukunzindahiro@gmail.com",
  location:"berlin",
  blogs:['this user is very wel','this year is awesome'],

  logBlog:function() {
    this.blogs.forEach((blog)=>{
    console.log(blog)
    })
  }
};

user.logBlog()
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}