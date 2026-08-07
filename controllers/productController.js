const Producto = require('../models/Producto');

const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.status(200).json({ exito: true, total: productos.length, data: productos });
  } catch (error) {
    res.status(500).json({ exito: false, mensaje: 'Error al obtener los productos', error: error.message });
  }
};

const obtenerProductoPorId = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) {
      return res.status(404).json({ exito: false, mensaje: 'Producto no encontrado' });
    }
    res.status(200).json({ exito: true, data: producto });
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({ exito: false, mensaje: 'ID de producto inválido' });
    }
    res.status(500).json({ exito: false, mensaje: 'Error al obtener el producto', error: error.message });
  }
};

const crearProducto = async (req, res) => {
  try {
    const { nombre, descripcion, precio, categoria, stock, disponible } = req.body;
    const nuevoProducto = new Producto({ nombre, descripcion, precio, categoria, stock, disponible });
    const productoGuardado = await nuevoProducto.save();
    res.status(201).json({ exito: true, mensaje: 'Producto creado exitosamente', data: productoGuardado });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errores = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ exito: false, mensaje: 'Error de validación', errores });
    }
    res.status(500).json({ exito: false, mensaje: 'Error al crear el producto', error: error.message });
  }
};

const actualizarProducto = async (req, res) => {
  try {
    const { nombre, descripcion, precio, categoria, stock, disponible } = req.body;
    const productoActualizado = await Producto.findByIdAndUpdate(
      req.params.id,
      { nombre, descripcion, precio, categoria, stock, disponible },
      { new: true, runValidators: true }
    );
    if (!productoActualizado) {
      return res.status(404).json({ exito: false, mensaje: 'Producto no encontrado' });
    }
    res.status(200).json({ exito: true, mensaje: 'Producto actualizado exitosamente', data: productoActualizado });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errores = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ exito: false, mensaje: 'Error de validación', errores });
    }
    if (error.name === 'CastError') {
      return res.status(400).json({ exito: false, mensaje: 'ID de producto inválido' });
    }
    res.status(500).json({ exito: false, mensaje: 'Error al actualizar el producto', error: error.message });
  }
};

const eliminarProducto = async (req, res) => {
  try {
    const productoEliminado = await Producto.findByIdAndDelete(req.params.id);
    if (!productoEliminado) {
      return res.status(404).json({ exito: false, mensaje: 'Producto no encontrado' });
    }
    res.status(200).json({ exito: true, mensaje: 'Producto eliminado exitosamente', data: productoEliminado });
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({ exito: false, mensaje: 'ID de producto inválido' });
    }
    res.status(500).json({ exito: false, mensaje: 'Error al eliminar el producto', error: error.message });
  }
};

module.exports = { obtenerProductos, obtenerProductoPorId, crearProducto, actualizarProducto, eliminarProducto };