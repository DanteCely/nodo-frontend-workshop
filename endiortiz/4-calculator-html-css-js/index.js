import buttonsData from './assets/data/buttons.json' assert { type: 'json' };

const calculator = document.querySelector('.calculator');
const display = document.querySelector('.calculator__display');
let displayLastValue = document.querySelector('.last-value');
let displayCurrentValue = document.querySelector('.current-value');
let concatenateNumber = '';
let operationSign = '';
let dividioEntreCero = false;

// Función para realizar las respectivas operaciones cuando haya un signo
// en el elemento superior del display
function calcular () {
    // Si no hay numeros en el tablero, no sucede nada
    if ((displayCurrentValue.innerText == '') && displayLastValue.innerText == '') {
        return;
    } 
    else if (displayLastValue.innerText.endsWith('+')) {
        displayLastValue.innerText = displayLastValue.innerText.slice(0,-2);
        let result = Number(displayLastValue.innerText) + Number(displayCurrentValue.innerText);
        displayLastValue.innerText = result;
        displayCurrentValue.innerText = '';
        concatenateNumber = '';
    } else if (displayLastValue.innerText.endsWith('−')) {
        displayLastValue.innerText = displayLastValue.innerText.slice(0,-2);
        let result = Number(displayLastValue.innerText) - Number(displayCurrentValue.innerText);
        displayLastValue.innerText = result;
        displayCurrentValue.innerText = '';
        concatenateNumber = '';
    } else if (displayLastValue.innerText.endsWith('×')) {
        displayLastValue.innerText = displayLastValue.innerText.slice(0,-2);
        let result = Number(displayLastValue.innerText) * Number(displayCurrentValue.innerText);
        displayLastValue.innerText = result;
        displayCurrentValue.innerText = '';
        concatenateNumber = '';
    } else if (displayLastValue.innerText.endsWith('÷') && (Number(displayCurrentValue.innerText) > 0)) {
        displayLastValue.innerText = displayLastValue.innerText.slice(0,-2);
        let result = Number(displayLastValue.innerText) / Number(displayCurrentValue.innerText);
        displayLastValue.innerText = result;
        displayCurrentValue.innerText = '';
        concatenateNumber = '';
    } else if (displayLastValue.innerText.endsWith('÷') && (Number(displayCurrentValue.innerText) == 0)) {
        alert('No puedes dividir entre 0');
        displayCurrentValue.innerText = '';
        concatenateNumber = '';
    } else if (displayCurrentValue.innerText !== '' && (displayLastValue.innerText == '')) {
        return;
    } else {
        alert('Tienes que agregar un signo para poder operar')
    }
}


buttonsData.forEach((value) => {
    const button = document.createElement('button', { type: 'button' });
    const { content, type, horizontal, operation } = value;
    button.innerText = content;
    calculator.appendChild(button);

    button.classList.add(type);
    
    if (horizontal) {
        button.classList.add(horizontal);
    }

    // Función para acomodar display cuanto se presione un botón con el type "operator"
    function acomodarDisplay () {
        // Para que solo se pueda agregar un signo si ya hay números en el tablero
        if ((displayCurrentValue.innerText == '') && displayLastValue.innerText == '') {
            return;
        }
        // Si ya hay un signo arriba, se remplaza por el nuevo:
        else if (["+", "−", "×", "÷"].some(fn => displayLastValue.innerText.includes(fn)) && displayCurrentValue.innerText == '') {
            displayLastValue.innerText = displayLastValue.innerText.slice(0, -2);
            displayLastValue.innerText += ` ${content}`;
        } 
        // Para ejecutar la funcion calcular si el usuario repite el mismo botón de operación
        else if (["+", "−", "×", "÷"].some(fn => displayLastValue.innerText.includes(fn)) && displayCurrentValue.innerText !== '') {
            calcular();
            displayLastValue.innerText += ` ${content}`;
        }
        
        // Si el elemento superior no tiene nada, se sube el número concatenado y el signo de operación
        // También se vacía el elemento inferior y se resetea la variable concatenateNumber
        else if (displayLastValue.innerText == '') {
            displayLastValue.innerText = `${concatenateNumber.slice(0, 17)} ${content}`;
            displayCurrentValue.innerText = '';
            concatenateNumber = '';
        // Si el elemento superior ya tiene algo, se le concatena el signo
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
                displayCurrentValue.innerText = concatenateNumber.slice(0, 17);
            }
        } 

        // Cuando opere
        else if (type === 'operator') {
            operationSign = operation;
            switch (operationSign) {
                case 'add':
                    acomodarDisplay();
                    break;
                case 'subtract':
                    acomodarDisplay();
                    break;
                case 'multiply':
                    acomodarDisplay();
                    break;
                case 'divide':
                    acomodarDisplay();
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
