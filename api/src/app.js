import express from "express"
import db from "./config/dbConnect.js"
import routes from "./routes/index.js";
import cors from "cors"
import handlerErros from "./middlewares/handlerErros.js";
import handler404 from "./middlewares/handler404.js";

const app = express()

app.use(cors())

db.once("open", () => console.log("escutando banco de dados"));
db.on("error", (error) => console.log(error + "- erro ao conectar com o banco de dados"))

app.get("/", (req,res) => res.status(200).send("API portfolio"))

routes(app)

app.use(handler404)
app.use(handlerErros);

export default app