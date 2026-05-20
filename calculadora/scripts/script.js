const display = document.getElementById('display');

let resultState = true;

function appendToDisplay(value) {
        display.style.color= 'white'

    if (resultState) {
        display.value = "";
        display.value += value;
        resultState = false
    } else {
        display.value += value;
    }

}

function erase() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
        resultState = true;
    }
    catch(error){
        display.value = "Error";
        display.style.color= '#ff9b9b'
        resultState = true;
    }
}