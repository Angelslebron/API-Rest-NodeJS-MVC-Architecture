require('dotenv').config();

const express = require('express');

const connectDB = require('./config/db');

const productRoutes = require('./routes/productRoutes');

const app = express();

connectDB();

app.use(express.json());

app.use('/api/productos', productRoutes);

app.get('/', (req, res) => {
    res.json({
        message: 'API funcionando'
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});