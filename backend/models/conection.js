const mongoose = require('mongoose');

// Esquema del usuario
const userSchema = new mongoose.Schema({
  /*email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fcmToken: { type: String }, */
});

// Exportar el modelo
const User = mongoose.model('User', userSchema);

// Conexión a MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    process.exit(1);
  }
};

module.exports = { User, connectDB };


