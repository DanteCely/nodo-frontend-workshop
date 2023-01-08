import botones from './botones.json' assert {type:'json'};

const Calculadora = document.querySelector('#calculadora');
const result = document.getElementById('#pantalla');

botones.forEach( (value) => {
    const { content, type, className } = value;

    const Button = document.createElement('button');
    Button.innerText = content;
    Button.classList.add(type);

    if(className) {
        Button.classList.add(className);
    }

    Button.onclick = () => {
        console.log({ content: value.content });

        /*/Funcionamiento números o puntos
        if(type === "number"){

        }

        //Operando
        else if(type === "operator") {

        }
        else(type === "set") {
            ;
        }*/
    }
    Calculadora.appendChild(Button);
})