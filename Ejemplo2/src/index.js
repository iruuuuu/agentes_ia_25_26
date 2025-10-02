//IMPORTACIONES (siempre van al comienzo de mi archivo)
import dotenv from "dotenv";

//Cargamos las variables .env a este fichero

dotenv.config();

//Todas las variables estan en process.env.NOMBRE_DE_LA_VARIABLE

//mostrar por consola el valor de las variables de entono

console.log("URL de acceso: ", process.env.URL);

console.log("Puerto de acceso: ", process.env.PORT);

console.log(`Url con Puerto: ${process.env.URL}:${Number(process.env.PORT) + 1}`);

