let operator;
let firstNum = 0;
let nextNum = 0;
let displayNum;

const screen = document.querySelector('#display');
const screenClear = () => {
    screen.textContent = "";
    firstNum = 0;
    operator = null;
    nextNum = 0;
}


const operate = (operator, num1, num2) => {
    if(operator != null) {
        if (operator == 'add') return num1 + num2;
        else if (operator =='sub') return num1 - num2;
        else if (operator == 'multiply') return num1 * num2;
        else if (operator == 'divide') return num1 / num2;
    }
    screen.textContent = displayNum;
} 


const numBtns = document.querySelectorAll(".numBtn");
numBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
        screen.textContent += e.target.textContent;
        if(operator == null) {
            firstNum = firstNum * 10 + Number(e.target.id);
            displayNum = firstNum;
        }
        else {
            nextNum = nextNum * 10 + Number(e.target.id);
            screen.textContent = nextNum;
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
        operator = e.target.id;
        if(nextNum > 0) {
            displayNum = operate(operator, displayNum, nextNum);
            screen.textContent = displayNum;
            nextNum = null;
        }
        console.log(`First: ${firstNum} Next: ${nextNum} Operator: ${operator} Display: ${displayNum}`);
        console.log(e.target.id);
    });
});


const equalsBtn = document.querySelector(".equalsBtn");
equalsBtn.addEventListener('click', () => {
    screen.textContent = operate(operator, Number(displayNum), Number(nextNum));
    displayNum = screen.textContent;
    console.log(`First: ${displayNum} 
             Next: ${nextNum}
             Operator: ${operator}
             Display: ${displayNum}`);
});

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
    screen.textContent = "CLEARED";
    setTimeout(screenClear, 2000);
});