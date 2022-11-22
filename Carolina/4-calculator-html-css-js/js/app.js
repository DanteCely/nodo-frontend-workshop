var operation = "";
var result = "";
function addValue(n){
    operation += n;
    document.getElementById('calculo').innerHTML = operation;
    console.log(operation);
}

function borrar(){
    operation = "";
    result = "";
    document.getElementById('calculo').innerHTML = operation;
    document.getElementById('result').innerHTML = result;
}

function resultado(){
    result = eval(operation);
    document.getElementById('result').innerHTML = result;
}

function deleteLastDigit(){
    let newOperation = operation.substring(0, operation.length-1);
    operation=newOperation;
    document.getElementById('calculo').innerHTML = operation;
    console.log(newOperation);
}
