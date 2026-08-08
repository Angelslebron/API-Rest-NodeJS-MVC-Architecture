const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true
        },

        descripcion: {
            type: String,
            required: true
        },

        precio: {
            type: Number,
            required: true,
            min: 0
        },

        categoria: {
            type: String,
            required: true
        },

        stock: {
            type: Number,
            required: true,
            min: 0
        },

        disponible: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Product', productSchema);