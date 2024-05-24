const { createApp } = Vue; // Importa el método createApp de Vue.js

createApp({
  // Define los datos reactivos y los métodos de la aplicación
  data() {
    return {
      url: 'js/galeria.json', // URL de la API para obtener los datos de la galería
      datos: [], // Arreglo para almacenar los datos obtenidos de la API
      error: false, // Indicador de error para el manejo de errores en la API
    }
  },
  methods: {
    // Método para obtener datos de la API
    fetchData(url) {
      fetch(url) // Realiza una solicitud fetch a la URL especificada
        .then(response => response.json()) // Convierte la respuesta a formato JSON
        .then(
          data => {
            console.log(data) // Imprime los datos en la consola para depuración
            this.datos = data // Almacena los datos obtenidos en el arreglo datos
          })
        .catch(error => {
          console.log("Error:" + error) // Imprime el error en la consola para depuración
          this.error = true // Establece el indicador de error a true
        });
    }
  },
  // Hook del ciclo de vida de Vue.js que se ejecuta cuando la instancia es creada
  created() {
    this.fetchData(this.url) // Llama al método fetchData para obtener los datos de la API
  }
}).mount('#app') // Monta la aplicación de Vue.js en el elemento con id "app"
