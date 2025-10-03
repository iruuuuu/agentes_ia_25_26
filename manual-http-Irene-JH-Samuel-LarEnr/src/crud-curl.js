import dotenv from 'dotenv';
dotenv.config();

// Cargar variables de entorno
const PORT = process.env.PORT;
const API_BASE_URL = process.env.API_BASE_URL;

// Construir la URL base completa para la API
const BASE_URL = `${API_BASE_URL}:${PORT}`;