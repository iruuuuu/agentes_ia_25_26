# ✅ Checklist - Proyecto Manual HTTP

## 🎬 Parte 1: Configuración inicial del proyecto
- [x] 1.1 Crear carpeta `manual-http-[tu-nombre-iniciales-apellidos]`  **Irene**
- [x] 1.1 Inicializar proyecto con `npm init` **Irene**
- [x] 1.1 Completar datos en `package.json` (nombre, versión, descripción, autor) **Samuel**
- [x] 1.2 Instalar dependencias: `json-server` y `dotenv` **Irene**
- [x] 1.3 Configurar `package.json` con `"type": "module"` **Samuel**
- [x] 1.3 Añadir scripts: **Samuel||Irene**
  - [x] `server:up`
  - [x] `crud:curl`
  - [x] `validate`
- [x] 1.4 Crear estructura de carpetas (src/, src/db, scripts/, images/) **Irene**
- [x] 1.5 Crear archivo `.env` **Samuel||Irene**
- [x] 1.5 Crear archivo `.env.example` **Samuel||Irene**
- [x] 1.5 Crear `.gitignore` **Irene**
- [ ] 1.6 Crear `src/db/db.json` con datos de students, courses y enrollments

---

## 💻 Parte 2: Script CRUD con funciones JavaScript
- [ ] 2.1 Crear `src/crud-curl.js` e importar dotenv
- [ ] 2.1 Cargar variables `PORT` y `API_BASE_URL`
- [ ] 2.1 Construir `BASE_URL`
- [ ] 2.2 Implementar funciones:
  - [ ] `createStudent(studentData)`
  - [ ] `readAllStudents()`
  - [ ] `readStudentById(id)`
  - [ ] `updateStudent(id, studentData)`
  - [ ] `patchStudent(id, partialData)`
  - [ ] `deleteStudent(id)`
- [ ] 2.3 Ejecutar funciones en orden con ejemplos
- [ ] 2.3 Añadir mensajes informativos al output

---

## 📚 Parte 3: Documentación CRUD con cURL
- [ ] 3.1 Documentar cada operación CRUD en `README.md`:
  - [ ] CREATE
  - [ ] READ ALL
  - [ ] READ BY ID
  - [ ] UPDATE
  - [ ] PATCH
  - [ ] DELETE
- [ ] 3.1 Explicar flags y métodos HTTP
- [ ] 3.1 Incluir respuestas reales con código de estado HTTP
- [ ] 3.2 Probar comandos cURL reales
- [ ] 3.2 Documentar las respuestas en el README

---

## ⚡ Parte 4: Thunder Client
- [ ] 4.1 Crear colección "CRUD Students API"
- [ ] 4.1 Configurar entorno de variables
- [ ] 4.2 Crear peticiones:
  - [ ] CREATE Student
  - [ ] GET All Students
  - [ ] GET Student by ID
  - [ ] UPDATE Student
  - [ ] PATCH Student
  - [ ] DELETE Student
- [ ] 4.3 Guardar capturas en carpeta `images/`
- [ ] 4.4 Documentar en README con capturas y explicación

---

## 📝 Parte 5: REST Client
- [ ] 5.1 Crear archivo `peticiones-crud.http`
- [ ] 5.1 Definir variables (@baseUrl, @port, @apiUrl)
- [ ] 5.2 Implementar operaciones CRUD:
  - [ ] CREATE Student
  - [ ] READ All Students
  - [ ] READ Student by ID
  - [ ] READ Filtrar estudiantes activos
  - [ ] READ Filtrar por nivel
  - [ ] UPDATE Student
  - [ ] PATCH Student
  - [ ] DELETE Student
- [ ] 5.3 Probar todas las peticiones en VS Code

---

## ✅ Parte 6: Script de validación
- [ ] 6.1 Crear `scripts/validate.sh`
- [ ] 6.1 Validar existencia de archivos requeridos
- [ ] 6.1 Validar configuraciones en `package.json`
- [ ] 6.1 Validar al menos 6 capturas en `images/`
- [ ] 6.1 Mostrar mensaje de éxito o fallo
- [ ] 6.2 Dar permisos de ejecución al script
- [ ] 6.2 Probar el script en terminal

---

## 📋 Parte 7: Checklist de progreso
- [ ] 7.1 Crear archivo `checklist.md` (este archivo)

---

## 🌿 Parte 8: Git y GitHub
- [ ] 8.1 Crear repositorio en GitHub `manual-http-[tu-nombre]`
- [ ] 8.1 Añadir profesor como colaborador
- [ ] 8.2 Inicializar Git en local y conectar remoto
- [ ] 8.2 Crear rama `main`
- [ ] 8.2 Subir código inicial
- [ ] 8.3 Crear rama `m1/http-request-response`
- [ ] 8.3 Trabajar en esa rama
- [ ] 8.4 Realizar commits incrementales con mensajes claros
- [ ] 8.5 Crear Pull Request hacia `main`
- [ ] 8.5 Asignar profesor como reviewer
- [ ] 8.6 Hacer merge tras aprobación
- [ ] 8.6 Crear y subir tag `M1/http-request-response`

---
✅ **Progreso general:**  
- [ ] Parte 1 completada  
- [ ] Parte 2 completada  
- [ ] Parte 3 completada  
- [ ] Parte 4 completada  
- [ ] Parte 5 completada  
- [ ] Parte 6 completada  
- [ ] Parte 7 completada  
- [ ] Parte 8 completada  
