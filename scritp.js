let usuarioCorrecto = "hola";
let cotraseñaCorrecta = "hola";

function login(){
    // capturando los datos por medio de funciones DOOM
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value
    let resultado = document.getElementById("resultado");

    if(usuario == usuarioCorrecto && contraseña == cotraseñaCorrecta ){
        resultado.style.color = "green"
        resultado.innerHTML = "Acceso correcto"
    } else{
        resultado.style.color = "red"
        resultado.innerHTML = "Acceso denegado"
        usuario = document.getElementById("usuario").value=""
        contraseña = document.getElementById("contraseña").value=""
    }
}

