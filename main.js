function crearEquipo(event){
    event.preventDefault();
    const form = event.target;
    const nombre = form.nombre.value;
    const efectividad = form.efectividad.value;
    const p = document.createElement("p");
    p.innerHTML = `${nombre} - ${efectividad}`;
    const container = document.getElementById("resultados");
    container.appendChild(p);
}

function main(){
    const form = document.getElementById("equipos");
    form.addEventListener("submit",crearEquipo);
}
document.addEventListener("DOMContentLoaded",main);