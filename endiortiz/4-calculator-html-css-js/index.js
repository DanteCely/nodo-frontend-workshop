import buttonsData from './buttons.json' assert { type: 'json' };

const keyboardCalculator = document.getElementById('keyboard');
const board = document.querySelector('.board');
let displayLastValue = document.querySelector('.last-value');
let displayCurrentValue = document.querySelector('.current-value');
let concatenateNumber = '';
let operationSign = '';


function calcular () {
    if (displayLastValue.innerText.indexOf('+') !== -1) {
        displayLastValue.innerText = displayLastValue.innerText.slice(0,-2);
        let result = Number(displayLastValue.innerText) + Number(displayCurrentValue.innerText);
        displayLastValue.innerText = result;
        displayCurrentValue.innerText = '';
        concatenateNumber = '';
    } else if (displayLastValue.innerText.indexOf('−') !== -1) {
        displayLastValue.innerText = displayLastValue.innerText.slice(0,-2);
        let result = Number(displayLastValue.innerText) + Number(displayCurrentValue.innerText);
        displayLastValue.innerText = result;
        displayCurrentValue.innerText = '';
        concatenateNumber = '';
    } else if (displayLastValue.innerText.indexOf('×') !== -1) {
        displayLastValue.innerText = displayLastValue.innerText.slice(0,-2);
        let result = Number(displayLastValue.innerText) + Number(displayCurrentValue.innerText);
        displayLastValue.innerText = result;
        displayCurrentValue.innerText = '';
        concatenateNumber = '';
    } else if (displayLastValue.innerText.indexOf('÷') !== -1) {
        displayLastValue.innerText = displayLastValue.innerText.slice(0,-2);
        let result = Number(displayLastValue.innerText) + Number(displayCurrentValue.innerText);
        displayLastValue.innerText = result;
        displayCurrentValue.innerText = '';
        concatenateNumber = '';
    } else {
        alert('Tienes que agregar un signo para poder operar')
    }
}


buttonsData.forEach((value) => {
    const button = document.createElement('button', { type: 'button' });
    const { content, type, horizontal, operation } = value;
    button.innerText = content;
    keyboardCalculator.appendChild(button);

    button.classList.add(type);
    
    if (horizontal) {
        button.classList.add(horizontal);
    }


    function acomodarBoard () {
        // Para ejecutar la funcion calcular si el usuario repite el mismo botón
        if (displayLastValue.innerText.indexOf(content) !== -1) {
            calcular();
            displayLastValue.innerText += ` ${content}`;
        } 
        
        // Para asegurarse de que no va a haber más de un signo:
        else if (["+", "−", "×", "÷"].some(fn => displayLastValue.innerText.includes(fn))) {
            displayLastValue.innerText = displayLastValue.innerText.slice(0, -2);
            displayLastValue.innerText += ` ${content}`;
            console.log('entra')
        } else if (displayLastValue.innerText == '') {
            displayLastValue.innerText = `${concatenateNumber} ${content}`;
            displayCurrentValue.innerText = '';
            concatenateNumber = '';
        } else {
            displayLastValue.innerText += ` ${content}`;
        }
    }


    button.onclick = () => {
        console.log({ content: value.content });

        // Numero o punto
        if (type === 'number') {
            // Para que no se concatene el punto si es el primer elemento de la variable
            if(concatenateNumber.length === 0 && content === '.') {
                return;
            }
            // Para que no se pueda agregar más de un punto decimal
            if((concatenateNumber.indexOf('.') === -1)  || (concatenateNumber.indexOf('.') !== -1 && content !== '.')) {
                concatenateNumber = concatenateNumber.toString() + content.toString();
                displayCurrentValue.innerText = concatenateNumber;
            }
        } 

        // Cuando opere
        else if (type === 'operator') {
            operationSign = operation;
            switch (operationSign) {
                case 'add':
                    acomodarBoard();
                    break;
                case 'subtract':
                    acomodarBoard();
                    break;
                case 'multiply':
                    acomodarBoard();
                    break;
                case 'divide':
                    acomodarBoard();
                    break;
                case 'equal':
                    calcular();
                    break;
                default:
                    displayCurrentValue.innerText = 'Operación no válida'
            }
        }

        // Cuando borre
        else if (type === 'delete') {
            concatenateNumber = concatenateNumber.toString().slice(0,-1);
            displayCurrentValue.innerText = concatenateNumber;
        } else {
            concatenateNumber = '';
            displayCurrentValue.innerText = concatenateNumber;
            displayLastValue.innerText = concatenateNumber;
        }
    }
});
