let operator;
let firstNum = 0;
let nextNum = 0;
let displayNum = 0;

const screen = document.querySelector('#display');
const screenClear = () => {
    screen.textContent = "";
    firstNum = null;
    operator = null;
    nextNum = null;
}

const add = (num1, num2) => {
    return num1 + num2;
}
const sub = (num1, num2) => {
    return num1 - num2;
}
const multiply = (num1, num2) => {
    return num1 * num2;
}
const divide = (num1, num2) => {
    return num1 / num2;
}
const operate = (operator, num1, num2) => {
    if(operator != null && num1 != 0 && num2 != 0) {
        if (operator == 'add') return add(num1, num2);
        else if (operator =='sub') return sub(num1, num2);
        else if (operator == 'multiply') return multiply(num1, num2);
        else if (operator == 'divide') return divide(num1, num2);
    }
} 


const numBtns = document.querySelectorAll(".numBtn");
numBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
        screen.textContent += e.target.textContent;
        if(operator == null) {
            firstNum = firstNum * 10 + Number(e.target.id);
        }
        else {
            nextNum = 0;
            nextNum = nextNum * 10 + Number(e.target.id);
        }
        console.log(`${firstNum} and ${nextNum}`)
        console.log(`${typeof(firstNum)} ${typeof(nextNum)}`);
    });
});

const mathBtns = document.querySelectorAll(".mathBtn");
mathBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
        operator = e.target.id;
        if(nextNum > 0) {
            displayNum += operate(operator, displayNum, nextNum);
            screen.textContent = Number(displayNum);
        }
        else screen.textContent = "";
    });
});


const equalsBtn = document.querySelector(".equalsBtn");
equalsBtn.addEventListener('click', () => {
    screen.textContent = operate(operator, Number(firstNum), Number(nextNum));
});

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
    screen.textContent = "CLEARED";
    setTimeout(screenClear, 2000);
});