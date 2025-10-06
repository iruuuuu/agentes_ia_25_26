


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

