function validarFormulario() {
    // Obtener los valores de los campos
    const nombre = document.getElementById('Nombre').value.trim();
    const correo = document.getElementById('Correo').value.trim();
    const fecha = document.getElementById('Fecha').value.trim();
    const contrasena = document.getElementById('Contrasena').value.trim();
    const confirmContrasena = document.getElementById('Confirm_Contrasena').value.trim();

    // Verificar que todos los campos estén completos
    if (nombre === "" || correo === "" || fecha === "" || contrasena === "" || confirmContrasena === "") {
        mostrarMensaje("Por favor, completa todos los campos.", "error");
        return false; // Evitar que el formulario se envíe
    }

    // Validar que las contraseñas coincidan
    if (contrasena !== confirmContrasena) {
        mostrarMensaje("Las contraseñas no coiciden");
        return false; // Evitar que el formulario se envíe
    }

    // Validar el formato del correo electrónico
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(correo)) {
        mostrarMensaje("El correo presenta un caracter no disponible");
        return false; // Evitar que el formulario se envíe
    }

    // Si todo está correcto, mostrar mensaje de éxito y enviar el formulario
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
document.getElementById('formularioUsuarios').addEventListener('submit', function(event) {
    if (!validarFormulario()) {
        event.preventDefault(); // Evita que el formulario se envíe si la validación falla
    }
});