console.log("hola mundo desde node")

import express from "express";
import cors from "cors";
import { config } from "dotenv";

//cargar las variables de entorno cargadas en memoria
config();

// crear un servidor con express

const app = express();
//crear variables basandonos en las variables de entorno cargadas con config()
const PORT=process.env.PORT  || 3002
const HOST=process.env.HOST  || "0.0.0.0"
const NODE_ENV=process.env.NODE_ENV  || "development"
const SERVER_URL=process.env.SERVER_URL  || "http://localhost:3002"
const AI_API_URL=process.env.AI_API_URL  || "http://localhost:11434"
const AI_MODEL=process.env.AI_MODEL  || "phi3:mini"

//Paso midleware a mi aplicacion

//a) habiliatar cors
app.use(cors())
// b) habilitar json para preguntas  y respuestas
app.use(express.json())



//(opcional) Crear una funcion que muestre info al usuario

const getInfoApi = () => {
    return{
        service : "Servicio api-ollama",
        status : "ready",
        endpoints:{
            "GET /api":"Mostramos informacion de la API-Ollama",
            "GET /api/modelos":"Mostramos informacion de los modelos disponibles",
            "POST /api/consulta":"Envia un prompt para realizar consultas a la IA"
        },
        model: AI_MODEL,
        host: `${HOST}:${PORT}`,
        ollama_url: AI_API_URL
    }
}




//---------GENERAR LOS ENDPOINTS


// =>
    app.get("/",(req,res)=>{
        res.json(getInfoApi())
    })

    //=> /api

    app.get("/api",(req,res)=>{
        res.json(getInfoApi())
    })



// api/consulta por POST
app.post("/api/consulta", async (req, res) => {
    const { prompt, model } = req.body || {};
    if (!prompt || typeof prompt !== "string") {
        error = new Error("Fallo de acceso al servidor con los modelos");
        res.status(400).json({
            error: error.message,
        });
        return;
    }
    const modelSelecte = model || AI_MODEL
try {
    const response = await fetch(`${AI_API_URL}/api/generate`,
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
                body:JSON.stringify({
                    model:modelSelecte,
                    prompt,
                    stream:"false",
                }),
                signal:AbortSignal.timeout(30000)
        });
    if(!response.ok){
        throw new Error("Error al obtener la respuesta de la IA");
    }else{
    const data = await response.json()
    res.json({
        response:data.response,
        prompt,
        model:modelSelecte
    })
    }
} catch (error) {
        res.status(502).json({error:error.message})
}
})






console.log(`${AI_API_URL}/api/tags`)

app.get("/api/modelos",async(req,res)=>{
    try {
        const response = await fetch(`${AI_API_URL}/api/tags`,
            {
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                },
                signal:AbortSignal.timeout(5000)
            });
        if(!response.ok){
            throw new Error("Error al obtener los modelos");
        }else{
        const data = await response.json()
        const models = data.models || []
        console.log(models)
        const nameModels =models.map(model=>model.name)
        res.json(nameModels)
        }
    } catch (error) {
            res.status(502).json({error:error.message})
    }
})


//levantar el servidor express para escuchar peticiones a mis endpoints

app.listen(PORT,HOST,()=>{
    console.log(`\t Servidor escuchando en http://${HOST} en el pueto ${PORT}`)
})






//decirle 