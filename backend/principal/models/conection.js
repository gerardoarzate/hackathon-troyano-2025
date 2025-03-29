const mongoose = require('mongoose');

// Conectar a la base de datos
async function connectDB() {
  try {
    const uri = process.env.MONGO_URI; // URI de la base de datos desde .env
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión exitosa a MongoDB Atlas');
  } catch (error) {
    console.error('Error al conectar con MongoDB Atlas:', error);
    process.exit(1); // Finaliza la aplicación en caso de error
  }
}

// Exporta solo la función de conexión
module.exports = { connectDB };