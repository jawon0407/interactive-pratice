const number = document.querySelectorAll(".number");
const bfNum = document.querySelector(".bf_num");
const afNum = document.querySelector(".af_num");
const total = document.querySelector(".total");
const cancel = document.querySelector(".backspace")
const operator = document.querySelectorAll(".operator")
const displayNumber = document.querySelectorAll(".display span")
const operatorSign = document.querySelector(".operator_sign")
let resultNum = document.querySelector(".result_num");
let change = false;


number.forEach((i)=>{
    i.addEventListener("click",()=>{
        if(change === false){
            bfNum.innerHTML += i.innerHTML; 
        }else{
            afNum.innerHTML += i.innerHTML;
        }
    })
})

operator.forEach((i) => {
    i.addEventListener("click",() => {
    operatorSign.innerHTML = i.innerHTML;
    change = true;
    return change;
})})

total.addEventListener("click",()=>{
    if(operatorSign.innerHTML === "+"){
    const totalNum = Number(bfNum.innerHTML) + Number(afNum.innerHTML);
    resultNum.innerHTML = totalNum;
    }else if(operatorSign.innerHTML === "-"){
        const totalNum = Number(bfNum.innerHTML) - Number(afNum.innerHTML);
        resultNum.innerHTML = totalNum;
    }else if(operatorSign.innerHTML === "*"){
        const totalNum = Number(bfNum.innerHTML) * Number(afNum.innerHTML);
        resultNum.innerHTML = totalNum;
    }else if(operatorSign.innerHTML === "/"){
        const totalNum = Number(bfNum.innerHTML) / Number(afNum.innerHTML);
        resultNum.innerHTML = totalNum;
    }else{
        alert("다시 입력해주세요");   
        afNum.innerHTML = '';

    }
    bfNum.innerHTML = resultNum.innerHTML;
    operatorSign.innerHTML = '';
    afNum.innerHTML = '';
})

cancel.addEventListener("click",()=>{
    console.log(displayNumber);
    displayNumber.forEach((i)=>{
        i.innerHTML = "";
    })
})