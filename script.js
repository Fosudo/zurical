const num1 = parseFloat(prompt("enter your first digit"));
const operator = prompt("Enter your sign(+ , -, / , * )" );
const num2 = parseFloat(prompt("enter your second digit"));

// let result;

if (operator == '+') {
    result = num1 + num2;
} else if (operator == '-') {
    result = num1 - num2;
} else if (operator == '*') {
    result = num1 * num2;
} else {
    result = num1 / num2;
}

//console.log(`${num1} ${operator} ${num2} = ${result}`);
// alert(`${num1}${operator}${num2}= ${result}`);?

alert(result)