document.addEventListener("DOMContentLoaded", function () {
    // Función para manejar el formulario de contacto si es necesario
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            if (validateForm()) {
                this.submit();
            }
        });
    }
    
    function validateForm() {
        const form = document.querySelector('form');
        const name = document.querySelector('input[name="nombre"]').value.trim();
        const telefono = document.querySelector('input[name="telefono"]').value.trim();
        const email = document.querySelector('input[name="email"]').value.trim();
        const message = document.querySelector('textarea[name="message"]').value.trim();
        const consulta = document.querySelector('select[name="consulta"]').value;
        const terms = document.querySelector('input[name="terms"]').checked;
    
        if (!name || !telefono || !email || !message || consulta === "" || !terms) {
            alert("Todos los campos son obligatorios y debes aceptar los términos y condiciones.");
            return false;
        }
        return true;
    }

    // Función para manejar la visibilidad del menú de hamburguesa
    const hamburguesa = document.querySelector(".hamburguesa");
    const navLinks = document.querySelector(".nav_links");

    hamburguesa.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });

     // Agrega evento al cuerpo para cerrar el menú de hamburguesa al hacer clic en cualquier lugar fuera del menú
     document.body.addEventListener("click", function(e) {
        // Verifica si el clic no es en el hamburguesa o en uno de sus descendientes
        if (!hamburguesa.contains(e.target) && navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
        }
    });

});