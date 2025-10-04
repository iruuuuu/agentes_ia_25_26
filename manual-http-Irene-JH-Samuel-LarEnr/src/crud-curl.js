// Importar y configurar dotenv
import dotenv from 'dotenv';
dotenv.config();

// ==================== PASO 2.1 - Configuración de la URL base =====================


// Carga las variables de entorno o usa valores por defecto (ej. 4000)
const PORT = process.env.PORT || 4000;
const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost';
const COLLECTION_NAME = 'students';

// URL base completa para la colección de estudiantes (ej. http://localhost:4000/students)
const BASE_URL = `${API_BASE_URL}:${PORT}/${COLLECTION_NAME}`;


// ===================== PASO 2.2 - IMPLEMENTACIÓN DE FUNCIONES CRUD ====================

/**
 * Genera el comando cURL para crear un nuevo estudiante (POST).
 */
const createStudent = (studentData) => {
    // Convierte y envuelve en comillas simples en una sola línea.
    const command = `curl -X POST -H "Content-Type: application/json" -d '${JSON.stringify(studentData)}' ${BASE_URL}`;
    console.log(`\n### 1. CREATE (POST) ###\n${command}`);
};


/**
 * Genera el comando cURL para leer todos los estudiantes (GET).
 */
const readAllStudents = () => {
    const command = `curl ${BASE_URL}`; 
    console.log(`\n### 2. READ ALL (GET) ###\n${command}`);
};


/**
 * Genera el comando cURL para leer un estudiante específico por su ID (GET).
 */
const readStudentById = (id) => {
    const url = `${BASE_URL}/${id}`;
    const command = `curl ${url}`;
    console.log(`\n### 3. READ BY ID (GET) ###\n${command}`);
};


/**
 * Genera el comando cURL para reemplazar (PUT) un estudiante por su ID.
 */
const updateStudent = (id, studentData) => {
    const url = `${BASE_URL}/${id}`;
    // Convierte y envuelve en comillas simples en una sola línea.
    const command = `curl -X PUT -H "Content-Type: application/json" -d '${JSON.stringify(studentData)}' ${url}`;
    console.log(`\n### 4. UPDATE COMPLETO (PUT) ###\n${command}`);
};


/**
 * Genera el comando cURL para actualizar parcialmente (PATCH) un estudiante.
 */
const patchStudent = (id, partialData) => {
    const url = `${BASE_URL}/${id}`;
    // Convierte y envuelve en comillas simples en una sola línea.
    const command = `curl -X PATCH -H "Content-Type: application/json" -d '${JSON.stringify(partialData)}' ${url}`;
    console.log(`\n### 5. UPDATE PARCIAL (PATCH) ###\n${command}`);
};


/**
 * Genera el comando cURL para eliminar un estudiante por su ID (DELETE).
 */
const deleteStudent = (id) => {
    const url = `${BASE_URL}/${id}`;
    const command = `curl -X DELETE ${url}`;
    console.log(`\n### 6. DELETE (DELETE) ###\n${command}`);
};
