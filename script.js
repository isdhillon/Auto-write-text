//declarations
let quote1="You only live once, but if you do it right, once is enough"
let quote2="Life is what happens when you’re busy making other plans."
let quote3="If life were predictable it would cease to be life, and be without flavor."
let idx1=0;
let idx2=0;
let idx3=0;
let a=document.querySelector(".a")
let b=document.querySelector(".b")
let c=document.querySelector(".c")
//function to write the quotes
function writeText(){
    a.innerText=quote1.slice(0,idx1)
    b.innerText=quote2.slice(0,idx2)
    c.innerText=quote3.slice(0,idx3)

    idx1++
    idx2++
    idx3++
    if(idx1>quote1.length){
        idx1=0
    }
    if(idx2>quote2.length){
        idx2=0
    }if(idx3>quote3.length){
        idx3=0
    }
}
//calling the function after 200ms
setInterval(writeText,200)