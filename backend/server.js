require('dotenv').config();
const express = require('express');
const { connectDB, User } = require('../models/conection'); // Importar conexión y modelo

const app = express();
app.use(express.json());

// Conectar a la base de datos
connectDB();

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API funcionando');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
