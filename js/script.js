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
function addToDisplay(value) {
    let display = document.getElementById('display');

    if (display.value === '0' || display.value === 'Infinity' || display.value === 'Error') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function calculate() {
    let display = document.getElementById('display');
    let expression = display.value;
    let operator;
    let num1 = '';
    let num2 = '';
    let result = 0;
    let operatorCount = 0;

    // Extract numbers and operator from the expression;
    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];
        if (char === '+' || char === '-' || char === '*' || char === '/') {
            operatorCount++;
            if (operatorCount > 1) {
                // If more than one operator is found, set error in input 
                display.value = 'Error';
                return;
            }
            operator = char;
        } else if (operator) {
            num2 += char;
        } else {
            num1 += char;
        }
    }

    // Ensure both num1 and num2 are valid or not
    if (num1 === '' || num2 === '' || operator === '' || operatorCount === 0) {
        display.value = 'Error';
        return;
    }

    num1 = Number(num1);
    num2 = Number(num2);

    // Perform calculation based on operator
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Infinity';
            break;
        default:
            result = 'Error';
    }

    display.value = result;
}

function clearDisplay() {
    document.getElementById('display').value = '0';
}