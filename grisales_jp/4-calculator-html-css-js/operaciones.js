import botones from './botones.json' assert {type:'json'};

const Calculadora = document.querySelector('#calculadora');
let numero = "";

const resultado = document.querySelector('#pantalla');
resultado.innerHTML = "0";
Calculadora.appendChild(resultado)

botones.forEach( (value) => {
    const { content, type, className } = value;

    const Button = document.createElement('button');
    Button.innerText = content;
    Button.classList.add(type);

    if(className) {
        Button.classList.add(className);
    }

    console.log({className});

    Button.onclick = () => {
        console.log({ content: value.content });

        //Funcionamiento números o puntos
        if(type === 'number'){
            numero += content;
            resultado.innerHTML = numero;
        }

        //Operando
        else if(type === 'operator' || type === 'equal') {
            if(content == "=") {
                let igual = eval(numero);
                resultado.innerHTML = igual;
                numero = igual;
            }
            else {
                numero += content;
            }
        }
        else {
            if (content == "C") {
                numero = "";
            }
            else {
                numero = numero.substring(0, numero.length-1);
            }
            resultado.innerHTML = numero;
        }
    }
    Calculadora.appendChild(Button);
});