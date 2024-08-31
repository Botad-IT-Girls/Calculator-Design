// // function addToDisplay(value) {
// //     let display = document.getElementById('display');
// //     if (display.value === '0') {
// //         display.value = value;
// //     } else {
// //         display.value += value;
// //     }
// // }

// // function calculate() {
// //     let display = document.getElementById('display');
// //     display.value = eval(display.value);//this function calculate display value 
// // }

// // function clearDisplay() {
// //     document.getElementById('display').value = '0';
// // }





// // new code to handle infinity and syntex error 

// function addToDisplay(value) {
//     let display = document.getElementById('display');
    
//     // If display shows 'Infinity' or 'Error', reset it before adding the new value
//     if (display.value === 'Infinity' || display.value === 'Error') {
//         display.value = value;
//     } else if (display.value === '0') {
//         display.value = value;
//     } else {
//         display.value += value;
//     }
// }

// function calculate() {
//     let display = document.getElementById('display');
//     try {
//         display.value = eval(display.value);
//     } catch (error) {
//         display.value = 'Error';
//     }
// }

// function clearDisplay() {
//     document.getElementById('display').value = '0';
// }

// without inbuilt javascript function

// function addToDisplay(value) {
//     let display = document.getElementById('display');

//     if (display.value === '0' || display.value === 'Infinity' || display.value === 'Error') {
//         display.value = value;
//     } else {
//         display.value += value;
//     }
// }

// function calculate() {
//     let display = document.getElementById('display');
//     let expression = display.value;
//     let operator;
//     let num1 = '';
//     let num2 = '';
//     let result = 0;

//     // Extract numbers and operator from the expression
//     for (let i = 0; i < expression.length; i++) {
//         let char = expression[i];
//         if (char === '+' || char === '-' || char === '*' || char === '/') {
//             operator = char;
//         } else if (operator) {
//             num2 += char;
//         } else {
//             num1 += char;
//         }
//     }

//     num1 = Number(num1);
//     num2 = Number(num2);

//     // Perform calculation based on operator
//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num2 !== 0 ? num1 / num2 : 'Infinity';
//             break;
//         default:
//             result = 'Error';
//     }

//     display.value = result;
// }

// function clearDisplay() {
//     document.getElementById('display').value = '0';
// }
///when two operate display in input field
// function addToDisplay(value) {
//     let display = document.getElementById('display');

//     if (display.value === '0' || display.value === 'Infinity' || display.value === 'Error') {
//         display.value = value;
//     } else {
//         display.value += value;
//     }
// }

// function calculate() {
//     let display = document.getElementById('display');
//     let expression = display.value;
//     let operator;
//     let num1 = '';
//     let num2 = '';
//     let result = 0;
//     let operatorCount = 0;

//     // Extract numbers and operator from the expression;
//     for (let i = 0; i < expression.length; i++) {
//         let char = expression[i];
//         if (char === '+' || char === '-' || char === '*' || char === '/') {
//             operatorCount++;
//             if (operatorCount > 1) {
//                 // If more than one operator is found, set error in input 
//                 display.value = 'Error';
//                 return;
//             }
//             operator = char;
//         } else if (operator) {
//             num2 += char;
//         } else {
//             num1 += char;
//         }
//     }

//     // Ensure both num1 and num2 are valid or not
//     if (num1 === '' || num2 === '' || operator === '' || operatorCount === 0) {
//         display.value = 'Error';
//         return;
//     }

//     num1 = Number(num1);
//     num2 = Number(num2);

//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num2 !== 0 ? num1 / num2 : 'Infinity';
//             break;
//         default:
//             result = 'Error';
//     }

//     display.value = result;
// }

// function clearDisplay() {
//     document.getElementById('display').value = '0';
// }

function addToDisplay(value) {
    let display = document.getElementById('display'); // Get the calculator's display element.

    // Check if the display shows '0', 'Infinity', or 'Error'.
    // If so, replace it with the new value.
    if (display.value === '0' || display.value === 'Infinity' || display.value === 'Error'||display.value === 'undefined') {
        display.value = value; // Show the new value on the display.
    } else {
        display.value += value; // Add the new value to the end of the current display text.
    }
}

function calculate() {
    let display = document.getElementById('display'); // Get the calculator's display element.
    let expression = display.value; // Get the text from the display.

    // Create lists to keep numbers and operators.
    let numbers = []; // List to hold numbers.
    let operators = []; // List to hold operators.
    let currentNumber = ''; // A string to build the current number.

    // Go through each character in the display text.
    for (let char of expression) {
        // If the character is a number or a dot, add it to the current number.
        if (!isNaN(char) || char === '.') {
            currentNumber += char; // Add the character to the current number.
        } else if (['+', '-', '*', '/'].includes(char)) { // If the character is an operator.
            // If we have a current number, save it to the list of numbers.
            if (currentNumber) {
                numbers.push(parseFloat(currentNumber)); // Convert the current number to a float and save it.
                currentNumber = ''; // Clear the current number to start a new one.
            }
            operators.push(char); // Save the operator to the list of operators.
        }
    }

    // After the loop, save the last number if there is one.
    if (currentNumber) {
        numbers.push(parseFloat(currentNumber)); // Convert the last number to a float and save it.
    }

    // Start calculating the result.
    let result = numbers[0]; // Start with the first number.

    // Go through each operator and apply it to the numbers.
    for (let i = 0; i < operators.length; i++) {
        let operator = operators[i]; // Get the current operator.
        let nextNumber = numbers[i + 1]; // Get the next number to use in the calculation.

        // Apply the operator to the result.
        if (operator === '+') {
            result += nextNumber; // Add the next number to the result.
        } else if (operator === '-') {
            result -= nextNumber; // Subtract the next number from the result.
        } else if (operator === '*') {
            result *= nextNumber; // Multiply the result by the next number.
        } else if (operator === '/') {
            // If dividing by zero, show 'Infinity'.
            if (nextNumber === 0) {
                display.value = 'Infinity'; // Show 'Infinity' on the display.
                return; // Stop further calculations.
            } else {
                result /= nextNumber; // Divide the result by the next number.
            }
        }
    }

    // Show the final result on the display.
    display.value = result; // Update the display with the result.
}

function clearDisplay() {
    document.getElementById('display').value = '0'; // Set the display back to '0' when clearing.
}
