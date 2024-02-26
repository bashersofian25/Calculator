const calculatorStatus = {
    result: undefined,
    operation: undefined,
    number: undefined, 
}

const calculationResult =  document.getElementById('result');
const myOperators = /[/*-+%]/g;
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.getElementById("equal");
const decimalPoint = document.getElementById("point");
const AC = document.getElementById("AC");
const CE = document.getElementById("CE");
const DEL = document.getElementById("DEL");


DEL.addEventListener('click', e => {
    
    calculationResult.innerText = calculationResult.innerText.substring(0, calculationResult.innerText.length-1);
    calculatorStatus.result = Number(calculationResult.innerText);
});

AC.addEventListener('click', e => {
    calculatorStatus.result = undefined;
    calculatorStatus.operation = undefined;
    calculatorStatus.number = undefined;
    decimalPoint.disabled = false;
    calculationResult.innerText = '';
});

CE.addEventListener('click', e => {
    calculatorStatus.result = undefined;
    calculatorStatus.operation = undefined;
    calculatorStatus.number = undefined;
    decimalPoint.disabled = false;
    calculationResult.innerText = '';
})

decimalPoint.addEventListener('click', e => {
    if(!myOperators.toString().includes(calculationResult.innerText)&&calculationResult.innerText != ''){
        calculationResult.innerText += e.target.innerText;
        e.target.disabled = true;
    }
    
});

equal.addEventListener('click', e => {
    calculatorStatus.equalPressed = true;
    if(!myOperators.toString().includes(calculationResult.innerText) && calculatorStatus.operation !== undefined){
        
        calculatorStatus.number = Number(calculationResult.innerText);

        console.log(calculatorStatus.number);
        console.log(calculatorStatus.result);
        console.log(calculatorStatus.operation);
    }
    switch (calculatorStatus.operation){
        case '+': 
            calculatorStatus.result = calculatorStatus.result + calculatorStatus.number;
            calculationResult.innerText = calculatorStatus.result;
            
        break;
        case '-':
            calculatorStatus.result = calculatorStatus.result + calculatorStatus.number;
            calculationResult.innerText = calculatorStatus.result;
        break;
        case '%':
            calculatorStatus.result = calculatorStatus.result % calculatorStatus.number;
            calculationResult.innerText = calculatorStatus.result;
            
        break;
        case '*':
            calculatorStatus.result = calculatorStatus.result * calculatorStatus.number;
            calculationResult.innerText = calculatorStatus.result;
            
        break;
        case '/':
            calculatorStatus.result = calculatorStatus.result / calculatorStatus.number;
            calculationResult.innerText = calculatorStatus.result;
        break;
        default: return;
    }
    calculatorStatus.operation = undefined;
    

});

operators.forEach((operator) => {
    operator.addEventListener('click', e => {
        document.getElementById('point').disabled = false;
        if(!myOperators.toString().includes(calculationResult.innerText)){
            if(calculatorStatus.result == undefined){
                calculatorStatus.result = Number(calculationResult.innerText);
                
                
            }else {
                calculatorStatus.number = Number(calculationResult.innerText);
                console.log(calculatorStatus.number);
                console.log(calculationResult.innerText);
            }
        }
        console.log(e.target.innerText)
        calculatorStatus.operation = e.target.innerText;
        calculationResult.innerText = e.target.innerText;

    });
});


numbers.forEach((number) => {
    number.addEventListener('click', e => {
        calculationResult.innerText = calculationResult.innerText.replace(myOperators, '') + e.target.innerText;
    });
});


