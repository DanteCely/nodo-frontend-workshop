var operation = "";
var total = "";

window.addEventListener("load", () => {
    let jkBtn = document.querySelector('#jk-btn');
    jkBtn.addEventListener("click", function(){
        Swal.fire('Just Kidding. \n \n This is a working calculator on Node JS environment. \n \n It can handle multiple operations within the same line. \n \n This works only with input via mouse.')
    });
})

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