let operator;
let firstNum = null;
let nextNum = null;
let displayNum;

const screen = document.querySelector('#display');
const screenClear = () => {
    screen.textContent = "";
    firstNum = 0;
    operator = null;
    nextNum = 0;
}

const operate = (operator, num1, num2) => {
        if (operator == 'add') return num1 + num2;
        else if (operator =='sub') return num1 - num2;
        else if (operator == 'multiply') return num1 * num2;
        else if (operator == 'divide') return num1 / num2;
} 

const numBtns = document.querySelectorAll(".numBtn");
numBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
        screen.textContent += e.target.textContent;
        if(firstNum && operator) {
            nextNum = nextNum * 10 + Number(e.target.id);
            screen.textContent = nextNum;
        }
        else if(operator == null) {
            firstNum = firstNum * 10 + Number(e.target.id);
            displayNum = firstNum;
        }
        console.log(`First: ${firstNum} 
        Next: ${nextNum}
        Operator: ${operator}
        Display: ${displayNum}`);
        console.log(e.target.id);
    });
});

const mathBtns = document.querySelectorAll(".mathBtn");
mathBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(nextNum != null) {
            displayNum = Number(operate(operator, displayNum, nextNum));
        }
        operator = e.target.id;
        nextNum = null;
        screen.textContent = displayNum;
        console.log(`First: ${firstNum} Next: ${nextNum} Operator: ${operator} Display: ${displayNum}`);
        console.log(e.target.id);
    });
});

const equalsBtn = document.querySelector(".equalsBtn");
equalsBtn.addEventListener('click', () => {
    displayNum = Number(operate(operator, displayNum, nextNum));
    screen.textContent = displayNum;
    operator = null;
    nextNum = null;
    console.log(`First: ${firstNum} 
             Next: ${nextNum}
             Operator: ${operator}
             Display: ${displayNum}`);
});

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
    screen.textContent = "CLEARED";
    setTimeout(screenClear, 2000);
});