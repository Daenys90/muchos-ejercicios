let form = document.getElementById("formulario");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el funcionamiento normal del formulario
    limpiarErrores();
    let nombre = document.querySelector("#nombre").value;
    let asunto = document.querySelector("#asunto").value;
    let mensaje = document.querySelector("#mensaje").value;

    let resultado = validar(nombre, asunto, mensaje);
    if (resultado) {
        success();
    }
});

function limpiarErrores() {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorNombre").innerHTML = "";

    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
}

function success() {
    document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito :)";
}

function validar(nombre, asunto,  mensaje) {
    let inputValidado = true;

    let validacionNombre = /[a-zA-Z ]/g;
    if (!validacionNombre.test(nombre)) {
        document.querySelector(".errorNombre").innerHTML = "El nombre es requerido";
        inputValidado = false;
    }
    let validacionAsunto = /[a-zA-Z ]/g;
    if (!validacionAsunto.test(asunto)) {
        document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido";
        inputValidado = false;
    }
    let validacionMensaje = /[a-zA-Z ]/g;
    if (!validacionMensaje.test(mensaje)) {
        document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido";
        inputValidado = false;
    }
    return inputValidado;
}