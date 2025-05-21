function irPagina(){
    window.location.href = "modificacion.html"
}
function volver(){
    window.location.href = "main.html"
}

//------------------------------------------
var ingrediente = {}

function calcular(){

}
function agregarIngrdt(){
    ing = document.getElementById("ingrediente").value;
    costo = parseInt(getElementById("costo").value);
    stock = parseInt(document.getElementById("stock").value);
    ingrediente[ing]= {"costo": costo, "stock": stock}
    console.log(ingrediente);   
}
function mostrarIngrdt(){
    var contenedor = document.getElementById("contenedor");
    fetch('ingredientes.json')
        .then(response => response.json())
        .then(data => {
            const lista = document.createElement("ul");
            lista.className = "lista-ing";
            contenedor.insertAdjacentElement("afterend",lista);
            Object.keys(data).forEach(nombre => {
                contenedor.nextElementSibling.insertAdjacentHTML("afterbegin","<li>" + nombre + "</li>");
            });
                
        }).catch(error => {
            console.error("Error: ", error);
        });
}
