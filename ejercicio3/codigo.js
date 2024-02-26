document.addEventListener("DOMContentLoaded", function () {

    var valor1Input = document.getElementById("valor1");
    var valor2Input = document.getElementById("valor2");
    var resultadoSpan = document.querySelector(".resultado");
    var botonSumar = document.getElementById("btn-sumar");
    var botonRestar = document.getElementById("btn-restar");

    // sumacion
    botonSumar.addEventListener("click", function () {
        var valor1 = parseInt(valor1Input.value) || 0;
        var valor2 = parseInt(valor2Input.value) || 0;
        var resultado = valor1 + valor2;
        resultadoSpan.textContent = resultado;
         });

    // restacion
    botonRestar.addEventListener("click", function () {
        var valor1 = parseInt(valor1Input.value) || 0;
        var valor2 = parseInt(valor2Input.value) || 0;
        var resultado = Math.max(valor1 - valor2, 0); 
        resultadoSpan.textContent = resultado;
    });
});
