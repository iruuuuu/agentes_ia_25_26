#Opciones de CURL

## Metodos

| Metodo    |Descripcion
|-----------|----------------------------------------
|`-X GET`   |Fuerza el metodo GET
|`-X POST`  |Fuerza el metodo POST
|`-X PUT`   |Fuerza el metodo PUT
|`-x PATCH` |Fuerza el metodo PATCH
|`-x DELETE`|Fuerza el metodo DELETE


---


## Datos y cabeceras
| Opción          | Descripción                          
|-----------------|--------------------------------------
| `-d, --data`    | Envía datos en la petición.          
| `--data-raw`    | Envía datos sin procesar.            
| `--data-binary` | Envía datos binarios (archivo).      
| `-F, --form`    | Formulario multipart (subir archivos)
| `-H, --header`  | Añade cabeceras HTTP.                
    
---

## Salida y visualización
| Opción   | Descripción                             |
|----------|-----------------------------------------|
| `-i`     | Incluye cabeceras de respuesta.         |
| `-I`     | Solo muestra cabeceras (HEAD).          | 
| `-o <f>` | Guarda salida en archivo.               | 
| `-O`     | Guarda con nombre remoto.               | 
| `-L`     | Sigue redirecciones.                    | 
| `-s`     | Silencioso (sin barra progreso).        | 
| `-v`     | Verbose (muestra detalles).             | 
| `-w`     | Métricas personalizadas.                | 
                                                          
---

## Autenticación y seguridad
| Opción                 | Descripción                        
|------------------------|------------------------------------|
| `-u user:pass`         | Autenticación básica.              | 
| `--oauth2-bearer <tk>` | Autenticación OAuth2.              | 
| `--cert`               | Certificado cliente.               | 
| `--key`                | Clave privada cliente.             | 
