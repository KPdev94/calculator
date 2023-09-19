let operator;
let firstNum = "";
let nextNum = "";
let displayNum = "";

const screen = document.querySelector('#display');

const limit = (string) => {
    return string.substring(0, 15);
}

const screenClear = () => {
    screen.textContent = "";
    firstNum = "";
    operator = null;
    nextNum = "";
}

const operate = (operator, num1, num2) => {
        if (operator == 'add') return Number(num1 + num2);
        else if (operator =='sub') return Number(num1 - num2);
        else if (operator == 'multiply') return Number(num1 * num2);
        else if (operator == 'divide') return Number(num1 / num2);
} 

const numBtns = document.querySelectorAll(".numBtn");
numBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(firstNum && operator) {
            if(nextNum.includes(".") && e.target.id == ".") {
                nextNum = nextNum;
            }
            else if (nextNum == "" && e.target.id == ".") {
                nextNum = "0.";
                screen.textContent = nextNum;
            }
        else {
            if(nextNum.length >= 15) {
                nextNum = limit(nextNum);
                }
            else {
                nextNum += e.target.id;
                screen.textContent = nextNum;
                }
            }

        }
        else if(operator == null) {
            if(firstNum.includes(".") && e.target.id == ".") {
                firstNum = firstNum;
            }
            else if(firstNum == "" && e.target.id == ".") {
                firstNum = "0.";
                displayNum = firstNum;
                screen.textContent = displayNum;
            }
            else{
                if(firstNum.length >= 15) {
                    firstNum = limit(firstNum);
                }
                else {
                    firstNum += e.target.id;
                    displayNum = firstNum;
                    screen.textContent = displayNum;
                }
            }
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
        if(nextNum != "") {
            displayNum = (operate(operator, Number(displayNum), Number(nextNum)));
            if(`${displayNum}`.length >= 15) {
                displayNum = limit(displayNum);
                screen.textContent = displayNum;
            }
            else if(`${displayNum}`.length < 15) {
                screen.textContent = displayNum;
            }
        }
        operator = e.target.id;
        nextNum = "";
        console.log(`First: ${firstNum} Next: ${nextNum} Operator: ${operator} Display: ${displayNum}`);
        console.log(e.target.id);

    });
});

const equalsBtn = document.querySelector(".equalsBtn");
equalsBtn.addEventListener('click', () => {
    if(screen.textContent != displayNum || screen.textContent == displayNum && nextNum == displayNum) {
        displayNum = (operate(operator, Number(displayNum), Number(nextNum)));
    }    
    if(`${displayNum}`.length >= 15) {
        displayNum = limit(displayNum.toString());
    }
    screen.textContent = displayNum;
    operator = null;
    nextNum = "";
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