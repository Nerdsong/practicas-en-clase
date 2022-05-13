let cantidadOpciones = "cantidad de opciones elegidas por ususario";

function generarOpciones(){
    cantidadOpciones = document.querySelector("#iteraciones_usuario").value;
    document.querySelector("#lista_suscripciones").innerHTML = ``
    for ( i=1 ; i <= cantidadOpciones; i++ ) {
        document.querySelector("#lista_suscripciones").innerHTML +=`
        <option value="${i}">opcion${i}</option>
        `               
    }

}