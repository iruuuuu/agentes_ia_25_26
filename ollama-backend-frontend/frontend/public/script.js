document.getElementById("btnModelos").addEventListener("click", async () => {
    try {
        const response = await fetch("http://localhost:3002/api/modelos");
        if(!response.ok){
            throw new Error(`Error, fetching modelos: ${response.statusText}`);
        }
        const data = await response.json();
        console.table(data.modelos);
        const nombreModelso = data.modelos.map((modelo) => modelo.nombre);
        document.getElementById("mostrarModelos").textContent = `Modelos disponibles: ${nombreModelso.join(", ")}`;
        

    } catch (error) {
        console.error("Error fetching modelos:", error);
    }
});