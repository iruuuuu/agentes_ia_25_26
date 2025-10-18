// ============================================================
// IMPORTACIÓN DE LIBRERÍAS
// ============================================================
import dotenv from 'dotenv';
import { exec } from 'child_process';

// Cargamos las variables que haya dentro del archivo .env
// Esto permite usar process.env.VARIABLE en el resto del código
dotenv.config();



// ============================================================
// CONFIGURACIÓN BÁSICA
// ============================================================

// Carga las variables de entorno o usa valores por defecto (ej. 4000)
const PORT = parseInt(process.env.PORT, 10) || 4000;
// Dirección base de la API. Si no hay API_BASE_URL en .env, usa localhost
const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost';

// Nombre de la colección o tabla dentro de la API (en este caso “students”)
const COLLECTION_NAME = 'students';

// Armamos la URL base completa, por ejemplo:
// http://localhost:4000/students
const BASE_URL = `${API_BASE_URL}:${PORT}/${COLLECTION_NAME}`;



// ============================================================
// FUNCIONES CRUD
// ============================================================

// Función auxiliar para ejecutar comandos cURL y devolver una promesa
const executeCurl = (command) => {
    return new Promise((resolve, reject) => {
        // Usamos -s (silent) para no mostrar la barra de progreso de cURL
        exec(command, (error, stdout, stderr) => {
            if (error) {
                return reject(error);
            }
            if (stderr) {
                // Algunos errores de cURL (como 404) salen por stderr
                return reject(new Error(stderr));
            }
            resolve(stdout);
        });
    });
};

const createStudent = async (studentData = {}) => {
    console.log("\n### 1. CREATE (POST) ###");
    // Escapamos las comillas dobles dentro del JSON para el comando de terminal
    const command = `curl -s -X POST ${BASE_URL} -H "Content-Type: application/json" -d "${JSON.stringify(studentData).replace(/"/g, '\\"')}"`;
    const response = await executeCurl(command);
    const createdStudent = JSON.parse(response);
    console.log("Respuesta del servidor:", createdStudent);
    return createdStudent; // Devolvemos el estudiante creado
};

const readAllStudents = async () => {
    console.log("\n### 2. READ ALL (GET) ###");
    const command = `curl -s -X GET ${BASE_URL}`;
    const response = await executeCurl(command);
    console.log("Respuesta del servidor:", JSON.parse(response));
};

const readStudentById = async (id = 1) => {
    console.log(`\n### 3. READ BY ID (GET) [ID: ${id}] ###`);
    const command = `curl -s -X GET ${BASE_URL}/${id}`;
    const response = await executeCurl(command);
    console.log("Respuesta del servidor:", JSON.parse(response));
};

const updateStudent = async (id = 1, studentData = {}) => {
    console.log(`\n### 4. UPDATE (PUT) [ID: ${id}] ###`);
    const command = `curl -s -X PUT ${BASE_URL}/${id} -H "Content-Type: application/json" -d "${JSON.stringify(studentData).replace(/"/g, '\\"')}"`;
    const response = await executeCurl(command);
    console.log("Respuesta del servidor:", JSON.parse(response));
};

const patchStudent = async (id = 1, partialData = {}) => {
    console.log(`\n### 5. UPDATE (PATCH) [ID: ${id}] ###`);
    const command = `curl -s -X PATCH ${BASE_URL}/${id} -H "Content-Type: application/json" -d "${JSON.stringify(partialData).replace(/"/g, '\\"')}"`;
    const response = await executeCurl(command);
    console.log("Respuesta del servidor:", JSON.parse(response));
};

const deleteStudent = async (id = 1) => {
    console.log(`\n### 6. DELETE [ID: ${id}] ###`);
    const command = `curl -s -X DELETE ${BASE_URL}/${id}`;
    const response = await executeCurl(command);
    // DELETE exitoso a menudo devuelve un cuerpo vacío
    if (response.trim() === '{}' || response.trim() === '') {
        console.log(`Respuesta del servidor: Estudiante con ID ${id} eliminado correctamente.`);
    } else {
        console.log("Respuesta del servidor:", JSON.parse(response));
    }
};

// ============================================================
// DATOS DE PRUEBA
// ============================================================
// Estos datos se usan para probar las funciones CRUD.

// Datos para crear un nuevo estudiante. El servidor asignará el 'id'.
const newStudent = {
    name: "Thomas Anderson",
    email: "neo@matrix.com",
    enrollmentDate: "2025-01-20",
    active: true,
    level: "advanced"
};

// Datos para actualización completa (PUT)
const updatedStudent = {
    name: "Samuel F. Enriquez [ACTUALIZADO]",
    email: "samuel.fernan@email.com",
    enrollmentDate: "2025-11-02",
    active: true,
    level: "advanced"
};

// Datos para actualización parcial (PATCH)
const partialUpdate = { level: "beginner" };


// ============================================================
// EJECUCIÓN AUTOMÁTICA
// ============================================================
// Esta función se ejecuta una sola vez al correr el archivo con Node.
// Usa async/await para asegurar que las operaciones se ejecutan en orden.

async function runCRUD() {
    console.log("===============================================");
    console.log("🚀 EJECUTANDO PRUEBAS CRUD CON cURL");
    console.log("===============================================");

    try {
        // 1️⃣ Crear un nuevo estudiante y capturar su ID
        const createdStudent = await createStudent(newStudent);
        const studentId = createdStudent.id;

        if (!studentId) {
            throw new Error("No se pudo obtener el ID del estudiante creado.");
        }

        // 2️⃣ Leer todos los estudiantes
        await readAllStudents();

        // 3️⃣ Leer un estudiante específico por su ID
        await readStudentById(studentId);

        // 4️⃣ Actualizar completamente un estudiante (PUT)
        await updateStudent(studentId, { ...updatedStudent, id: studentId });

        // 5️⃣ Actualizar parcialmente un estudiante (PATCH)
        await patchStudent(studentId, partialUpdate);

        // 6️⃣ Eliminar un estudiante
        await deleteStudent(studentId);

        console.log("\n===============================================");
        console.log("✅ TODAS LAS OPERACIONES CRUD FINALIZADAS CON ÉXITO");
        console.log("===============================================");
    } catch (error) {
        console.error("\n❌ OCURRIÓ UN ERROR DURANTE LA EJECUCIÓN:", error.message);
    }
}

// Llamamos a la función principal para que se ejecute automáticamente
runCRUD();
