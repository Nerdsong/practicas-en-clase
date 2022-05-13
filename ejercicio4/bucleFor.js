const IMAGEN_RESULTADO = "https://m.media-amazon.com/images/I/51N-+1usqJL._AC_SX679_.jpg";


function generarIteraciones(){
    cantidadIteraciones = document.querySelector("#iteraciones_usuario").value;
    document.querySelector("#resultado_iteraciones").innerHTML = `
        `
    for(let i=1 ;i <= cantidadIteraciones;i++){
        document.querySelector("#resultado_iteraciones").innerHTML += `
        <img src= "${IMAGEN_RESULTADO}" alt= "imagen arturia" title= "imagen123" width= 300px >
        `;
    }
}
