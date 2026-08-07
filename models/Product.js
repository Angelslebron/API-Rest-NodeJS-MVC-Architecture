const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, 'El nombre del producto es obligatorio'],
      trim: true,
      minlength: [2, 'El nombre debe tener al menos 2 caracteres'],
      maxlength: [100, 'El nombre no puede superar los 100 caracteres'],
    },
    descripcion: {
      type: String,
      required: [true, 'La descripción del producto es obligatoria'],
      trim: true,
      maxlength: [500, 'La descripción no puede superar los 500 caracteres'],
    },
    precio: {
      type: Number,
      required: [true, 'El precio del producto es obligatorio'],
      min: [0, 'El precio no puede ser negativo'],
    },
    categoria: {
      type: String,
      required: [true, 'La categoría del producto es obligatoria'],
      trim: true,
    },
    stock: {
      type: Number,
      required: [true, 'El stock del producto es obligatorio'],
      min: [0, 'El stock no puede ser negativo'],
      default: 0,
    },
    disponible: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Producto', productoSchema);