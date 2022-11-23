var operation = "";
var total = "";

let op = (x) => {
    operation += x;
    let display = document.querySelector('.display');
    display.innerHTML = operation;
}

let erase = () => {
    console.log('Erase');
    operation = "";
    let display = document.querySelector('.display');
    display.innerHTML = 0;
}

let result = () => {
    total = eval(operation);
    let display = document.querySelector('.display');
    display.innerHTML = total;
    console.log(`The total of the operation is ${total}`);
    operation = "";
}