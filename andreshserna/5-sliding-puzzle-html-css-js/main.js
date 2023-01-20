const dragstart_handler = ev => {
    console.log("dragstart")
    ev.dataTransfer.setData("text/plain", ev.target.id)
    ev.dataTransfer.dropEffect = "move";
}

const dragover_handler = ev => {
    console.log("dragOver");
    ev.preventDefault();
}
const drop_handler = ev => {
    console.log("drag")
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text/plain");
    ev.target.innerText = document.getElementById(data).innerText;
    document.getElementById(data).innerText = "";
}

const dragend_handler = ev => {
    console.log("dragEnd");
    // Remove all of the drag data
    ev.dataTransfer.clearData();
}