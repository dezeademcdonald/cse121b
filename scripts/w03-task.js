/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(num1, num2){

    return num1 + num2;
}

function addNums(){

    let addNum1 = Number(document.querySelector('#add1').value);
    let addNum2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNum1, addNum2);
}

document.querySelector('#addNumbers').addEventListener('click', addNums);


/* Function Expression - Subtract Numbers */
function subtraction(num1, num2){
    return num1 - num2;
}

function subNums(){

    let subNum1 = Number(document.querySelector('#subtract1').value);
    let subNum2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtraction(subNum1, subNum2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subNums);

/* Arrow Function - Multiply Numbers */
let multi = (num1, num2) => num1 * num2;

function multiNums(){

    let multiNum1 = Number(document.querySelector('#factor1').value);
    let multiNum2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multi(multiNum1, multiNum2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiNums);

/* Open Function Use - Divide Numbers */
let div = (num1, num2) => num1 / num2;

function divNums(){

    let divNum1 = Number(document.querySelector('#dividend').value);
    let divNum2 = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = div(divNum1, divNum2);
}

document.querySelector('#divideNumbers').addEventListener('click', divNums);

/* Decision Structure */
const date = new Date();
let currentYear = date.getFullYear();
document.querySelector('#year').innerHTML = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML = nums;
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = nums.filter(number => number % 2 == 1);
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = nums.filter(number => number % 2 == 0);
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = nums.reduce((sum, nums) => sum + nums);
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = nums.map(num => num * 2);
/* Output Sum of Multiplied by 2 Array */
function sumOfMultiplied(){
    let multiplied = nums.map(num => num * 2);
    return multiplied.reduce((sum, multiplied) => sum + multiplied);
}

document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultiplied();