function guardarInformacion() {
  // Obtener los valores del formulario
  var nombre = document.getElementById("nombreApellido").value;
  var telefono = document.getElementById("telefono").value;
  var mail = document.getElementById("mail").value;
  var dia = document.getElementById("dia").value;
  var hora = document.getElementById("hora").value;

  // Validar que todos los campos estén completos
  if (!nombre || !telefono || !mail || !dia || !hora) {
      alert("Todos los campos son obligatorios. Por favor, complete todos los campos.");
      return;
  }

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