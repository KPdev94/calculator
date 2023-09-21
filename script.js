let operator;
let firstNum = "";
let nextNum = "";
let displayNum = "";
const equalsBtn = document.querySelector("#equals");
const deleteBtn = document.querySelector("#delete");
const clearBtn = document.querySelector('#clear');
const mathBtns = document.querySelectorAll(".mathBtn");
const numBtns = document.querySelectorAll(".numBtn");

const screen = document.querySelector('#display');

const limitLength = (string) => {
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



numBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
        /* In future program class list add for selection of math and equals
        btns and just make nums not work if selected is equals */

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
                nextNum = limitLength(nextNum);
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
                    firstNum = limitLength(firstNum);
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


mathBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(nextNum != "") {
            displayNum = (operate(operator, Number(displayNum), Number(nextNum)));
            if(`${displayNum}`.length >= 15) {
                displayNum = limitLength(displayNum);
                screen.textContent = displayNum;
            }
            else if(`${displayNum}`.length < 15) {
                screen.textContent = displayNum;
            }
        }
        button.classList.remove('selectedMaths');
        equalsBtn.classList.remove('selectedMaths');
        e.target.classList.add('selectedMaths');
        operator = e.target.id;
        nextNum = "";
        console.log(`First: ${firstNum} Next: ${nextNum} Operator: ${operator} Display: ${displayNum}`);
        console.log(e.target.id);
    });
});


deleteBtn.addEventListener('click', () => {
    if(firstNum && nextNum) {
        nextNum = nextNum.slice(0, -1);
        screen.textContent = nextNum;
    }
    else if(firstNum && operator == null) {
        firstNum = firstNum.slice(0, -1);
        screen.textContent = firstNum;

    }
    else return;
});

equalsBtn.addEventListener('click', (e) => {
    if(screen.textContent != displayNum || screen.textContent == displayNum && nextNum == displayNum) {
        displayNum = (operate(operator, Number(displayNum), Number(nextNum)));
    }   
    if(`${displayNum}`.length >= 15) {
        displayNum = limitLength(displayNum.toString());
    }
    mathBtns.forEach((button) => button.classList.remove('selectedMaths'));
    equalsBtn.classList.add('selectedMaths');
    screen.textContent = displayNum;
    operator = null;
    nextNum = "";
    console.log(`First: ${firstNum} 
             Next: ${nextNum}
             Operator: ${operator}
             Display: ${displayNum}`);
});

window.addEventListener('keydown', (e) => {
    let pressedBtn = document.querySelector(`button[data-key="${e.code}"]`)
    console.log(pressedBtn.id);
    pressedBtn.click();
});


clearBtn.addEventListener('click', () => {
    screen.textContent = "CLEARED";
    setTimeout(screenClear, 2000);
});