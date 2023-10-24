let operation = ['Addition', 'Division', 'Multiplication', 'Subtration'];
let answersRecord = [];

operation.forEach(option => {
    let li = document.createElement('li');
    li.textContent = option;
    document.querySelector('#list-of-perations').appendChild(li);
});

function addition(num1, num2) {
    return num1 + num2;
};
function division(num1, num2) {
    return num1 / num2;
};
function multiplication(num1, num2) {
    return num1 * num2;
};
function subtraction(num1, num2) {
    return num1 - num2;
};

function calculation() {
    let add = 'Addition';
    let divide = 'Division';
    let multiply = 'Multiplication';
    let subtract = 'Subtraction';

    let firstNum = Number(document.querySelector('#first-num').value);
    let secondNum = Number(document.querySelector('#second-num').value);
    let option = document.querySelector('#option').value;


        if (option == add) {
            document.querySelector('#answer').value = addition(firstNum, secondNum);
        }
        else if (option == divide) {
            document.querySelector('#answer').value = division(firstNum, secondNum);
        }
        else if (option == multiply) {
            document.querySelector('#answer').value = multiplication(firstNum, secondNum);
        }
        else if (option == subtract) {
            document.querySelector('#answer').value = subtraction(firstNum, secondNum);
        }
        else {
            console.log('You enter an incorrect or invalid option');
        }

}
document.querySelector('#calculate').addEventListener('click', calculation);
