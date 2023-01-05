import botonesData from './botones.json';

const Calculator = document.querySelector('#calculator');

botonesData.forEach((value) => {
    const {
        content,
        type,
        className
    } = value;

    const Button = document.createElement('button');
    Button.innerText = content;
    Button.classList.add(type);

    if (className) {
        Button.classList.add(className);
    }

    console.log({
        className
    });
    /*
    Button.onclick = () => {
        console.log({
            content
        });

        // Cuando sea un número o punto
        if (type === 'number') {
            // Agrega
        }
        // Cuando opere
        else if (type === 'operator') {
            // Operar
        } else {
            // extra
        }
    };*/

    Calculator.appendChild(Button);
});