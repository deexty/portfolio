import express from "express"
import db from "./config/dbConnect.js"
import routes from "./routes/index.js";
import cors from "cors"
import handlerErros from "./middlewares/handlerErros.js";
import handler404 from "./middlewares/handler404.js";

import fs from 'fs'
import https from "https"

const app = express()

app.use(cors())

db.once("open", () => console.log("escutando banco de dados"));
db.on("error", (error) => console.log(error + "- erro ao conectar com o banco de dados"))

app.get("/", (req,res) => res.status(200).send("API portfolio"))

routes(app)

app.use(handler404)
app.use(handlerErros);

/* const options = {
    key: fs.readFileSync('src/ssl/sua_chave_privada.pem'),
    cert: fs.readFileSync('src/ssl/seu_certificado.pem')
  };

// Configurar o servidor HTTP para redirecionar para HTTPS
app.use((req, res, next) => {
    if (!req.secure) {
      return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    next();
  });

// Iniciar o servidor HTTPS
https.createServer(options, app).listen(443, () => {
    console.log('Servidor HTTPS rodando na porta 443');
}); */

export default app