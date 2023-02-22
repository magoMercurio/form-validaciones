export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);  
    }
}

const validadores = {
    nacimiento: input => validarNacimiento(input),
}

const inputNacimiento = document.querySelector('#birth');

inputNacimiento.addEventListener('blur', (evento) => {
    validarNacimiento(evento.target);
});

function validarNacimiento(input) {
    const fechaCliente = new Date (input.value);
    let mensaje = "";

    if (!mayorDeEdad(fechaCliente)) {
        mensaje = "Debes tener al menos 18 años de edad";
    }
    //MENSAJITO PARA MOSTRAR QUE FACTORES DEBES CUMPLIR
    input.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha) {
    const fechaActual = new Date();
    const diferenciaFechas = new Date (
        fecha.getUTCFullYear() + 18,
        fecha.getUTCMonth(),
        fecha.getUTCDate()
    )
    return diferenciaFechas <= fechaActual;
}


