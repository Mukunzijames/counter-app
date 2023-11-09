// set initial count
let count = 0 ;

// select value and button
const value = document.querySelector('#value');
const button = document.querySelectorAll('button')

button.forEach((butto)=>{
 butto.addEventListener('click', (e) =>{
    const style = e.currentTarget.classList ;
    if (style.contains("decrease")) {
        count--;
    }
    else if (style.contains("increase")) {
        count++;
    }
    else{
    count = 0;
   }
   if (count < 0) {
    value.style.color = 'red';
   }
   else if (count > 0) {
    value.style.color = 'blue';
   }
   else{
    value.style.color ='black';
   }
    value.textContent = count;
 
 })
})
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}