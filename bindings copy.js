console.log("Starting");
function handleAddNewToDo(){
    console.log("Handling Add New ToDo Button");
}

function doBindings(){
    console.log("Bindings");
    var btn = document.getElementById("btnAdd");
    btn.onclick = handleAddNewToDo;
}

window.onload = doBindings;
console.log("Finished");
//doBindings();