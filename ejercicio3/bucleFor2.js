let cantidadIteraciones = "usuario";


function generarIteraciones(){
    cantidadIteraciones = document.querySelector("#iteraciones_usuario").value;
    document.querySelector("#resultado_iteraciones").innerHTML = `
        `
    for(let i=1 ;i <= cantidadIteraciones;i++){
        document.querySelector("#resultado_iteraciones").innerHTML += `
        <h3>Hola! </h3>
        `;
    }
}
