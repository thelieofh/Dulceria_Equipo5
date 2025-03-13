<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos del formulario
    $Nombre = $_POST['Nombre'];
    $Correo = $_POST['Correo'];
    $Fecha = $_POST['Fecha'];
    $Contrasena = $_POST['Contrasena'];
    $Confirm_Contrasena = $_POST['Confirm_Contrasena'];

    // Validar que las contraseñas coincidan
    if ($Contrasena !== $Confirm_Contrasena) {
        echo "Las contraseñas no coiciden.";
        exit;
    }

    // Validar el formato del correo electrónico
    if (!filter_var($Correo, FILTER_VALIDATE_EMAIL)) {
        echo "El correo presenta un caracter no disponible";
        exit; 
    }
    
    $datos = "Nombre: $Nombre, Correo: $Correo, Fecha: $Fecha, Contraseña: $Contrasena\n";
    $ruta_archivo = "./Usuarios.txt";

    // Abrir el archivo en modo de escritura (si no existe, se crea)
    $manejador = fopen($ruta_archivo, 'a');

    // Escribir los datos en el archivo
    if ($manejador && fwrite($manejador, $datos)) {
        echo "Formulario enviado correctamente.";
    } else {
        echo "Hubo un error al guardar los datos. Intenta nuevamente.";
    }

    // Cerrar el archivo
    fclose($manejador);
} else {
    // Si no se envió el formulario por POST
    echo "No se ha enviado el formulario.";
}
?>