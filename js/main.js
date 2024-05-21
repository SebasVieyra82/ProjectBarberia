function guardarInformacion() {
  // Obtener los valores del formulario
  var nombre = document.getElementById("nombreApellido").value;
  var telefono = document.getElementById("telefono").value;
  var mail = document.getElementById("mail").value;
  var dia = document.getElementById("dia").value;
  var hora = document.getElementById("hora").value;

  // Crear un objeto con la información
  var datos = {
      "nombre": nombre,
      "mail": mail,
      "dia": dia,
      "hora": hora
  };

  // Convertir el objeto a formato JSON
  var datosJSON = JSON.stringify(datos);

  // Guardar los datos en un archivo JSON
  localStorage.setItem('datosGuardados', datosJSON);

  // Limpiar el formulario después de guardar los datos
  document.getElementById("turnoForm").reset();
  alert("Información guardada correctamente.");
}