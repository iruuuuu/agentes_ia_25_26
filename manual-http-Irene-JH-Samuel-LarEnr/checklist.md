# ✅ Checklist - Proyecto Manual HTTP

## 🎬 Parte 1: Configuración inicial del proyecto
- [x] 1.1 Crear carpeta `manual-http-[tu-nombre-iniciales-apellidos]`  **Irene**
- [x] 1.1 Inicializar proyecto con `npm init` **Irene**
- [x] 1.1 Completar datos en `package.json` (nombre, versión, descripción, autor) **Samuel**
- [x] 1.2 Instalar dependencias: `json-server` y `dotenv` **Irene||Samuel**
- [x] 1.3 Configurar `package.json` con `"type": "module"` **Samuel**
- [x] 1.3 Añadir scripts: **Samuel||Irene**
  - [x] `server:up`
  - [x] `crud:curl`
  - [x] `validate`
- [x] 1.4 Crear estructura de carpetas (src/, src/db, scripts/, images/) **Irene**
- [x] 1.5 Crear archivo `.env` **Samuel||Irene**
- [x] 1.5 Crear archivo `.env.example` **Samuel||Irene**
- [x] 1.5 Crear `.gitignore` **Irene**
- [x] 1.6 Crear `src/db/db.json` con datos de students, courses y enrollments **Samuel||Irene**

---

## 💻 Parte 2: Script CRUD con funciones JavaScript
- [x] 2.1 Crear `src/crud-curl.js` e importar dotenv **Irene**
- [x] 2.1 Cargar variables `PORT` y `API_BASE_URL` **Irene**
- [x] 2.1 Construir `BASE_URL` **Irene**
- 2.2 Implementar funciones: 
  - [x] `createStudent(studentData)` **Irene**
  - [x] `readAllStudents()` **Irene**
  - [x] `readStudentById(id)` **Irene**
  - [x] `updateStudent(id, studentData)` **Irene**
  - [x] `patchStudent(id, partialData)` **Irene**
  - [x] `deleteStudent(id)` **Irene**
- [x] 2.3 Ejecutar funciones en orden con ejemplos **Irene**
- [x] 2.3 Añadir mensajes informativos al output **Irene**

---

## 📚 Parte 3: Documentación CRUD con cURL
- [x] 3.1 Documentar cada operación CRUD en `README.md`: **Irene**
  - [x] CREATE  **Irene**
  - [x] READ ALL  **Irene**
  - [x] READ BY ID  **Irene**
  - [x] UPDATE  **Irene**
  - [x] PATCH **Irene**
  - [x] DELETE  **Irene**
- [x] 3.1 Explicar flags y métodos HTTP **Irene**
- [x] 3.1 Incluir respuestas reales con código de estado HTTP **Irene**
- [x] 3.2 Probar comandos cURL reales **Irene**
- [x] 3.2 Documentar las respuestas en el README  **Irene**

---

## ⚡ Parte 4: Thunder Client
- [x] 4.1 Crear colección "CRUD Students API" **no se pudede hace solo version de pago, se pondrá manualmente -Samuel**
- [x] 4.1 Configurar entorno de variables **no se pudede hace solo version de pago, se pondrá manualmente -Samuel**
- 4.2 Crear peticiones: 
  - [x] CREATE Student **Samuel**
  - [x] GET All Students **Samuel**
  - [x] GET Student by ID **Samuel**
  - [x] UPDATE Student **Samuel**
  - [x] PATCH Student **Samuel**
  - [x] DELETE Student **Samuel**
- [x] 4.3 Guardar capturas en carpeta `images/` **Samuel**
- [x] 4.4 Documentar en README con capturas y explicación **Samuel**

---

## 📝 Parte 5: REST Client
- [x] 5.1 Crear archivo `peticiones-crud.http` **Irene**
- [x] 5.1 Definir variables (@baseUrl, @port, @apiUrl)  **Samuel**
- [x] 5.2 Implementar operaciones CRUD: **Samuel**
  - [x] CREATE Student  **Samuel**
  - [x] READ All Students **Samuel**
  - [x] READ Student by ID  **Samuel**
  - [x] READ Filtrar estudiantes activos  **Samuel**
  - [x] READ Filtrar por nivel  **Samuel**
  - [x] UPDATE Student  **Samuel**
  - [x] PATCH Student **Samuel**
  - [x] DELETE Student  **Samuel**
  - [x] 5.3 Probar todas las peticiones en VS Code  **Samuel**

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
- [x] 7.1 Crear archivo `checklist.md` (este archivo) **Samuel**

---

## 🌿 Parte 8: Git y GitHub
- [x] 8.1 Crear repositorio en GitHub `manual-http-[tu-nombre]`**Irene**
- [x] 8.1 Añadir profesor como colaborador  **Irene**
- [x] 8.2 Inicializar Git en local y conectar remoto  **Irene**
- [x] 8.2 Crear rama `main` **Irene**
- [x] 8.2 Subir código inicial  **Irene** || **Samuel**
- [x] 8.3 Crear rama `m1/http-request-response`**Irene**
- [x] 8.3 Trabajar en esa rama **Irene** || **Samuel**
- [ ] 8.4 Realizar commits incrementales con mensajes claros
- [x] 8.5 Crear Pull Request hacia `main`
- [x] 8.5 Asignar profesor como reviewer
- [ ] 8.6 Hacer merge tras aprobación
- [ ] 8.6 Crear y subir tag `M1/http-request-response`

---
✅ **Progreso general:**  
- [x] Parte 1 completada  
- [x] Parte 2 completada  
- [x] Parte 3 completada  
- [x] Parte 4 completada  
- [x] Parte 5 completada  
- [ ] Parte 6 completada  
- [ ] Parte 7 completada  
- [ ] Parte 8 completada  
