document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (validateForm()) {
            this.submit();
        }
    });

    function validateForm() {
        const name = document.getElementById("name").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const select = document.getElementById("reason").value;

        if (name === "" || telefono === "" || email === "" || message === "" || select === "") {
            alert("Todos los campos son obligatorios");
            return false;
        }

        return true;
    }
});
