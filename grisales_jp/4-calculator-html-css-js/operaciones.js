import botones from './botones.json' assert {type:'json'};

const Calculadora = document.getElementById('calculadora');

botones.forEach( (value) => {
    const Button = document.createElement('button', {type:'button'});
    Button.innerText = value.content;
    Button.style.backgroundColor = value.color;

    Button.onclick = () => {
        console.log({ content: value.content });
    }

    Calculadora.appendChild(Button);
})