// src/api.js

/**
 * =================================================================
 * Petición a la API con fetch (Forma moderna y sencilla)
 * =================================================================
 * Esta es la forma estándar de hacer peticiones a una API en JavaScript moderno.
 * Funciona en Node.js (v18+) y en todos los navegadores.
 */

/**
 * Realiza una petición a una API REST.
 * @param {string} method - El método HTTP (ej. 'GET', 'POST').
 * @param {string} url - La URL completa del endpoint.
 * @param {object} [body=null] - El cuerpo de la petición (para POST, PUT, etc.).
 * @returns {Promise<any>} Una promesa que se resuelve con los datos de la respuesta en formato JSON.
 */
async function llamarApi(method, url, body = null) {
  // 1. Preparamos las opciones para la petición
  const options = {
    method: method.toUpperCase(), // 'GET', 'POST', etc.
    headers: {
      // Le decimos al servidor que enviaremos datos en formato JSON
      'Content-Type': 'application/json',
    },
  };

  try {
    // 2. Hacemos la petición a la URL y esperamos la respuesta
    const response = await fetch(url, options);

    // 3. Comprobamos si la respuesta fue exitosa (ej. código 200)
    if (!response.ok) {
      // Si no fue exitosa, creamos un error con el estado de la respuesta
      throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
    }

    // 4. Convertimos la respuesta a formato JSON y la devolvemos
    return await response.json();
  } catch (error) {
    // Si algo falla en cualquier paso, lo mostramos en la consola
    console.error('Hubo un problema con la llamada a la API:', error);
    throw error; // Lanzamos el error para que quien llamó a la función sepa que algo falló
  }
}

export { llamarApi };
