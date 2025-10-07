

# 🌩️ Thunder Client

## 4.01 Como usar Thunder client 👀

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

Crear las siguientes peticiones en Thunder Client:

➕ **CREATE Student (POST)**  
`Realizamos un post, para crear un nuevo estudiante, lo enviaremos como json , y veremos lo que reciviremos`
📸 Captura: ![create_student](./images/Post_Headers_TC.png)
📸 Captura: ![create_student_body](./images/Post_Body_TC.png)
📸 Captura: ![create_student_response](./images/Post_Response_TC.png)
📸 Captura: ![create_student_response_Headers](./images/Post_Response_Header_TC.png)
📸 Captura: ![create_student_response_BD](./images/Post_BD_TC.png)



📋 **GET All Students (GET)**  
📸 Captura: ![get_all_students](./images/get_all_students.png)

🔍 **GET Student by ID (GET)**  
📸 Captura: ![get_student_by_id](./images/get_student_by_id.png)

🔄 **UPDATE Student (PUT)**  
📸 Captura: ![update_student](./images/update_student.png)

✏ **PATCH Student (PATCH)**  
📸 Captura: ![patch_student](./images/patch_student.png)

🗑 **DELETE Student (DELETE)**  
📸 Captura: ![delete_student](./images/delete_student.png)

---

## 4.3 📸 Capturas de pantalla

Realizar captura de pantalla de cada petición.  
Cada captura debe mostrar:

- 📤 Request completo (método, URL, headers, body si aplica)  
- 📥 Response completo (status, headers, body)  

💾 Guardar capturas en carpeta `images/` con nombres descriptivos.

---

## 4.4 📝 Documentación

Explicar en este README cómo usar Thunder Client.  
Incluir las capturas con descripción de cada operación.

---

### 📂 Estructura recomendada de imágenes

