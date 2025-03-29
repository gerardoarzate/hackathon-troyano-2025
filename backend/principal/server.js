require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { connectDB } = require('./models/conection');
const cors = require('cors');
const app = express();
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));



const PORT = process.env.PORT || 3000;

connectDB();
app.use(express.json()); // Middleware para parsear JSON

// Modelos
const User = mongoose.model('Users', new mongoose.Schema({}, { strict: false }), 'Users');
const Faucet = mongoose.model('Faucet', new mongoose.Schema({}, { strict: false }), 'Faucet');

// Obtener todos los usuarios
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios: ' + error.message });
    }
});

// Obtener todas las llaves (Faucets)
app.get('/faucets', async (req, res) => {
    try {
        const faucets = await Faucet.find();
        res.json(faucets);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las llaves: ' + error.message });
    }
});

// Crear un nuevo usuario
app.post('/users', async (req, res) => {
    try {
        const nuevoUsuario = new User(req.body);
        await nuevoUsuario.save();
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ error: 'Error al guardar el usuario: ' + error.message });
    }
});

// Crear una nueva llave (Faucet)
app.post('/faucets', async (req, res) => {
    try {
        const nuevaLlave = new Faucet(req.body);
        await nuevaLlave.save();
        res.status(201).json(nuevaLlave);
    } catch (error) {
        res.status(500).json({ error: 'Error al guardar la llave: ' + error.message });
    }
});

// Buscar usuarios por coincidencia parcial en el nombre
app.get('/users/search/:name', async (req, res) => {
  try {
      const { name } = req.params;
      const users = await User.find({ User: { $regex: name, $options: 'i' } });
      res.json(users);
  } catch (error) {
      res.status(500).json({ error: 'Error al buscar los usuarios: ' + error.message });
  }
});


// Eliminar un usuario por su nombre
app.delete('/users/:name', async (req, res) => {
    try {
        const usuarioEliminado = await User.findOneAndDelete({ User: req.params.name });
        if (!usuarioEliminado) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json(usuarioEliminado);
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el usuario: ' + error.message });
    }
});

// Actualizar un usuario por su nombre
app.put('/users/:name', async (req, res) => {
    try {
        const usuarioActualizado = await User.findOneAndUpdate(
            { User: req.params.name },
            { $set: req.body },
            { new: true }
        );
        if (!usuarioActualizado) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json(usuarioActualizado);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el usuario: ' + error.message });
    }
});

app.post('/login', async (req, res) => {
  try {
      const { email, password } = req.body;  
      const user = await User.findOne({ Email: email });  
      if (!user || user.Password !== password) {
          return res.status(401).json({ error: 'Credenciales incorrectas' });
      }
      res.json(user);  
  } catch (error) {
      res.status(500).json({ error: 'Error en el inicio de sesión: ' + error.message });
  }
});


app.use(express.json()); // Middleware para parsear JSON

// Ruta para recibir los datos del sensor
app.post('/api/consumo-agua', async (req, res) => {
    try {
        const { litros, timestamp } = req.body;
        console.log(" Datos recibidos del sensor:", { litros, timestamp });
        
        // Simulación de procesamiento de datos
        // Aquí podrías guardar los datos en una base de datos
        
        res.status(200).json({ message: "Datos recibidos correctamente" });
    } catch (error) {
        console.error(" Error al procesar los datos:", error.message);
        res.status(500).json({ message: "Error en el servidor" });
    }
});


// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
