import express from "express"
import db from "./config/dbConnect.js"
import routes from "./routes/index.js";

const app = express()

db.once("open", () => console.log("escutando banco de dados"));
db.on("error", (error) => console.log(error + "- erro ao conectar com o banco de dados"))

app.get("/", (req,res) => res.status(200).send("API portfolio"))

routes(app)

export default app