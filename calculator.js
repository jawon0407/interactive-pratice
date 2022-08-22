const number = document.querySelectorAll("button");
const bfNum = document.querySelector(".bf_num");
const afNum = document.querySelector(".af_num");
const total = document.querySelector(".total");
const cancel = document.querySelector(".backspace")
const operator = document.querySelectorAll(".operator")
const operatorSpan = document.querySelector(".operator_sign")
let change = false;

operator.forEach((i) =>{i.addEventListener("click",() => {operatorSpan.innerHTML = i.innerHTML;})})

number.forEach((i)=>{
    if(change === false){
        bfNum.
    }
})
