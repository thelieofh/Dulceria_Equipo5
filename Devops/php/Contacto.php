<?php

// Verificar si se enviaron datos por POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Obtener los datos del formulario
    $Nombre = $_POST['Nombre'];
    $Fecha = $_POST['Fecha'];
    $Correo = $_POST['Correo'];
    $Comentarios = $_POST['Comentarios'];

    // Crear una cadena con los datos
    $datos = "Nombre: $Nombre, Fecha: $Fecha, Correo: $Correo, Comentarios: $Comentarios\n";
    // Ruta del archivo
    $ruta_archivo = "./Contactos.txt";

    // Abrir el archivo en modo de escritura (si no existe, se crea)
    // Usamos el modo "a" para agregar datos al final del archivo
    $manejador = fopen($ruta_archivo, 'a');

    // Escribir los datos en el archivo
    if ($manejador && fwrite($manejador, $datos)) {
        echo "Registro de contacto guardado correctamente.";
    } else {
        echo "Error al guardar el registro de contacto.";
    }

    // Cerrar el archivo
    fclose($manejador);
} else {
    echo "No se recibieron datos del registro de contacto.";
}
?>