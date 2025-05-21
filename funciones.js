function irPagina(){
    window.location.href = "modificacion.html"
}
function volver(){
    window.location.href = "main.html"
}

//------------------------------------------
function calcular(){

}
function agregarIngrdt(){
    
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
