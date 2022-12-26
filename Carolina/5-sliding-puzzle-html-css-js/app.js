pieza1 = document.createElement("img");
pieza2 = document.createElement("img");
piezas = [];
piezaNum = 0;

var rows = 4;
var colums = 4;
var imgorder = ["1","2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];
window.onload = function () {
    imgorder = imgorder.sort(function () {
        return Math.random() - 0.5
    }); 

    /* let p2 = document.createElement("img");
    p2.src = "img/1.png";
    p2.className = "piezaClass";
    p2.id = 1;
    document.getElementById("tablero").append(p2);
    p2.addEventListener('click', function(){setPieza2(p2)});
    console.log(document.getElementsByClassName("piezaClass"));  */

    for (let i = 1; i <= 16; i++) {
        console.log("i: " + i)
        let p1 = document.createElement("img");
        console.log(imgorder[i-1])
        p1.src = "img/" + imgorder[i-1] + ".png";
        p1.className = "piezaClass";
        p1.id = i;
        p1.addEventListener('click', function(){setPiezas(p1)});
        document.getElementById("tablero").append(p1);
    }
}

function setPiezas(pieza){
    if(piezaNum == 0){
        pieza1 = pieza;
        piezaNum = 1;
        console.log("pieza1: " + pieza1.id)
    }else if(piezaNum == 1){
        pieza2 = pieza;
        piezaNum = 0;
        intercambiar();
        console.log("pieza2: " + pieza2.id)
    }
}

function intercambiar(){
    src = "http://127.0.0.1:5500/Carolina/5-sliding-puzzle-html-css-js/img/1.png";
    if(pieza1.src == src || pieza2.src == src){
        let p2src = pieza1.src;
        let p1src = pieza2.src;
        let pzDef1 = document.getElementById(pieza2.id).src = p2src;
        let pzDef2 = document.getElementById(pieza1.id).src = p1src;
        console.log("True")
    }else{
        alert("solo se debe cambiar con el espacio vacio")
        console.log("False");
    }
    /* console.log("pieza 1: " + pieza1.id + " pieza 2: " + pieza2.id);

    let p2src = pieza1.src;
    let p1src = pieza2.src;
    let p2id = pieza1.id;
    let p1id = pieza2.id;
    console.log(p2id, " ", p1id);
    
    let pzDef1 = document.getElementById(pieza2.id).src = p2src;
    let pzDef2 = document.getElementById(pieza1.id).src = p1src;
    pzDef1.id = "2";
    pzDef2.id = "1"; */
}


