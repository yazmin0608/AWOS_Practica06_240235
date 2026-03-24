import express from 'express';
import dotenv from 'dotenv';
import geminiRoutes from './routes/geminiRoutes.js';
import mercadoPagoRoutes from './routes/mercadoPagoRoutes.js';

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 2402;

// Middlewares básicos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('src/public'));
app.use('/ia', geminiRoutes);
app.use('/checkout', mercadoPagoRoutes);

// Configuración del Motor de Plantillas (Pug)
app.set('view engine', 'pug');
app.set('views', './src/views'); // Asegúrate de que la ruta sea correcta

// RUTA ACTUALIZADA PARA LA FASE 03
app.get('/', (req, res) => {
    // Cambiamos res.send por res.render para mostrar index.pug
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT} 🚀`);
});