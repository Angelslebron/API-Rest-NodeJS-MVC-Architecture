require('dotenv').config();

const express = require('express');
const conectarDB = require('./config/db');
const productoRoutes = require('./routes/productoRoutes');

conectarDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ exito: true, mensaje: 'API de Productos funcionando correctamente' });
});

app.use('/api/productos', productoRoutes);

app.use((req, res) => {
  res.status(404).json({ exito: false, mensaje: `Ruta no encontrada: ${req.method} ${req.originalUrl}` });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ exito: false, mensaje: 'Error interno del servidor' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});