// function addToDisplay(value) {
//     let display = document.getElementById('display');
//     if (display.value === '0') {
//         display.value = value;
//     } else {
//         display.value += value;
//     }
// }

// function calculate() {
//     let display = document.getElementById('display');
//     display.value = eval(display.value);//this function calculate display value 
// }

// function clearDisplay() {
//     document.getElementById('display').value = '0';
// }





// new code to handle infinity and syntex error 

function addToDisplay(value) {
    let display = document.getElementById('display');
    
    // If display shows 'Infinity' or 'Error', reset it before adding the new value
    if (display.value === 'Infinity' || display.value === 'Error') {
        display.value = value;
    } else if (display.value === '0') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '0';
}
