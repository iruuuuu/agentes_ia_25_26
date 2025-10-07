# 📚 Parte 3: Documentación CRUD con cURL

Esta sección documenta las operaciones CRUD (Crear, Leer, Actualizar, Borrar) para la colección de `students` usando la herramienta de línea de comandos **cURL**.

> **Aviso:**  
> Los comandos `curl` incluyen el flag `-i` para mostrar las cabeceras HTTP y el código de estado.  
> La URL base para esta colección es:  
> `http://localhost:development/students`.

---

## 1. CREATE (POST)

### 🏷 Título descriptivo de la operación
**Crear un nuevo estudiante.**

### 📝 Descripción
Envía un nuevo objeto JSON al servidor.  
El servidor crea un nuevo recurso en la colección de `students` y le asigna un ID.

### 🖥 Comando cURL completo y funcional

```bash
# Comando cURL para crear un nuevo estudiante (Thomas Anderson)
curl -i -X POST \
-H "Content-Type: application/json" \
-d '{"name":"Thomas Anderson","email":"neo@matrix.com","enrollmentDate":"2025-01-20","active":true,"level":"advanced"}' \
http://localhost:development/students
```

### 🔍 Explicación detallada

| Parte del comando | Qué hace cada flag (-i, -X, -H, -d) | 🎯 Por qué se usa ese método HTTP | 📨 Qué headers se envían y por qué |
|--------------------|------------------------------------|----------------------------------|-----------------------------------|
| `-i` | Incluye las cabeceras de la respuesta HTTP. | `POST` para crear un nuevo recurso. |  |
| `-X POST` | Especifica el método de la solicitud. |  |  |
| `-H "Content-Type: application/json"` | Define el tipo de contenido enviado. |  | Indica al servidor que el cuerpo (-d) es JSON. |
| `-d '...'` | Envía el cuerpo de la solicitud. |  |  |

### ✅ Respuesta HTTP real obtenida

```http
HTTP/1.1 201 Created
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 172
Date: Tue, 07 Oct 2025 18:20:44 GMT

{
  "name": "Thomas Anderson",
  "email": "neo@matrix.com",
  "enrollmentDate": "2025-01-20",
  "active": true,
  "level": "advanced",
  "id": 10
}
```

### 📊 Explicación del código de estado HTTP
**201 Created** → Indica que la solicitud ha tenido éxito y se ha creado un nuevo recurso.  
Es el código estándar para una operación **POST** exitosa.

---

## 2. READ ALL (GET)

### 🏷 Título descriptivo de la operación
**Leer todos los estudiantes.**

### 📝 Descripción
Recupera una lista completa con todos los registros de estudiantes de la colección.

### 🖥 Comando cURL completo y funcional

```bash
# Comando cURL para leer todos los estudiantes
curl -i http://localhost:development/students
```

### 🔍 Explicación detallada

| Parte del comando | Qué hace cada flag | 🎯 Por qué se usa ese método HTTP | 📨 Qué headers se envían y por qué |
|--------------------|--------------------|----------------------------------|-----------------------------------|
| `-i` | Incluye las cabeceras de la respuesta HTTP. | `GET` (por defecto en cURL) se usa para recuperar recursos. | No se envían headers ni cuerpo. |

### ✅ Respuesta HTTP real obtenida

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 1540
Date: Tue, 07 Oct 2025 18:20:45 GMT

[
  { "id": 1, "name": "...", "email": "..." },
  { "id": 8, "name": "Samuel F. Enríquez [ACTUALIZADO]", "email": "..." }
  // ... más estudiantes ...
]
```

### 📊 Explicación del código de estado HTTP
**200 OK** → La solicitud fue exitosa y devuelve la lista de recursos.  
Código estándar para una operación **GET** exitosa.

---

## 3. READ BY ID (GET)

### 🏷 Título descriptivo de la operación
**Leer un estudiante específico por su ID.**

### 📝 Descripción
Recupera el registro de un solo estudiante utilizando su identificador único (`id=8`).

### 🖥 Comando cURL completo y funcional

```bash
# Comando cURL para leer el estudiante con ID 8
curl -i http://localhost:development/students/8
```

### 🔍 Explicación detallada

| Parte del comando | Qué hace cada flag | 🎯 Por qué se usa ese método HTTP | 📨 Qué headers se envían y por qué |
|--------------------|--------------------|----------------------------------|-----------------------------------|
| `-i` | Incluye las cabeceras de la respuesta HTTP. | `GET` se usa para recuperar un recurso específico. | No se requiere enviar headers ni data. |

### ✅ Respuesta HTTP real obtenida

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 172
Date: Tue, 07 Oct 2025 18:20:46 GMT

{
  "id": 8,
  "name": "Samuel F. Enríquez [ACTUALIZADO]",
  "email": "samuel.fernan@email.com",
  "enrollmentDate": "2025-11-02",
  "active": true,
  "level": "advanced"
}
```

### 📊 Explicación del código de estado HTTP
**200 OK** → Solicitud exitosa para recuperar un recurso específico.

---

## 4. UPDATE COMPLETO (PUT)

### 🏷 Título descriptivo de la operación
**Reemplazar un estudiante por su ID (Actualización Completa).**

### 📝 Descripción
Reemplaza completamente el recurso de estudiante con `id=8` con los datos proporcionados.  
El cuerpo de la solicitud debe contener la **representación completa** del recurso.

### 🖥 Comando cURL completo y funcional

```bash
# Comando cURL para actualizar COMPLETAMENTE el estudiante con ID 8
curl -i -X PUT \
-H "Content-Type: application/json" \
-d '{"id":8,"name":"Samuel F. Enríquez [ACTUALIZADO]","email":"samuel.fernan@email.com","enrollmentDate":"2025-11-02","active":true,"level":"advanced"}' \
http://localhost:development/students/8
```

### 🔍 Explicación detallada

| Parte del comando | Qué hace cada flag | 🎯 Por qué se usa ese método HTTP | 📨 Qué headers se envían y por qué |
|--------------------|--------------------|----------------------------------|-----------------------------------|
| `-i` | Incluye las cabeceras de la respuesta HTTP. | | |
| `-X PUT` | Se usa PUT para reemplazar completamente un recurso existente. | | |
| `-H "Content-Type: application/json"` | Indica que el cuerpo de la solicitud es JSON. | | Necesario para que el servidor entienda el formato de los datos. |
| `-d '...'` | Cuerpo JSON con la representación completa del recurso. | | |

### ✅ Respuesta HTTP real obtenida

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 172
Date: Tue, 07 Oct 2025 18:20:47 GMT

{
  "id": 8,
  "name": "Samuel F. Enríquez [ACTUALIZADO]",
  "email": "samuel.fernan@email.com",
  "enrollmentDate": "2025-11-02",
  "active": true,
  "level": "advanced"
}
```

### 📊 Explicación del código de estado HTTP
**200 OK** → La solicitud **PUT** ha sido procesada con éxito.

---

## 5. UPDATE PARCIAL (PATCH)

### 🏷 Título descriptivo de la operación
**Actualizar parcialmente un estudiante.**

### 📝 Descripción
Aplica modificaciones parciales al recurso con `id=8`,  
actualizando solo los campos que se envían en el cuerpo (por ejemplo, `level`).

### 🖥 Comando cURL completo y funcional

```bash
# Comando cURL para actualizar PARCIALMENTE el estudiante con ID 8
curl -i -X PATCH \
-H "Content-Type: application/json" \
-d '{"level":"beginner"}' \
http://localhost:development/students/8
```

### 🔍 Explicación detallada

| Parte del comando | Qué hace cada flag | 🎯 Por qué se usa ese método HTTP | 📨 Qué headers se envían y por qué |
|--------------------|--------------------|----------------------------------|-----------------------------------|
| `-i` | Incluye las cabeceras de la respuesta HTTP. | | |
| `-X PATCH` | Aplica modificaciones parciales sin reemplazar todo el recurso. | | |
| `-H "Content-Type: application/json"` | Indica que el cuerpo de la solicitud es JSON. | | Necesario para interpretar correctamente el objeto JSON. |
| `-d '...'` | Cuerpo JSON con solo los campos a modificar. | | |

### ✅ Respuesta HTTP real obtenida

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 172
Date: Tue, 07 Oct 2025 18:20:48 GMT

{
  "id": 8,
  "name": "Samuel F. Enríquez [ACTUALIZADO]",
  "email": "samuel.fernan@email.com",
  "enrollmentDate": "2025-11-02",
  "active": true,
  "level": "beginner"
}
```

### 📊 Explicación del código de estado HTTP
**200 OK** → La solicitud de actualización parcial (**PATCH**) fue procesada con éxito.

---

## 6. DELETE (DELETE)

### 🏷 Título descriptivo de la operación
**Eliminar un estudiante por su ID.**

### 📝 Descripción
Elimina de forma permanente el recurso del estudiante identificado por `id=8`.

### 🖥 Comando cURL completo y funcional

```bash
# Comando cURL para eliminar el estudiante con ID 8
curl -i -X DELETE http://localhost:development/students/8
```

### 🔍 Explicación detallada

| Parte del comando | Qué hace cada flag | 🎯 Por qué se usa ese método HTTP | 📨 Qué headers se envían y por qué |
|--------------------|--------------------|----------------------------------|-----------------------------------|
| `-i` | Incluye las cabeceras de la respuesta HTTP. | | |
| `-X DELETE` | Solicita la eliminación de un recurso específico. | | No requiere enviar data ni headers adicionales. |

### ✅ Respuesta HTTP real obtenida

```http
HTTP/1.1 204 No Content
X-Powered-By: Express
Date: Tue, 07 Oct 2025 18:20:49 GMT
Connection: keep-alive
```

### 📊 Explicación del código de estado HTTP
**204 No Content** → Indica que la solicitud **DELETE** ha tenido éxito y el servidor no tiene contenido para devolver.

---

---
# 🌩️ Thunder Client

##  Como usar Thunder client 👀

-`Instala la extensión de thunder client en code`
-`Abre thunder Client, pulsando su icono o pulsando ctrl+shift+R`
-`click sobre new request`
![TC_newrequest](./images/TCnewrequest.png)
-**Esto debería salir en una ventana emergente**
![Captura_Explicativa1](./images/capturaExplicativaTC.png)
**EXPLICACIÓN RÁPIDA:**
-<span style="color:red">Circulo rojo:</span>   **Desplegable** en el que indicaremos la acción a enviar con **send**
-<span style="color:red">Elpse roja:</span>     **Bar** en la que pondremos la **URL**          
-<span style="color:red">Cuadrado rojo:</span>  **Apartados** a rellenar para la acción que fueramos ha hacer y recibir  
-<span style="color:blue">Circulo azul:</span>  **Estado, Tamaño y Tiempo** de la petición enviada
-<span style="color:blue">Cuadrado azul:</span> **Apartados** para ver los resultados de la peticion
**EJEMPLO RESPUESTA ESPERADA:**
![Captura_Explicativa1](./images/capturaExplicativaTC_Respuesta.png)
## 4.1 ⚙ Configuración

📁 Crear una colección llamada **"CRUD Students API"** -> 

🌍 Configurar un entorno de variables con:
- `baseUrl`
- `port`
- `fullUrl` (combinación de ambas)

---
### ***No se puede hacer en la prueba gratuita***
📸 Captura: ![Warnings_Thunther_Client](./images/CapturaWarningsThuntherClient.png)

## 4.2 Peticiones

➕ **CREATE Student (POST)**  
Realizamos un **POST**, para crear un nuevo estudiante, lo enviaremos como **json** , y veremos lo que reciviremos.
Captura sobre el header del post: ![create_student](./images/Post_Headers_TC.png)
Captura sobre el body del post: ![create_student_body](./images/Post_Body_TC.png)
Captura sobre la respuesta del post: ![create_student_response](./images/Post_Response_TC.png)
Captura sobre el header de la respuesta del post: ![create_student_response_Headers](./images/Post_Response_Header_TC.png)
Captura sobre el cambio en la base de datos debido al post: ![create_student_response_BD](./images/Post_BD_TC.png)

---
**¿content-Type application/json?**  

Es el tipo de datos que vamos a enviar en el cuerpo (**body**) de la petición.


📋 **GET All Students (GET)**
Hacemos un **GET** (un select) de todos los estudiantes simplemente poniendo la **URL:** ***http://localhost:4000/students/***.   

Captura del resultado y header del get sobre todos los students: ![get_all_students](./images/Get_Headers&&Result_TC.png)
Captura de el header de la respuesta: ![get_all_students_header](./images/Get_Response_Header_TC.png)

🔍 **GET Student by ID (GET)**
Hacemos un **GET**  de un  estudiante por **ID**  poniendo la **URL:** ***http://localhost:4000/students/(id)*** en este caso 8   

Captura de el header y la respuesta del resultado al get por id: ![get_student_by_id](./images/GetID_Headers&&Result_TC.png)
Captura del header del resultado: ![get_student_by_id_header](./images/GetID_Response_Header_TC.png)

🔄 **UPDATE Student (PUT)**  
Hacemos un **PUT** (una actualización/update)  de un  estudiante  poniendo la **URL:** ***http://localhost:4000/students/(id)*** en este caso 8.   

Captura del body y el resultado: ![update_student_dody_result](./images/PUT_Body&&Result_TC.png)
Captura de los headers de ambos: ![update_student_headers](./images/PUT_Headers_TC.png)
Captura del cambio realizado en la base de datos: ![update_student_changes](./images/PUT_BD_TC.png)

---
**Diferencia entre PATCH y PUT**
**PUT** cambia todo el recurso en este caso el estudiante, En cambio **PATCH** cambia solo los campos enviados.

---

✏ **PATCH Student (PATCH)**  
Hacemos un **Patch** (un "parche")  de un  estudiante  poniendo la **URL:** ***http://localhost:4000/students/(id)*** en este caso 8 y cambiando el solo el email.   

Captura del body y resultado del patch: ![patch_student_body_result](./images/Patch_Body&&Result_TC.png)
Captura de los headers tanto del patch como del resultado: ![patch_student_headers](./images/Patch_Headers_TC.png)
Captura del cambio en la base de datos: ![patch_student_bd](./images/Patch_BD_TC.png)



🗑 **DELETE Student (DELETE)** 
Hacemos un **DELETE** (un "borrado")  de un  estudiante  poniendo la **URL:** ***http://localhost:4000/students/(id)*** en este caso 8  

Captura del header y resultado del delete: ![delete_student_header_result](./images/Del_Headers&&Result_TC.png)
Captura del header del resultado del delete: ![delete_student_header_response](./images/Get_Response_Header_TC.png)
Captura de el cambio realizado en la base de datos (borrar usuario id 8): ![delete_student_bd](./images/Del_DB_TC.png)

---

