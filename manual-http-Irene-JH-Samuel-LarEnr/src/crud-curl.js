// ============================================================
// IMPORTACIÓN DE LIBRERÍAS
// ============================================================

// 🔹 dotenv: sirve para leer variables de entorno desde un archivo .env
//     (por ejemplo, la URL de la API o la configuración del puerto)
// 🔹 axios: librería para hacer peticiones HTTP (como GET, POST, PUT, etc.)
//     de forma más fácil que usar "fetch" o "curl"
import dotenv from 'dotenv';
import axios from 'axios';

// Cargamos las variables que haya dentro del archivo .env
// Esto permite usar process.env.VARIABLE en el resto del código
dotenv.config();



// ============================================================
// CONFIGURACIÓN BÁSICA
// ============================================================

// Puerto donde corre tu servidor JSON o tu API
// Si no tienes .env, usará 3000 por defecto
const PORT = 4000;

// Dirección base de la API. Si no hay API_BASE_URL en .env, usa localhost
const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost';

// Nombre de la colección o tabla dentro de la API (en este caso “students”)
const COLLECTION_NAME = 'students';

// Armamos la URL base completa, por ejemplo:
// http://localhost:3000/students
const BASE_URL = `${API_BASE_URL}:${PORT}/${COLLECTION_NAME}`;



// ============================================================
// FUNCIONES CRUD
// ============================================================
// Cada función usa "axios" para comunicarse con la API.
// Axios envía una solicitud HTTP (POST, GET, PUT, PATCH o DELETE)
// y devuelve una "promesa" con la respuesta del servidor.
// Por eso usamos "async" y "await", para esperar esa respuesta antes de continuar.


// ---------- CREATE (POST) ----------
// Crea un nuevo estudiante en la base de datos
async function createStudent(studentData) {
  try {
    // axios.post(URL, datos) → envía una petición POST con los datos del nuevo estudiante
    const response = await axios.post(BASE_URL, studentData);
    console.log("✅ Estudiante creado correctamente:", response.data);
  } catch (error) {
    // Si ocurre un error (por ejemplo, el servidor está apagado), lo mostramos
    console.log("❌ Error al crear estudiante:", error.message);
  }
}


// ---------- READ ALL (GET) ----------
// Lee (consulta) todos los estudiantes existentes
async function readAllStudents() {
  try {
    // axios.get(URL) → hace una petición GET para obtener todos los registros
    const response = await axios.get(BASE_URL);
    console.log("✅ Lista completa de estudiantes:", response.data);
  } catch (error) {
    console.log("❌ Error al obtener lista de estudiantes:", error.message);
  }
}


// ---------- READ BY ID (GET) ----------
// Busca y muestra un estudiante específico según su ID
async function readStudentById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    console.log(`✅ Estudiante con ID ${id}:`, response.data);
  } catch (error) {
    console.log(`❌ Error al obtener estudiante con ID ${id}:`, error.message);
  }
}


// ---------- UPDATE COMPLETO (PUT) ----------
// Reemplaza todos los datos de un estudiante existente
async function updateStudent(id, studentData) {
  try {
    // axios.put(URL, datos) → reemplaza completamente el registro con los nuevos datos
    const response = await axios.put(`${BASE_URL}/${id}`, studentData);
    console.log(`✅ Estudiante ${id} actualizado (PUT):`, response.data);
  } catch (error) {
    console.log(`❌ Error al actualizar estudiante ${id}:`, error.message);
  }
}


// ---------- UPDATE PARCIAL (PATCH) ----------
// Modifica solo algunos campos del estudiante (no todos)
async function patchStudent(id, partialData) {
  try {
    // axios.patch(URL, datos) → actualiza solo los campos enviados
    const response = await axios.patch(`${BASE_URL}/${id}`, partialData);
    console.log(`✅ Estudiante ${id} modificado parcialmente (PATCH):`, response.data);
  } catch (error) {
    console.log(`❌ Error al modificar parcialmente estudiante ${id}:`, error.message);
  }
}


// ---------- DELETE ----------
// Elimina un estudiante de la base de datos
async function deleteStudent(id) {
  try {
    // axios.delete(URL) → envía una petición DELETE al servidor
    const response = await axios.delete(`${BASE_URL}/${id}`);
    console.log(`✅ Estudiante ${id} eliminado:`, response.data);
  } catch (error) {
    console.log(`❌ Error al eliminar estudiante ${id}:`, error.message);
  }
}



// ============================================================
// DATOS DE PRUEBA
// ============================================================
// Estos datos se usan para probar las funciones CRUD.
// No son permanentes, podemos cambiarlos

// ID del estudiante que se va a leer, actualizar y eliminar
const STUDENT_ID = 8;

// Datos para crear un nuevo estudiante (con ID 8)
const newStudent = {
  id: "8", // ID asignado
  name: "Thomas Anderson",
  email: "neo@matrix.com",
  enrollmentDate: "2025-01-20",
  active: true,
  level: "advanced"
};

// Datos para actualización completa (PUT)
const updatedStudent = {
  id: 8,
  name: "Samuel F. Enríquez [ACTUALIZADO]",
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
// Llama a cada función CRUD en orden, esperando que cada una termine antes de pasar a la siguiente.

async function runCRUD() {
  console.log("===============================================");
  console.log("🚀 INICIANDO PRUEBA AUTOMÁTICA DE CRUD");
  console.log("===============================================");

  // 1️⃣ Crear un nuevo estudiante
  await createStudent(newStudent);

  // 2️⃣ Leer todos los estudiantes
  await readAllStudents();

  // 3️⃣ Leer un estudiante específico por su ID
  await readStudentById(STUDENT_ID);

  // 4️⃣ Actualizar completamente un estudiante (PUT)
  await updateStudent(STUDENT_ID, updatedStudent);

  // 5️⃣ Actualizar parcialmente un estudiante (PATCH)
  await patchStudent(STUDENT_ID, partialUpdate);

  // 6️⃣ Eliminar un estudiante
  await deleteStudent(STUDENT_ID);

  console.log("===============================================");
  console.log("✅ TODAS LAS OPERACIONES FINALIZADAS");
  console.log("===============================================");
}

// Llamamos a la función principal para que se ejecute automáticamente
runCRUD();
