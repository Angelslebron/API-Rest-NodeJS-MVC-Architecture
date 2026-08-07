const express = require('express');
const router = express.Router();

const {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
} = require('../controllers/productoController');

router.route('/').get(obtenerProductos).post(crearProducto);

router.route('/:id').get(obtenerProductoPorId).put(actualizarProducto).delete(eliminarProducto);

module.exports = router;