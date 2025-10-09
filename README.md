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
