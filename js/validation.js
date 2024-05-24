document.addEventListener("DOMContentLoaded", function () {
    // Maneja el formulario de contacto cuando el DOM está completamente cargado
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Previene el envío del formulario
            if (validateForm()) { // Valida el formulario
                sendEmail(); // Envía el "email" simulado
            }
        });
    }
    
    // Función para validar los campos del formulario
    function validateForm() {
        // Obtiene los valores de los campos del formulario y los recorta para eliminar espacios en blanco
        const name = document.querySelector('input[name="nombre"]').value.trim();
        const telefono = document.querySelector('input[name="telefono"]').value.trim();
        const email = document.querySelector('input[name="email"]').value.trim();
        const message = document.querySelector('textarea[name="message"]').value.trim();
        const consulta = document.querySelector('select[name="consulta"]').value;
        const terms = document.querySelector('input[name="terms"]').checked;
    
        // Verifica que todos los campos estén completos y los términos aceptados
        if (!name || !telefono || !email || !message || consulta === "" || !terms) {
            alert("Todos los campos son obligatorios y debes aceptar los términos y condiciones.");
            return false; // Retorna false si falta algún campo o no se aceptaron los términos
        }
        return true; // Retorna true si todos los campos son válidos
    }

    // Función para simular el envío de un email
    function sendEmail() {
        // Obtiene los valores de los campos del formulario y los recorta para eliminar espacios en blanco
        const name = document.querySelector('input[name="nombre"]').value.trim();
        const telefono = document.querySelector('input[name="telefono"]').value.trim();
        const email = document.querySelector('input[name="email"]').value.trim();
        const message = document.querySelector('textarea[name="message"]').value.trim();
        const consulta = document.querySelector('select[name="consulta"]').value;

        // Contenido del "email" a enviar
        const emailContent = `
            Nombre: ${name}
            Teléfono: ${telefono}
            Correo Electrónico: ${email}
            Tipo de Consulta: ${consulta}
            Mensaje: ${message}
        `;

        // Muestra el contenido del "email" en la consola
        console.log("Email enviado con el siguiente contenido:");
        console.log(emailContent);
        alert("Mensaje enviado correctamente."); // Alerta de confirmación
    }

    // Maneja la visibilidad del menú hamburguesa
    const hamburguesa = document.querySelector(".hamburguesa");
    const navLinks = document.querySelector(".nav_links");

    if (hamburguesa && navLinks) {
        hamburguesa.addEventListener("click", function() {
            navLinks.classList.toggle("active"); // Alterna la visibilidad del menú
        });

        // Cierra el menú hamburguesa al hacer clic fuera de él
        document.body.addEventListener("click", function(e) {
            if (!hamburguesa.contains(e.target) && navLinks.classList.contains("active")) {
                navLinks.classList.remove("active"); // Cierra el menú
            }
        });
    }
});
