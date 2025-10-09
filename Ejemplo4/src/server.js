// src/server.js
// Fichero encargado de levantar una API REST CON Express

import { config } from 'dotenv';
import express from 'express';
// Importamos correctamente la data de Pokémon desde db.js
import dataPokemon from './db/db.js'; 
import cors from 'cors';

// Variables de entorno 
config();
const PORT = process.env.PORT || 4000;
const NODE_ENV = process.env.NODE_ENV;
const Server_URL = process.env.Server_URL || "http://localhost";
const HOST = process.env.HOST || '0.0.0.0';

const app = express();

// CORS Middleware (¡FIXED! Usar app.use para middleware)
app.use(cors());

// Permito JSON como cuerpo de peticiones
app.use(express.json());

// Middleware de log
app.use((req, res, next) => {
    const timeData = new Date().toString();
    // FIXED: Corregida la sintaxis del template string
    console.log(`${timeData} ${req.method} ${req.url} - IP ${req.ip}`);
    next();
});

// Bienvenida...
app.get('/', (req, res) => {
    res.json({
        message: "Mini API de Pokemon",
        version: "1.0.0",
        endpoint: {
            "GET /dataPokemon": "Obtiene todos los pokemon de mi api"
        }
    });
});

// Ruta para obtener todos los Pokémon
app.get("/pokemon", (req, res) => {
    console.log("Peticion Get para traer todos los pokemon de mi api");
    res.json({
        success: true, // Corregido 'succes' a 'success'
        data: dataPokemon,
        // FIXED: Corregida la variable y la propiedad: dataPokemon.length
        count: dataPokemon.length 
    })
});


// INICIAR EL SERVIDOR
app.listen(PORT, HOST, () => {
    console.log(`Servidor de Iruuu --> ${Server_URL}:${PORT} (HOST: ${HOST})`);
});