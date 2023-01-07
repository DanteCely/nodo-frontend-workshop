import botonesData from './botones.json' assert {  type: 'json'};

const Calculator = document.querySelector('#calculator');
let op = "";

const display = document.createElement("div");
display.innerHTML = "0";
Calculator.appendChild(display);  

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

  Button.onclick = () => {
    console.log({
      content
    });

    // Cuando sea un número o punto
    if (type === 'number') {
      // Agrega
      op += content;
      display.innerHTML = op;
    }
    // Cuando opere
    else if (type === 'operator') {
      // Operar
      if (content == "="){
        let res = eval(op);
        display.innerHTML = res;
        op = res;
      }
      else{
        op += content;
      }
    } else {
      // extra
      if (content == "C"){
        op = "";
      }
      else{
        op = op.substring(0, op.length-1);
      }
      display.innerHTML = op;
    }

  };

  Calculator.appendChild(Button);
});