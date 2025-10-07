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
    const command = `curl -X POST -H "Content-Type: application/json" 
    -d '${JSON.stringify(studentData)}' ${BASE_URL}`;
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
    const command = `curl -X PUT 
    -H "Content-Type: application/json" 
    -d '${JSON.stringify(studentData)}' ${url}`;
    console.log(`\n### 4. UPDATE COMPLETO (PUT) ###\n${command}`);
};


/**
 * Genera el comando cURL para actualizar parcialmente (PATCH) un estudiante.
 */
const patchStudent = (id, partialData) => {
    const url = `${BASE_URL}/${id}`;
    // Convierte y envuelve en comillas simples en una sola línea.
    const command = `curl -X PATCH 
    -H "Content-Type: application/json" 
    -d '${JSON.stringify(partialData)}' ${url}`;

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


// ================================== PASO 2.3 - EJECUCIÓN DEL SCRIPT ==========================
// Para ejecutarlo --> node src/crud-curl.js

console.log('====================================================');
console.log('GENERACIÓN DE COMANDOS cURL PARA OPERACIONES CRUD');
console.log('====================================================');

// --- Datos de Ejemplo (Correctos para tu db.json) ---
// Usaremos el ID 8 (Samuel Fernandez) para las operaciones de modificacion.
const STUDENT_ID_TO_OPERATE = 8; 

// Datos para la operación CREATE (POST)
const dataNewStudent = {
    name: "Thomas Anderson",
    email: "neo@matrix.com",
    enrollmentDate: "2025-01-20",
    active: true,
    level: "advanced"
};

// Datos para la operación UPDATE COMPLETO (PUT)
const dataUpdatedStudent = {
    id: 8, 
    name: "Samuel F. Enríquez [ACTUALIZADO]", // Campo modificado
    email: "samuel.fernan@email.com",
    enrollmentDate: "2025-11-02",
    active: true, // Campo modificado
    level: "advanced"
};

// Datos para la operación UPDATE PARCIAL (PATCH)
const dataPartialUpdate = {
    level: "beginner" // Solo envía el campo a modificar
};

// --- Ejecución de las Funciones en Orden ---
createStudent(dataNewStudent);
readAllStudents();
readStudentById(STUDENT_ID_TO_OPERATE);
updateStudent(STUDENT_ID_TO_OPERATE, dataUpdatedStudent);
patchStudent(STUDENT_ID_TO_OPERATE, dataPartialUpdate);
deleteStudent(STUDENT_ID_TO_OPERATE);

console.log('\n====================================================');
console.log('FINALIZADO. Copia y ejecuta los comandos en tu terminal.');
console.log('====================================================\n');