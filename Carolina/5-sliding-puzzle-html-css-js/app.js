var rows = 4;
var colums = 4;
var imgorder = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];
window.onload = function () {


    for (let i = 1; i <= imgorder.length; i++) {
        let pieza = document.createElement("img");
        pieza.src = "img/" + i + ".png";
        document.getElementById("tablero").append(pieza);
    }

}