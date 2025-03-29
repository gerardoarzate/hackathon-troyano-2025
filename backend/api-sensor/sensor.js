const axios = require('axios'); // Librería para hacer solicitudes HTTP

// Simulación de datos del sensor
const datosSensor = {
    litros: (Math.random() * 10).toFixed(2), // Genera un número aleatorio entre 0 y 10
    timestamp: new Date().toISOString()      // Marca de tiempo actual
};

// Muestra los datos antes de enviarlos
console.log(" Enviando datos del sensor:", datosSensor);

// Enviar datos a la API
axios.post('http://localhost:3000/api/consumo-agua', datosSensor)
    .then(response => {
        console.log(" Respuesta del servidor:", response.data);
    })
    .catch(error => {
        console.error(" Error al enviar datos:", error.message);
    });
