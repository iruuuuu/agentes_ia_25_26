//el fichero cliente lanzara peticiones a la api rest

// Importamos la función que acabamos de crear en api.js
import { llamarApi } from '../api.js';

const API_URL = 'http://localhost:4000'; // Usamos la URL base de tu servidor local

const traerTodosLosPokemon = async () => {
  try {
    console.log('Realizando petición para obtener todos los Pokémon...');
    // Usamos nuestra nueva y sencilla función para hacer una petición GET
    const respuesta = await llamarApi('GET', `${API_URL}/pokemon`);
    console.log('¡Respuesta recibida!');

    // Para ver el objeto completo sin abreviaturas como [Array] o [Object],
    // lo convertimos a un string JSON formateado. El '2' añade una bonita indentación.
    console.log(JSON.stringify(respuesta, null, 2));
  } catch (error) {
    console.error('Error al traer los Pokémon:', error.message);
  }
};

// Llamamos a la función para ejecutar la petición
traerTodosLosPokemon();