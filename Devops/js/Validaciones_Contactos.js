function validarFormulario() {
    // Obtener los valores de los campos
    const nombre = document.getElementById('Nombre').value.trim();
    const correo = document.getElementById('Correo').value.trim();
    const fecha = document.getElementById('Fecha').value.trim();
    const comentarios = document.getElementById('Comentarios').value.trim();

    // Verificar que todos los campos estén completos
    if (nombre === "" || correo === "" || fecha === "" || comentarios === "") {
        mostrarMensaje("Por favor, completa todos los campos.", "error");
        return false; // Evita que el formulario se envíe
    }

    // Si todo está correcto, permite que el formulario se envíe
    mostrarMensaje("Formulario enviado correctamente.", "exito");
    return true;
}

// Función para mostrar mensajes
function mostrarMensaje(mensaje, tipo) {
    const mensajeDiv = document.createElement('div');
    mensajeDiv.textContent = mensaje;
    mensajeDiv.className = tipo; // 'error' o 'exito'
    document.body.appendChild(mensajeDiv);
}

// Asignar la función de validación al evento 'submit' del formulario
document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    if (!validarFormulario()) {
        event.preventDefault(); // Evita que el formulario se envíe si la validación falla
    }
});