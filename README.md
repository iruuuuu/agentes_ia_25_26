 m1/http-request-response
## 🚀 README: manual-http-Irene-JH-Samuel-LarEnr

¡Bienvenido a nuestro proyecto! Este repositorio contiene el código y los recursos para el manejo de una API con operaciones **CRUD** (Crear, Leer, Actualizar, Borrar) utilizando una base de datos local y peticiones **HTTP** de forma manual.

---

## 🛠️ Estructura del Proyecto

**manual-http-Irene-JH-Samuel-LarEnr/**
* images/
* scripts/
    * validate.sh
* src/
    * db/
     * db.json
      * crud-curl.js
* .env.example
* .gitignore
* Readme.md (**¡Este archivo!**)
* checklist.md
* package-lock.json
* package.json
* peticiones-crud.http
### 📂 Componentes Clave

| Archivo/Carpeta | Descripción |
| :--- | :--- |
| **`src/db/db.json`** | El archivo que simula nuestra **base de datos** local. Contiene los datos que serán manipulados por las operaciones CRUD. |
| **`src/db/crud-curl.js`** | Posiblemente un *script* o módulo para realizar operaciones CRUD utilizando la herramienta de línea de comandos **`curl`** o similar. |
| **`.env.example`** | Un archivo de ejemplo que muestra las **variables de entorno** necesarias para configurar y ejecutar el proyecto (como puertos, claves, etc.). Debes crear un archivo `.env` a partir de este. |
| **`package.json`** | Contiene los **metadatos** del proyecto y la lista de **dependencias** y *scripts* definidos para el proyecto Node.js. |
| **`peticiones-crud.http`** | Un archivo que contiene las **peticiones HTTP** (GET, POST, PUT, DELETE) para probar y documentar las operaciones CRUD de la API, probablemente utilizando una extensión como *Rest Client* en VS Code. |
| **`scripts/validate.sh`** | Un *script* de *shell* (`.sh`) para realizar tareas de **validación** o pruebas automatizadas. |
| **`images/`** | Carpeta destinada a almacenar **imágenes** o capturas de pantalla relevantes para el proyecto o la documentación. |

---

## ⚙️ Configuración y Ejecución

Para poner en marcha este proyecto, sigue estos pasos:

1.  **Clonar el repositorio:**
    ```bash
    git clone [URL_DEL_REPOSITORIO]
    cd manual-http-Irene-JH-Samuel-La...
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
3.  **Configurar variables de entorno:**
    Crea un archivo llamado **`.env`** en la raíz del proyecto, copiando y rellenando los valores del archivo `.env.example`.
4.  **Iniciar el proyecto:**
    Revisa el archivo `package.json` para ver los *scripts* de inicio definidos. Típicamente, sería:
    ```bash
    npm start # o el script de inicio que corresponda
    ```

---

## 🧪 Pruebas y Uso de la API

Las peticiones de prueba se encuentran definidas en el archivo **`peticiones-crud.http`**. Si utilizas una extensión de cliente REST en tu editor (como **Thunder Client** o **Rest Client**), podrás ejecutar estas peticiones directamente.

### Ejemplos de Peticiones (Referencia)

| Operación | Método HTTP | Ruta (Ejemplo) | Descripción |
| :--- | :--- | :--- | :--- |
| **Crear** (Create) | `POST` | `/recursos` | Agrega un nuevo registro a `db.json`. |
| **Leer** (Read All) | `GET` | `/recursos` | Obtiene todos los registros. |
| **Leer** (Read One) | `GET` | `/recursos/1` | Obtiene un registro específico por ID. |
| **Actualizar** (Update) | `PUT`/`PATCH` | `/recursos/1` | Modifica un registro existente. |
| **Borrar** (Delete) | `DELETE` | `/recursos/1` | Elimina un registro por ID. |

---

## 🤝 Contribuyentes

* Irene Ming Jimenez Hinojosa
* Samuel Lara Enriquez

# agentes_ia_25_26: Ejercicios y Apuntes de Agentes Inteligentes

![Agentes IA Banner (Opcional - Reemplazar si tienes uno)](https://img.shields.io/badge/Módulo-Agentes%20Inteligentes-purple)
![Estado](https://img.shields.io/badge/Progreso-En%20Curso-yellowgreen)

Este repositorio almacena los **ejercicios, ejemplos de código y material de apoyo** desarrollados durante el módulo o curso de **Agentes Inteligentes (IA)**, correspondiente al curso académico **25/26**.

El contenido está organizado por temas o sesiones (Ejemplo0, Ejemplo1, etc.) para facilitar la revisión y el seguimiento del curso.

---

## 📚 Estructura del Repositorio

Los contenidos están clasificados por número de ejemplo, que generalmente corresponde a una sesión o tema específico:

| Carpeta | Descripción | Contenido Destacado |
| :--- | :--- | :--- |
| `Ejemplo0` | Introducción y configuración inicial. | Incluye el script de validación (`Validate.sh check`). |
| `Ejemplo1` | Sesión o Día 1 (Revisión). | Apuntes y código visto en el primer día o tema. |
| `Ejemplo2` | Sesión o Día 2 (Revisión). | Continuación de ejercicios y teoría. |
| `Ejemplo3` | Sesión o Día 3 - **Por Repasar**. | Últimos ejemplos y material que requiere revisión. |
| `Ejemplo4` | Sesión o Día 4. | Nuevo material añadido recientemente. |
| `manual-http-Irene-JH-Samuel-LaEnr` | Documentación específica. | Manual o protocolo para la gestión de peticiones HTTP, en fase de revisión. |
| `.gitignore` | Archivo de configuración. | Define archivos y carpetas que Git debe ignorar (como dependencias o archivos temporales). |
| `package.json` | Archivo de configuración de proyecto. | Listado de dependencias y scripts de proyecto. |

---

## 💻 Tecnologías y Conceptos Clave

Este módulo se centra en el estudio y la implementación práctica de:

* **Agentes Inteligentes:** Diseño, arquitectura y comportamiento.
* **Lenguajes de Programación:** (Añade los lenguajes principales, p. ej.: Python, JavaScript, u otros relevantes).
* **Protocolos de Comunicación:** (Como la gestión HTTP mencionada en la documentación).
* **Automatización y Scripts:** Uso de archivos de *shell* (`Validate.sh`).

---

## 🚀 Cómo Usar y Ejecutar los Ejemplos

1.  **Clonar el Repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/agentes_ia_25_26.git](https://github.com/tu-usuario/agentes_ia_25_26.git)
    ```
    *(Reemplaza `tu-usuario/agentes_ia_25_26.git` con la URL de tu repositorio)*

2.  **Instalar Dependencias (si aplica):**
    Si los ejemplos requieren librerías, usa el archivo `package.json` o equivalente:
    ```bash
    npm install  # O usa 'pip install -r requirements.txt' si es Python
    ```

3.  **Explorar y Ejecutar:**
    Navega a la carpeta de interés (p. ej., `cd Ejemplo3`) y ejecuta los scripts o abre los archivos principales.

---

## 🤝 Contribución

Si deseas contribuir o corregir errores en el material:

1.  Haz un **`Fork`** del repositorio.
2.  Crea una rama de característica (`git checkout -b fix/error-en-ejemplo1`).
3.  Abre un **`Pull Request`** con una descripción detallada de tus cambios.

---

## 📧 Contacto

* **Autor:** [Irene Ming Jimenez Hinojosa]
* **GitHub:** [@iruuuuu](https://github.com/iruuuuu)
