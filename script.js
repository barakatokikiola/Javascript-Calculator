let val1 = parseFloat(prompt('Enter 1st Value'));
let operator = prompt('Specify the operation to be performed +, -, *, /');
let val2 = parseFloat(prompt('Enter 2nd Value'));
let result;
 if(isNaN(val1) || isNaN(val2)) {
    alert('Please refresh the page and enter a valid number')
 } else {
    if (operator === '+'){
        result = val1 + val2;
    } else if (operator === '-'){
        result = val1 - val2;
    } else if (operator === '*'){
        result = val1 * val2;
    } else if (operator === '/'){
        result = val1 / val2;
    }
 }
 

alert(`${val1} ${operator} ${val2} = ${result}`);